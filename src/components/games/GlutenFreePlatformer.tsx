"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FiArrowDown, FiArrowLeft, FiArrowRight, FiArrowUp, FiPause, FiPlay, FiRotateCcw } from "react-icons/fi";

type GameStatus = "ready" | "playing" | "paused" | "won" | "lost";
type Platform = { x: number; y: number; width: number };
type Coin = { x: number; y: number };
type Hazard = { x: number; width: number };
type Level = {
  name: string;
  width: number;
  platforms: Platform[];
  coins: Coin[];
  hazards: Hazard[];
};
type GameState = {
  level: number;
  lives: number;
  coins: number;
  collected: Set<number>;
  x: number;
  y: number;
  velocityY: number;
  camera: number;
};
type GameHud = { level: number; lives: number; coins: number };

const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 440;
const PLAYER_WIDTH = 34;
const PLAYER_HEIGHT = 48;
const LEVELS: Level[] = [
  {
    name: "Łąka gryczana",
    width: 1750,
    platforms: [
      { x: 0, y: 370, width: 390 }, { x: 470, y: 370, width: 370 },
      { x: 930, y: 370, width: 310 }, { x: 1320, y: 370, width: 430 },
      { x: 260, y: 292, width: 130 }, { x: 600, y: 300, width: 140 },
      { x: 1040, y: 285, width: 145 }, { x: 1450, y: 300, width: 130 },
    ],
    coins: [
      { x: 205, y: 325 }, { x: 310, y: 250 }, { x: 540, y: 325 },
      { x: 670, y: 255 }, { x: 1010, y: 325 }, { x: 1110, y: 240 },
      { x: 1410, y: 325 }, { x: 1500, y: 255 },
    ],
    hazards: [{ x: 330, width: 32 }, { x: 760, width: 34 }, { x: 1150, width: 34 }, { x: 1570, width: 36 }],
  },
  {
    name: "Most z chrupkiego pieczywa",
    width: 1950,
    platforms: [
      { x: 0, y: 370, width: 270 }, { x: 360, y: 370, width: 330 },
      { x: 790, y: 370, width: 300 }, { x: 1190, y: 370, width: 310 },
      { x: 1610, y: 370, width: 340 }, { x: 210, y: 300, width: 125 },
      { x: 510, y: 275, width: 135 }, { x: 890, y: 290, width: 135 },
      { x: 1290, y: 270, width: 140 }, { x: 1690, y: 295, width: 135 },
    ],
    coins: [
      { x: 145, y: 325 }, { x: 260, y: 255 }, { x: 440, y: 325 },
      { x: 560, y: 230 }, { x: 860, y: 325 }, { x: 950, y: 245 },
      { x: 1260, y: 325 }, { x: 1350, y: 225 }, { x: 1700, y: 325 },
      { x: 1760, y: 250 },
    ],
    hazards: [{ x: 410, width: 36 }, { x: 650, width: 34 }, { x: 980, width: 36 }, { x: 1390, width: 35 }, { x: 1810, width: 36 }],
  },
  {
    name: "Jagodowe pagórki",
    width: 2180,
    platforms: [
      { x: 0, y: 370, width: 330 }, { x: 420, y: 370, width: 280 },
      { x: 790, y: 370, width: 300 }, { x: 1180, y: 370, width: 300 },
      { x: 1570, y: 370, width: 260 }, { x: 1910, y: 370, width: 270 },
      { x: 245, y: 295, width: 130 }, { x: 500, y: 270, width: 130 },
      { x: 860, y: 285, width: 130 }, { x: 1250, y: 270, width: 140 },
      { x: 1630, y: 290, width: 130 }, { x: 1970, y: 265, width: 140 },
    ],
    coins: [
      { x: 170, y: 325 }, { x: 295, y: 250 }, { x: 535, y: 225 },
      { x: 620, y: 325 }, { x: 900, y: 240 }, { x: 1010, y: 325 },
      { x: 1300, y: 225 }, { x: 1390, y: 325 }, { x: 1660, y: 245 },
      { x: 1760, y: 325 }, { x: 2010, y: 220 },
    ],
    hazards: [{ x: 285, width: 35 }, { x: 560, width: 35 }, { x: 930, width: 36 }, { x: 1330, width: 36 }, { x: 1700, width: 38 }, { x: 2040, width: 36 }],
  },
  {
    name: "Jaskinia makaroników",
    width: 2360,
    platforms: [
      { x: 0, y: 370, width: 280 }, { x: 370, y: 370, width: 280 },
      { x: 740, y: 370, width: 270 }, { x: 1100, y: 370, width: 280 },
      { x: 1480, y: 370, width: 260 }, { x: 1840, y: 370, width: 250 },
      { x: 2190, y: 370, width: 170 }, { x: 180, y: 295, width: 120 },
      { x: 450, y: 275, width: 130 }, { x: 820, y: 285, width: 130 },
      { x: 1170, y: 260, width: 135 }, { x: 1550, y: 285, width: 135 },
      { x: 1900, y: 270, width: 130 }, { x: 2220, y: 290, width: 120 },
    ],
    coins: [
      { x: 125, y: 325 }, { x: 220, y: 250 }, { x: 490, y: 230 },
      { x: 570, y: 325 }, { x: 855, y: 240 }, { x: 930, y: 325 },
      { x: 1210, y: 215 }, { x: 1300, y: 325 }, { x: 1590, y: 240 },
      { x: 1670, y: 325 }, { x: 1945, y: 225 }, { x: 1990, y: 325 },
      { x: 2255, y: 245 },
    ],
    hazards: [{ x: 220, width: 36 }, { x: 500, width: 36 }, { x: 830, width: 38 }, { x: 1210, width: 37 }, { x: 1590, width: 40 }, { x: 1940, width: 38 }, { x: 2250, width: 34 }],
  },
  {
    name: "Wielki festyn bez glutenu",
    width: 2550,
    platforms: [
      { x: 0, y: 370, width: 300 }, { x: 390, y: 370, width: 300 },
      { x: 780, y: 370, width: 290 }, { x: 1160, y: 370, width: 300 },
      { x: 1550, y: 370, width: 280 }, { x: 1920, y: 370, width: 260 },
      { x: 2270, y: 370, width: 280 }, { x: 195, y: 295, width: 130 },
      { x: 475, y: 265, width: 130 }, { x: 855, y: 280, width: 130 },
      { x: 1240, y: 255, width: 135 }, { x: 1630, y: 275, width: 130 },
      { x: 1990, y: 260, width: 130 }, { x: 2320, y: 285, width: 140 },
    ],
    coins: [
      { x: 135, y: 325 }, { x: 245, y: 250 }, { x: 510, y: 220 },
      { x: 610, y: 325 }, { x: 890, y: 235 }, { x: 990, y: 325 },
      { x: 1280, y: 210 }, { x: 1380, y: 325 }, { x: 1670, y: 230 },
      { x: 1750, y: 325 }, { x: 2030, y: 215 }, { x: 2100, y: 325 },
      { x: 2360, y: 240 }, { x: 2440, y: 325 },
    ],
    hazards: [{ x: 235, width: 38 }, { x: 510, width: 37 }, { x: 900, width: 38 }, { x: 1270, width: 40 }, { x: 1660, width: 40 }, { x: 2020, width: 38 }, { x: 2380, width: 40 }],
  },
];

const INITIAL_GAME: GameState = {
  level: 0,
  lives: 3,
  coins: 0,
  collected: new Set<number>(),
  x: 55,
  y: 322,
  velocityY: 0,
  camera: 0,
};

const GlutenFreePlatformer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<GameState>({ ...INITIAL_GAME, collected: new Set() });
  const statusRef = useRef<GameStatus>("ready");
  const keysRef = useRef({ left: false, right: false });
  const [status, setStatus] = useState<GameStatus>("ready");
  const [hud, setHud] = useState<GameHud>({ level: 1, lives: 3, coins: 0 });

  const changeStatus = useCallback((next: GameStatus) => {
    statusRef.current = next;
    setStatus(next);
  }, []);

  const startGame = useCallback(() => {
    gameRef.current = { ...INITIAL_GAME, collected: new Set() };
    keysRef.current = { left: false, right: false };
    setHud({ level: 1, lives: 3, coins: 0 });
    changeStatus("playing");
  }, [changeStatus]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return undefined;

    let frame = 0;
    let previousTime = performance.now();
    let hudElapsed = 0;

    const draw = (time: number) => {
      const game = gameRef.current;
      const level = LEVELS[game.level];
      context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      const sky = context.createLinearGradient(0, 0, 0, CANVAS_HEIGHT);
      sky.addColorStop(0, "#b6e8f2");
      sky.addColorStop(1, "#f5f3d9");
      context.fillStyle = sky;
      context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

      context.save();
      context.translate(-game.camera, 0);
      context.fillStyle = "rgba(255, 255, 255, 0.68)";
      for (let x = Math.floor(game.camera / 240) * 240; x < game.camera + CANVAS_WIDTH + 240; x += 240) {
        context.beginPath();
        context.ellipse(x + 80, 82, 36, 11, 0, 0, Math.PI * 2);
        context.ellipse(x + 107, 77, 25, 16, 0, 0, Math.PI * 2);
        context.ellipse(x + 132, 83, 31, 10, 0, 0, Math.PI * 2);
        context.fill();
      }

      for (const platform of level.platforms) {
        context.fillStyle = "#618647";
        context.fillRect(platform.x, platform.y, platform.width, CANVAS_HEIGHT - platform.y);
        context.fillStyle = "#a5c86d";
        context.fillRect(platform.x, platform.y, platform.width, 9);
        context.fillStyle = "rgba(255,255,255,0.16)";
        for (let x = platform.x + 18; x < platform.x + platform.width; x += 42) {
          context.fillRect(x, platform.y + 21, 10, 4);
        }
      }

      level.coins.forEach((coin, index) => {
        if (game.level === gameRef.current.level && game.collected.has(index)) return;
        const bob = Math.sin(time / 220 + index) * 3;
        context.fillStyle = "#e6a92f";
        context.beginPath();
        context.ellipse(coin.x, coin.y + bob, 9, 12, 0, 0, Math.PI * 2);
        context.fill();
        context.strokeStyle = "#fff0a3";
        context.lineWidth = 2;
        context.stroke();
      });

      level.hazards.forEach((hazard) => {
        context.fillStyle = "#d56d51";
        context.beginPath();
        context.moveTo(hazard.x, 370);
        context.lineTo(hazard.x + hazard.width / 2, 339);
        context.lineTo(hazard.x + hazard.width, 370);
        context.closePath();
        context.fill();
        context.fillStyle = "#fff2dc";
        context.fillRect(hazard.x + hazard.width / 2 - 2, 355, 4, 8);
      });

      const exitX = level.width - 72;
      context.fillStyle = "#725943";
      context.fillRect(exitX, 294, 8, 76);
      context.fillStyle = "#f6d46b";
      context.beginPath();
      context.moveTo(exitX + 8, 296);
      context.lineTo(exitX + 46, 310);
      context.lineTo(exitX + 8, 326);
      context.closePath();
      context.fill();

      const playerX = game.x;
      const playerY = game.y;
      context.fillStyle = "#385d40";
      context.fillRect(playerX + 4, playerY + 34, 11, 14);
      context.fillRect(playerX + 20, playerY + 34, 11, 14);
      context.fillStyle = "#f3c49c";
      context.fillRect(playerX + 5, playerY + 12, 25, 25);
      context.fillStyle = "#568c55";
      context.fillRect(playerX + 2, playerY + 24, 31, 15);
      context.fillStyle = "#de7656";
      context.fillRect(playerX + 2, playerY + 7, 31, 8);
      context.fillRect(playerX + 9, playerY, 17, 10);
      context.fillStyle = "#283d34";
      context.fillRect(playerX + 21, playerY + 17, 3, 4);
      context.restore();
    };

    const tick = (now: number) => {
      const delta = Math.min((now - previousTime) / 1000, 0.035);
      previousTime = now;
      const game = gameRef.current;
      const level = LEVELS[game.level];

      if (statusRef.current === "playing") {
        const oldBottom = game.y + PLAYER_HEIGHT;
        const direction = Number(keysRef.current.right) - Number(keysRef.current.left);
        game.x = Math.max(0, Math.min(level.width - PLAYER_WIDTH, game.x + direction * 255 * delta));
        game.velocityY = Math.min(game.velocityY + 1550 * delta, 900);
        game.y += game.velocityY * delta;

        if (game.velocityY >= 0) {
          const landedOn = level.platforms.find(
            (platform) =>
              oldBottom <= platform.y &&
              game.y + PLAYER_HEIGHT >= platform.y &&
              game.x + PLAYER_WIDTH > platform.x &&
              game.x < platform.x + platform.width,
          );
          if (landedOn) {
            game.y = landedOn.y - PLAYER_HEIGHT;
            game.velocityY = 0;
          }
        }

        level.coins.forEach((coin, index) => {
          if (
            !game.collected.has(index) &&
            Math.abs(game.x + PLAYER_WIDTH / 2 - coin.x) < 25 &&
            Math.abs(game.y + PLAYER_HEIGHT / 2 - coin.y) < 28
          ) {
            game.collected.add(index);
            game.coins += 1;
          }
        });

        const hitHazard = level.hazards.some(
          (hazard) =>
            game.x + PLAYER_WIDTH > hazard.x + 3 &&
            game.x < hazard.x + hazard.width - 3 &&
            game.y + PLAYER_HEIGHT > 342,
        );
        const fell = game.y > CANVAS_HEIGHT + 40;
        if (hitHazard || fell) {
          game.lives -= 1;
          game.x = 55;
          game.y = 322;
          game.velocityY = 0;
          if (game.lives <= 0) changeStatus("lost");
        } else if (game.x + PLAYER_WIDTH >= level.width - 82) {
          if (game.level === LEVELS.length - 1) {
            changeStatus("won");
          } else {
            game.level += 1;
            game.x = 55;
            game.y = 322;
            game.velocityY = 0;
            game.camera = 0;
            game.collected = new Set();
          }
        }

        game.camera = Math.max(
          0,
          Math.min(level.width - CANVAS_WIDTH, game.x - CANVAS_WIDTH * 0.34),
        );
        hudElapsed += delta;
        if (hudElapsed >= 0.12) {
          hudElapsed = 0;
          setHud({ level: game.level + 1, lives: game.lives, coins: game.coins });
        }
      }

      draw(now);
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [changeStatus]);

  const jump = useCallback(() => {
    const game = gameRef.current;
    if (statusRef.current !== "playing") return;
    const standing = LEVELS[game.level].platforms.some(
      (platform) =>
        Math.abs(game.y + PLAYER_HEIGHT - platform.y) < 2 &&
        game.x + PLAYER_WIDTH > platform.x &&
        game.x < platform.x + platform.width,
    );
    if (standing) game.velocityY = -610;
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
        keysRef.current.left = true;
        event.preventDefault();
      } else if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
        keysRef.current.right = true;
        event.preventDefault();
      } else if (
        (event.key === "ArrowUp" || event.key === " " || event.key.toLowerCase() === "w") &&
        !event.repeat
      ) {
        event.preventDefault();
        jump();
      } else if (event.key.toLowerCase() === "p" && statusRef.current === "playing") {
        changeStatus("paused");
      } else if (event.key.toLowerCase() === "p" && statusRef.current === "paused") {
        changeStatus("playing");
      }
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") keysRef.current.left = false;
      if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") keysRef.current.right = false;
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [changeStatus, jump]);

  const togglePause = () => {
    if (status === "playing") {
      keysRef.current = { left: false, right: false };
      changeStatus("paused");
    } else if (status === "paused") {
      changeStatus("playing");
    }
  };
  const setDirection = (direction: "left" | "right", pressed: boolean) => {
    keysRef.current[direction] = pressed;
  };

  const levelName = LEVELS[Math.min(hud.level - 1, LEVELS.length - 1)].name;

  return (
    <section className="platformer-page">
      <div className="platformer-intro">
        <span className="platformer-kicker">Przygoda dla małych i dużych</span>
        <h1>Maria i bezglutenowa kraina</h1>
        <p>
          Wyrusz z Marią po złote ziarenka! Przeskakuj przepaście, omijaj
          jagodowe krzaczki i przejdź przez pięć coraz trudniejszych krain.
        </p>
      </div>

      <div className="platformer-layout">
        <aside className="platformer-card platformer-instructions">
          <h2>Jak grać?</h2>
          <ol>
            <li>Poruszaj się strzałkami <b>← →</b> lub klawiszami <b>A / D</b>.</li>
            <li>Skacz strzałką <b>↑</b>, spacją lub klawiszem <b>W</b>.</li>
            <li>Zbieraj złote ziarenka i dotrzyj do chorągiewki na końcu poziomu.</li>
            <li>Masz trzy życia na całą wyprawę — uważaj na krzaczki i przepaście!</li>
          </ol>
          <p className="platformer-hint">Wskazówka: przytrzymaj kierunek i skacz tuż przed przeszkodą.</p>
        </aside>

        <div className="platformer-game-card">
          <div className="platformer-hud" aria-live="polite">
            <div><span>Poziom</span><strong>{hud.level}/5 · {levelName}</strong></div>
            <div><span>Ziarenka</span><strong>🟡 {hud.coins}</strong></div>
            <div><span>Życia</span><strong>{"❤️".repeat(hud.lives) || "—"}</strong></div>
          </div>
          <div className="platformer-canvas-wrap">
            <canvas
              ref={canvasRef}
              className="platformer-canvas"
              width={CANVAS_WIDTH}
              height={CANVAS_HEIGHT}
              role="img"
              aria-label="Platformowa gra przygodowa z Marią, złotymi ziarenkami, platformami i przeszkodami."
            />
            {status !== "playing" && (
              <div className="platformer-overlay">
                <span aria-hidden="true">{status === "won" ? "🏆" : status === "lost" ? "💚" : status === "paused" ? "⏸️" : "🌾"}</span>
                <h2>
                  {status === "ready" ? "Gotowa na przygodę?" : status === "paused" ? "Chwila odpoczynku" : status === "won" ? "Kraina uratowana!" : "Spróbuj jeszcze raz!"}
                </h2>
                <p>
                  {status === "ready"
                    ? "Zbieraj ziarenka, omijaj przeszkody i odkryj wszystkie pięć poziomów."
                    : status === "paused"
                      ? "Twoja przygoda czeka — wracaj, kiedy chcesz."
                      : status === "won"
                        ? `Brawo! Ukończono 5 poziomów i zebrano ${hud.coins} ziarenek.`
                        : `Wyprawa zakończona. Udało Ci się zebrać ${hud.coins} ziarenek.`}
                </p>
                <button type="button" className="platformer-primary-button" onClick={status === "paused" ? togglePause : startGame}>
                  {status === "paused" ? <><FiPlay /> Wznów grę</> : status === "ready" ? <><FiPlay /> Rozpocznij</> : <><FiRotateCcw /> Zagraj ponownie</>}
                </button>
              </div>
            )}
          </div>
          <div className="platformer-actions">
            <button type="button" className="platformer-pause-button" onClick={togglePause} disabled={status !== "playing" && status !== "paused"}>
              {status === "paused" ? <FiPlay aria-hidden="true" /> : <FiPause aria-hidden="true" />}
              {status === "paused" ? "Wznów" : "Pauza"}
            </button>
            <div className="platformer-touch-controls" aria-label="Sterowanie dotykowe">
              <button type="button" aria-label="Idź w lewo" onPointerDown={() => setDirection("left", true)} onPointerUp={() => setDirection("left", false)} onPointerLeave={() => setDirection("left", false)} onPointerCancel={() => setDirection("left", false)}><FiArrowLeft /></button>
              <button type="button" aria-label="Idź w prawo" onPointerDown={() => setDirection("right", true)} onPointerUp={() => setDirection("right", false)} onPointerLeave={() => setDirection("right", false)} onPointerCancel={() => setDirection("right", false)}><FiArrowRight /></button>
              <button type="button" aria-label="Skocz" onPointerDown={jump}><FiArrowUp /><FiArrowDown className="platformer-jump-accent" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlutenFreePlatformer;
