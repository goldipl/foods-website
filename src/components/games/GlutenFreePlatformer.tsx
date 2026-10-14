"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FiArrowDown, FiArrowLeft, FiArrowRight, FiArrowUp, FiPause, FiPlay, FiRotateCcw } from "react-icons/fi";

type GameStatus = "ready" | "playing" | "paused" | "won" | "lost";
type ThemeName = "meadow" | "bread" | "berry" | "cave" | "festival";
type BonusKind = "shield" | "speed" | "life";
type Platform = { x: number; y: number; width: number; ground: boolean };
type Coin = { x: number; y: number };
type Hazard = { x: number; width: number };
type Enemy = { x: number; patrol: number; speed: number };
type Bonus = { x: number; y: number; kind: BonusKind };
type Level = {
  name: string;
  width: number;
  exitX: number;
  theme: ThemeName;
  platforms: Platform[];
  coins: Coin[];
  hazards: Hazard[];
  enemies: Enemy[];
  bonuses: Bonus[];
  checkpoints: number[];
};
type GameState = {
  level: number;
  lives: number;
  coins: number;
  collected: Set<number>;
  collectedBonuses: Set<number>;
  defeated: Set<number>;
  x: number;
  y: number;
  velocityY: number;
  camera: number;
  checkpointX: number;
  invulnerableUntil: number;
  shieldUntil: number;
  speedUntil: number;
};
type GameHud = { level: number; lives: number; coins: number; bonus: string };
type Palette = {
  skyTop: string;
  skyBottom: string;
  hills: string[];
  ground: string;
  groundTop: string;
  ledge: string;
  accent: string;
  hazard: string;
};
type LevelBlueprint = {
  name: string;
  width: number;
  theme: ThemeName;
  ground: [number, number][];
  ledges: [number, number, number][];
  coins: [number, number][];
  hazards: [number, number][];
  enemies: [number, number, number][];
  bonuses: [number, number, BonusKind][];
};

const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 440;
const MOBILE_GAME_ZOOM = 1.25;
const PLAYER_WIDTH = 34;
const PLAYER_HEIGHT = 48;
const MAX_LIVES = 5;
const PALETTES: Record<ThemeName, Palette> = {
  meadow: {
    skyTop: "#8ed8ef", skyBottom: "#f5efce", hills: ["#c8df9a", "#a8cc78"],
    ground: "#618647", groundTop: "#a5c86d", ledge: "#83ad56", accent: "#fff4cf", hazard: "#d56d51",
  },
  bread: {
    skyTop: "#f5c27e", skyBottom: "#fff0bd", hills: ["#e6b76e", "#c58e4c"],
    ground: "#9b7046", groundTop: "#edc276", ledge: "#d3a65d", accent: "#fff3cc", hazard: "#b65d45",
  },
  berry: {
    skyTop: "#b8b2e8", skyBottom: "#f7d9e5", hills: ["#b7a0d0", "#8e79b2"],
    ground: "#596f45", groundTop: "#a5bd68", ledge: "#859b5a", accent: "#ffe6f1", hazard: "#bb4c73",
  },
  cave: {
    skyTop: "#302947", skyBottom: "#61516d", hills: ["#55425e", "#3d354d"],
    ground: "#514454", groundTop: "#9f7b76", ledge: "#78606d", accent: "#e8b9a6", hazard: "#d77b72",
  },
  festival: {
    skyTop: "#f2a889", skyBottom: "#ffe5ac", hills: ["#eaa477", "#cb806d"],
    ground: "#73794a", groundTop: "#c6bb68", ledge: "#a5a05c", accent: "#fff2c5", hazard: "#bd5e4c",
  },
};

const BLUEPRINTS: LevelBlueprint[] = [
  {
    name: "Łąka gryczana",
    width: 2750,
    theme: "meadow",
    ground: [[0, 390], [470, 290], [835, 285], [1190, 300], [1560, 280], [1920, 285], [2285, 465]],
    ledges: [[245, 294, 125], [565, 285, 125], [935, 275, 125], [1280, 285, 125], [1650, 270, 130], [2010, 285, 125], [2350, 280, 135]],
    coins: [[150, 326], [270, 255], [525, 325], [620, 245], [900, 325], [980, 235], [1260, 325], [1320, 245], [1630, 325], [1700, 230], [1990, 325], [2070, 245], [2390, 325], [2460, 240]],
    hazards: [[320, 34], [665, 34], [1030, 36], [1400, 36], [1750, 36], [2110, 36]],
    enemies: [[535, 24, 1.15], [960, 26, 1.3], [1650, 26, 1.4], [2390, 28, 1.5]],
    bonuses: [[590, 235, "shield"], [1300, 235, "life"], [2040, 235, "speed"]],
  },
  {
    name: "Most z chrupkiego pieczywa",
    width: 3050,
    theme: "bread",
    ground: [[0, 335], [415, 285], [785, 275], [1145, 285], [1515, 285], [1885, 275], [2245, 285], [2615, 435]],
    ledges: [[195, 285, 120], [485, 260, 125], [850, 280, 125], [1215, 245, 125], [1580, 275, 125], [1950, 250, 130], [2305, 270, 125], [2670, 275, 135]],
    coins: [[125, 325], [220, 245], [475, 325], [535, 220], [845, 325], [900, 240], [1200, 325], [1250, 205], [1560, 325], [1630, 235], [1935, 325], [2000, 210], [2300, 325], [2360, 230], [2700, 325], [2770, 235]],
    hazards: [[260, 34], [560, 36], [930, 36], [1290, 38], [1660, 36], [2030, 38], [2390, 36]],
    enemies: [[480, 26, 1.25], [850, 28, 1.4], [1580, 28, 1.55], [2300, 28, 1.7], [2700, 30, 1.8]],
    bonuses: [[510, 215, "speed"], [1245, 200, "shield"], [1980, 205, "life"], [2720, 225, "shield"]],
  },
  {
    name: "Jagodowe pagórki",
    width: 3350,
    theme: "berry",
    ground: [[0, 360], [440, 285], [810, 275], [1165, 275], [1525, 285], [1895, 265], [2240, 285], [2605, 275], [2960, 390]],
    ledges: [[220, 285, 125], [490, 255, 125], [860, 275, 125], [1205, 240, 130], [1570, 260, 125], [1930, 235, 125], [2285, 265, 125], [2645, 235, 130], [3000, 265, 135]],
    coins: [[145, 325], [255, 245], [495, 325], [555, 215], [855, 325], [905, 230], [1200, 325], [1260, 195], [1570, 325], [1630, 215], [1935, 325], [1990, 190], [2285, 325], [2340, 220], [2645, 325], [2710, 190], [3020, 325], [3090, 220]],
    hazards: [[275, 36], [565, 38], [935, 36], [1290, 38], [1655, 38], [2010, 38], [2380, 38], [2735, 38]],
    enemies: [[500, 28, 1.35], [870, 28, 1.5], [1570, 30, 1.65], [1950, 30, 1.8], [2650, 30, 1.9], [3020, 32, 2]],
    bonuses: [[540, 205, "life"], [1230, 190, "speed"], [1960, 185, "shield"], [2680, 180, "life"], [3050, 210, "speed"]],
  },
  {
    name: "Jaskinia makaroników",
    width: 3600,
    theme: "cave",
    ground: [[0, 325], [400, 270], [750, 270], [1100, 270], [1450, 270], [1800, 270], [2150, 270], [2500, 270], [2850, 280], [3200, 400]],
    ledges: [[175, 285, 125], [435, 250, 120], [790, 270, 125], [1140, 230, 125], [1490, 260, 125], [1840, 225, 125], [2190, 255, 125], [2540, 215, 125], [2895, 245, 125], [3240, 260, 145]],
    coins: [[110, 325], [200, 245], [445, 325], [485, 210], [795, 325], [845, 230], [1145, 325], [1190, 190], [1495, 325], [1540, 220], [1845, 325], [1890, 180], [2195, 325], [2240, 215], [2545, 325], [2590, 170], [2900, 325], [2950, 205], [3280, 325], [3330, 220]],
    hazards: [[235, 36], [500, 38], [855, 38], [1205, 38], [1555, 38], [1910, 40], [2260, 38], [2610, 40], [2960, 38]],
    enemies: [[445, 28, 1.5], [800, 30, 1.7], [1150, 30, 1.8], [1850, 32, 1.95], [2200, 32, 2.05], [2900, 32, 2.15], [3260, 34, 2.2]],
    bonuses: [[460, 195, "shield"], [1170, 175, "life"], [1870, 165, "speed"], [2570, 155, "shield"], [3280, 205, "life"]],
  },
  {
    name: "Wielki festyn bez glutenu",
    width: 3900,
    theme: "festival",
    ground: [[0, 350], [430, 270], [780, 270], [1130, 270], [1480, 270], [1830, 270], [2180, 270], [2530, 270], [2880, 270], [3230, 670]],
    ledges: [[190, 280, 125], [460, 245, 125], [810, 265, 125], [1160, 225, 125], [1510, 255, 125], [1860, 215, 125], [2210, 245, 125], [2560, 205, 125], [2910, 235, 125], [3280, 250, 145]],
    coins: [[125, 325], [215, 240], [470, 325], [510, 205], [820, 325], [860, 225], [1170, 325], [1210, 185], [1520, 325], [1560, 215], [1870, 325], [1910, 175], [2220, 325], [2260, 205], [2570, 325], [2610, 165], [2920, 325], [2960, 195], [3300, 325], [3340, 210], [3500, 325], [3650, 325]],
    hazards: [[255, 38], [500, 40], [855, 38], [1205, 40], [1555, 38], [1910, 40], [2260, 40], [2610, 40], [2960, 38]],
    enemies: [[470, 30, 1.65], [820, 30, 1.8], [1170, 32, 1.9], [1520, 32, 2], [1870, 34, 2.1], [2220, 34, 2.2], [2570, 34, 2.3], [2920, 36, 2.4], [3290, 34, 2.2]],
    bonuses: [[480, 190, "life"], [1180, 170, "shield"], [1880, 160, "speed"], [2580, 150, "life"], [3300, 195, "shield"], [3580, 290, "speed"]],
  },
];

const LEVELS: Level[] = BLUEPRINTS.map((blueprint) => {
  const groundPlatforms = blueprint.ground.map(([x, width]): Platform => ({ x, y: 370, width, ground: true }));
  const ledges = blueprint.ledges.map(([x, y, width]): Platform => ({ x, y, width, ground: false }));
  const lastGround = blueprint.ground[blueprint.ground.length - 1];

  return {
    name: blueprint.name,
    width: blueprint.width,
    exitX: blueprint.width - 108,
    theme: blueprint.theme,
    platforms: [...groundPlatforms, ...ledges],
    coins: blueprint.coins.map(([x, y]) => ({ x, y })),
    hazards: blueprint.hazards.map(([x, width]) => ({ x, width })),
    enemies: blueprint.enemies.map(([x, patrol, speed]) => ({ x, patrol, speed })),
    bonuses: blueprint.bonuses.map(([x, y, kind]) => ({ x, y, kind })),
    checkpoints: blueprint.ground
      .map(([x]) => x + 42)
      .filter((x) => x > 400 && x < lastGround[0] + lastGround[1] - 300),
  };
});

const INITIAL_GAME: GameState = {
  level: 0,
  lives: 3,
  coins: 0,
  collected: new Set<number>(),
  collectedBonuses: new Set<number>(),
  defeated: new Set<number>(),
  x: 55,
  y: 322,
  velocityY: 0,
  camera: 0,
  checkpointX: 55,
  invulnerableUntil: 0,
  shieldUntil: 0,
  speedUntil: 0,
};

const isStandingOnPlatform = (game: GameState, level: Level) =>
  level.platforms.some(
    (platform) =>
      Math.abs(game.y + PLAYER_HEIGHT - platform.y) < 3 &&
      game.x + PLAYER_WIDTH > platform.x &&
      game.x < platform.x + platform.width,
  );

const getEnemyPosition = (enemy: Enemy, time: number) =>
  enemy.x + Math.sin(time / 550 * enemy.speed) * enemy.patrol;

const GlutenFreePlatformer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<GameState>({ ...INITIAL_GAME, collected: new Set(), collectedBonuses: new Set(), defeated: new Set() });
  const statusRef = useRef<GameStatus>("ready");
  const keysRef = useRef({ left: false, right: false });
  const [status, setStatus] = useState<GameStatus>("ready");
  const [hud, setHud] = useState<GameHud>({ level: 1, lives: 3, coins: 0, bonus: "—" });

  const changeStatus = useCallback((next: GameStatus) => {
    statusRef.current = next;
    setStatus(next);
  }, []);

  const startGame = useCallback(() => {
    gameRef.current = {
      ...INITIAL_GAME,
      collected: new Set(),
      collectedBonuses: new Set(),
      defeated: new Set(),
    };
    keysRef.current = { left: false, right: false };
    setHud({ level: 1, lives: 3, coins: 0, bonus: "—" });
    changeStatus("playing");
  }, [changeStatus]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return undefined;

    const mobileViewport = window.matchMedia("(max-width: 560px)");
    const resizeCanvas = () => {
      canvas.height = Math.round(CANVAS_HEIGHT * (mobileViewport.matches ? MOBILE_GAME_ZOOM : 1));
    };
    resizeCanvas();
    mobileViewport.addEventListener("change", resizeCanvas);

    let frame = 0;
    let previousTime = performance.now();
    let hudElapsed = 0;

    const drawBackdrop = (level: Level, camera: number, time: number, viewportWidth: number) => {
      const palette = PALETTES[level.theme];
      const sky = context.createLinearGradient(0, 0, 0, CANVAS_HEIGHT);
      sky.addColorStop(0, palette.skyTop);
      sky.addColorStop(1, palette.skyBottom);
      context.fillStyle = sky;
      context.fillRect(0, 0, viewportWidth, CANVAS_HEIGHT);

      const parallax = camera * 0.2;
      const firstHill = Math.floor(parallax / 340) * 340;
      for (let x = firstHill; x < parallax + viewportWidth + 340; x += 340) {
        const screenX = x - parallax;
        context.fillStyle = palette.hills[Math.floor(x / 340) % palette.hills.length];
        context.beginPath();
        context.ellipse(screenX + 135, 320, 205, 105, 0, Math.PI, Math.PI * 2);
        context.fill();

        if (level.theme === "meadow" || level.theme === "festival") {
          context.fillStyle = level.theme === "meadow" ? "rgba(255,255,255,0.72)" : "rgba(255,240,204,0.65)";
          context.beginPath();
          context.ellipse(screenX + 200, 92 + Math.sin(time / 1300 + x) * 3, 34, 11, 0, 0, Math.PI * 2);
          context.ellipse(screenX + 225, 87 + Math.sin(time / 1300 + x) * 3, 24, 16, 0, 0, Math.PI * 2);
          context.ellipse(screenX + 250, 94 + Math.sin(time / 1300 + x) * 3, 29, 9, 0, 0, Math.PI * 2);
          context.fill();
        } else if (level.theme === "berry") {
          context.fillStyle = "rgba(119,55,101,0.52)";
          context.beginPath();
          context.arc(screenX + 154, 279, 8, 0, Math.PI * 2);
          context.arc(screenX + 178, 294, 6, 0, Math.PI * 2);
          context.arc(screenX + 194, 274, 7, 0, Math.PI * 2);
          context.fill();
        } else if (level.theme === "cave") {
          context.fillStyle = "rgba(26,22,39,0.42)";
          context.beginPath();
          context.moveTo(screenX + 40, 0);
          context.lineTo(screenX + 68, 78);
          context.lineTo(screenX + 88, 0);
          context.moveTo(screenX + 218, 0);
          context.lineTo(screenX + 242, 58);
          context.lineTo(screenX + 264, 0);
          context.fill();
          context.fillStyle = "rgba(229,169,144,0.45)";
          context.beginPath();
          context.arc(screenX + 160, 275, 7, 0, Math.PI * 2);
          context.fill();
        } else if (level.theme === "bread") {
          context.fillStyle = "rgba(255,235,185,0.55)";
          context.beginPath();
          context.arc(screenX + 177, 270, 10, 0, Math.PI * 2);
          context.arc(screenX + 206, 285, 7, 0, Math.PI * 2);
          context.fill();
        }
      }

      if (level.theme === "festival") {
        const colors = ["#db7654", "#f4d267", "#719b60", "#8876ac"];
        for (let x = -((camera * 0.38) % 120); x < viewportWidth; x += 120) {
          context.fillStyle = colors[Math.floor((x + camera * 0.38 + 1200) / 120) % colors.length];
          context.beginPath();
          context.moveTo(x, 18);
          context.lineTo(x + 34, 18);
          context.lineTo(x + 17, 48);
          context.closePath();
          context.fill();
        }
      }
    };

    const draw = (time: number) => {
      const game = gameRef.current;
      const level = LEVELS[game.level];
      const zoom = mobileViewport.matches ? MOBILE_GAME_ZOOM : 1;
      const viewportWidth = CANVAS_WIDTH / zoom;
      context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      context.save();
      context.scale(zoom, zoom);
      drawBackdrop(level, game.camera, time, viewportWidth);
      context.translate(-game.camera, 0);
      const palette = PALETTES[level.theme];

      for (const platform of level.platforms) {
        context.fillStyle = platform.ground ? palette.ground : palette.ledge;
        context.fillRect(platform.x, platform.y, platform.width, platform.ground ? CANVAS_HEIGHT - platform.y : 18);
        context.fillStyle = palette.groundTop;
        context.fillRect(platform.x, platform.y, platform.width, platform.ground ? 9 : 6);
        context.fillStyle = "rgba(255,255,255,0.2)";
        for (let x = platform.x + 18; x < platform.x + platform.width; x += 42) {
          context.fillRect(x, platform.y + (platform.ground ? 21 : 10), 10, 3);
        }
      }

      level.coins.forEach((coin, index) => {
        if (game.collected.has(index)) return;
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
        context.fillStyle = palette.hazard;
        const spikes = Math.max(2, Math.floor(hazard.width / 12));
        const spikeWidth = hazard.width / spikes;
        context.beginPath();
        context.moveTo(hazard.x, 370);
        for (let index = 0; index < spikes; index += 1) {
          context.lineTo(hazard.x + spikeWidth * (index + 0.5), 339);
          context.lineTo(hazard.x + spikeWidth * (index + 1), 370);
        }
        context.closePath();
        context.fill();
        context.fillStyle = palette.accent;
        context.fillRect(hazard.x + hazard.width / 2 - 2, 354, 4, 8);
      });

      level.bonuses.forEach((bonus, index) => {
        if (game.collectedBonuses.has(index)) return;
        const bob = Math.sin(time / 190 + index * 2) * 4;
        const color = bonus.kind === "shield" ? "#75c6d2" : bonus.kind === "speed" ? "#f2b84b" : "#e7797a";
        context.fillStyle = "rgba(255,255,255,0.76)";
        context.beginPath();
        context.arc(bonus.x, bonus.y + bob, 15, 0, Math.PI * 2);
        context.fill();
        context.fillStyle = color;
        context.beginPath();
        context.arc(bonus.x, bonus.y + bob, 11, 0, Math.PI * 2);
        context.fill();
        context.fillStyle = "#fff";
        context.font = "bold 14px sans-serif";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText(bonus.kind === "life" ? "+" : bonus.kind === "shield" ? "S" : "»", bonus.x, bonus.y + bob);
      });

      level.enemies.forEach((enemy, index) => {
        if (game.defeated.has(index)) return;
        const enemyX = getEnemyPosition(enemy, time);
        const enemyY = 340 + Math.sin(time / 150 + index) * 2;
        context.font = '32px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif';
        context.textAlign = "center";
        context.textBaseline = "bottom";
        context.fillText("👾", enemyX, enemyY + 30);
      });

      context.fillStyle = "#725943";
      context.fillRect(level.exitX, 294, 8, 76);
      context.fillStyle = level.theme === "cave" ? "#f2bd75" : "#f6d46b";
      context.beginPath();
      context.moveTo(level.exitX + 8, 296);
      context.lineTo(level.exitX + 48, 310);
      context.lineTo(level.exitX + 8, 326);
      context.closePath();
      context.fill();

      const playerX = game.x;
      const playerY = game.y;
      const invisible = time < game.invulnerableUntil && Math.floor(time / 90) % 2 === 0;
      if (!invisible) {
        context.font = '42px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif';
        context.textAlign = "center";
        context.textBaseline = "bottom";
        context.fillText("👩🏻‍🌾", playerX + PLAYER_WIDTH / 2, playerY + PLAYER_HEIGHT);
      }
      if (time < game.shieldUntil) {
        context.strokeStyle = "rgba(117,198,210,0.8)";
        context.lineWidth = 3;
        context.beginPath();
        context.ellipse(playerX + PLAYER_WIDTH / 2, playerY + PLAYER_HEIGHT / 2, 26, 31, 0, 0, Math.PI * 2);
        context.stroke();
      }
      context.restore();
    };

    const tick = (now: number) => {
      const delta = Math.min((now - previousTime) / 1000, 0.035);
      previousTime = now;
      const game = gameRef.current;

      if (statusRef.current === "playing") {
        let level = LEVELS[game.level];
        const oldBottom = game.y + PLAYER_HEIGHT;
        const direction = Number(keysRef.current.right) - Number(keysRef.current.left);
        const speed = now < game.speedUntil ? 340 : 255;
        let nextX = Math.max(0, Math.min(level.width - PLAYER_WIDTH, game.x + direction * speed * delta));

        for (const platform of level.platforms) {
          if (!platform.ground || game.y >= platform.y || game.y + PLAYER_HEIGHT <= platform.y + 4) continue;
          if (direction > 0 && game.x + PLAYER_WIDTH <= platform.x && nextX + PLAYER_WIDTH > platform.x) {
            nextX = platform.x - PLAYER_WIDTH;
          } else if (direction < 0 && game.x >= platform.x + platform.width && nextX < platform.x + platform.width) {
            nextX = platform.x + platform.width;
          }
        }
        game.x = nextX;
        game.velocityY = Math.min(game.velocityY + 1550 * delta, 900);
        game.y += game.velocityY * delta;

        if (game.velocityY >= 0) {
          const landedOn = level.platforms
            .filter(
              (platform) =>
                oldBottom <= platform.y + 8 &&
                game.y + PLAYER_HEIGHT >= platform.y &&
                game.x + PLAYER_WIDTH > platform.x &&
                game.x < platform.x + platform.width,
            )
            .sort((first, second) => first.y - second.y)[0];
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

        level.bonuses.forEach((bonus, index) => {
          if (
            game.collectedBonuses.has(index) ||
            Math.abs(game.x + PLAYER_WIDTH / 2 - bonus.x) >= 27 ||
            Math.abs(game.y + PLAYER_HEIGHT / 2 - bonus.y) >= 30
          ) return;

          game.collectedBonuses.add(index);
          if (bonus.kind === "life") game.lives = Math.min(MAX_LIVES, game.lives + 1);
          if (bonus.kind === "shield") game.shieldUntil = now + 7500;
          if (bonus.kind === "speed") game.speedUntil = now + 7500;
        });

        level.enemies.forEach((enemy, index) => {
          if (game.defeated.has(index)) return;
          const enemyX = getEnemyPosition(enemy, now);
          const enemyY = 340;
          const overlapsEnemy =
            game.x + PLAYER_WIDTH > enemyX - 14 &&
            game.x < enemyX + 14 &&
            game.y + PLAYER_HEIGHT > enemyY + 3 &&
            game.y < enemyY + 29;
          if (!overlapsEnemy) return;

          if (game.velocityY > 0 && oldBottom <= enemyY + 13 && game.y + PLAYER_HEIGHT <= enemyY + 16) {
            game.defeated.add(index);
            game.velocityY = -420;
            game.coins += 2;
          } else if (now >= game.invulnerableUntil && now >= game.shieldUntil) {
            game.lives -= 1;
            game.x = game.checkpointX;
            game.y = 322;
            game.velocityY = 0;
            game.invulnerableUntil = now + 1300;
          }
        });

        const hitHazard = level.hazards.some(
          (hazard) =>
            game.x + PLAYER_WIDTH > hazard.x + 2 &&
            game.x < hazard.x + hazard.width - 2 &&
            game.y + PLAYER_HEIGHT > 343 &&
            game.y < 370,
        );
        const fell = game.y > CANVAS_HEIGHT + 40;
        if (fell || (hitHazard && now >= game.invulnerableUntil && now >= game.shieldUntil)) {
          game.lives -= 1;
          game.x = game.checkpointX;
          game.y = 322;
          game.velocityY = 0;
          game.invulnerableUntil = now + 1300;
        }

        if (game.lives <= 0) {
          changeStatus("lost");
        } else if (game.x + PLAYER_WIDTH >= level.exitX && game.y + PLAYER_HEIGHT >= 369) {
          if (game.level === LEVELS.length - 1) {
            changeStatus("won");
          } else {
            game.level += 1;
            game.x = 55;
            game.y = 322;
            game.velocityY = 0;
            game.camera = 0;
            game.checkpointX = 55;
            game.collected = new Set();
            game.collectedBonuses = new Set();
            game.defeated = new Set();
            level = LEVELS[game.level];
          }
        } else if (isStandingOnPlatform(game, level)) {
          const checkpoint = level.checkpoints.find((point) => point > game.checkpointX && game.x >= point);
          if (checkpoint !== undefined) game.checkpointX = checkpoint;
        }

        const viewportWidth = CANVAS_WIDTH / (mobileViewport.matches ? MOBILE_GAME_ZOOM : 1);
        game.camera = Math.max(0, Math.min(level.width - viewportWidth, game.x - viewportWidth * 0.34));
        hudElapsed += delta;
        if (hudElapsed >= 0.12) {
          hudElapsed = 0;
          const activeBonus = now < game.shieldUntil ? "🛡️ Osłona" : now < game.speedUntil ? "⚡ Szybkość" : "—";
          setHud({ level: game.level + 1, lives: game.lives, coins: game.coins, bonus: activeBonus });
        }
      }

      draw(now);
      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frame);
      mobileViewport.removeEventListener("change", resizeCanvas);
    };
  }, [changeStatus]);

  const jump = useCallback(() => {
    const game = gameRef.current;
    if (statusRef.current !== "playing") return;
    if (isStandingOnPlatform(game, LEVELS[game.level])) game.velocityY = -610;
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
        (event.key === "ArrowUp" || event.key.toLowerCase() === "w") &&
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
        <h1>Karola i bezglutenowa kraina</h1>
        <p>
          Wyrusz z Marią po złote ziarenka! Pokonuj potworki, zbieraj pomocne
          bonusy i odkrywaj pięć coraz dłuższych, zupełnie różnych krain.
        </p>
      </div>

      <div className="platformer-layout">
        <aside className="platformer-card platformer-instructions">
          <h2>Jak grać?</h2>
          <ol>
            <li>Poruszaj się strzałkami <b>← →</b> lub klawiszami <b>A / D</b>.</li>
            <li>Skacz strzałką <b>↑</b> lub klawiszem <b>W</b>.</li>
            <li>Wskocz na potworka z góry, żeby go pokonać. Zbieraj ziarenka i bonusy.</li>
            <li>Masz trzy życia na całą wyprawę. Odległe fragmenty drogi mają punkty kontrolne.</li>
            <li>Dojdź do flagi po płaskim odcinku na końcu każdej krainy.</li>
          </ol>
          <p className="platformer-hint">Osłona chroni przed trafieniem, szybkość pomaga przebiec trudny odcinek, a serduszko dodaje życie.</p>
        </aside>

        <div className="platformer-game-card">
          <div className="platformer-hud" aria-live="polite">
            <div><span>Poziom</span><strong>{hud.level}/5 · {levelName}</strong></div>
            <div><span>Ziarenka</span><strong>🟡 {hud.coins}</strong></div>
            <div><span>Życia</span><strong>{"❤️".repeat(hud.lives) || "—"}</strong></div>
            <div><span>Bonus</span><strong>{hud.bonus}</strong></div>
          </div>
          <div className="platformer-canvas-wrap">
            <canvas
              ref={canvasRef}
              className="platformer-canvas"
              width={CANVAS_WIDTH}
              height={CANVAS_HEIGHT}
              role="img"
              aria-label="Platformowa gra przygodowa z Marią, pięcioma krainami, potworkami, bonusami i złotymi ziarenkami."
            />
            {status !== "playing" && (
              <div className="platformer-overlay">
                <span aria-hidden="true">{status === "won" ? "🏆" : status === "lost" ? "💚" : status === "paused" ? "⏸️" : "🌾"}</span>
                <h2>
                  {status === "ready" ? "Gotowa na przygodę?" : status === "paused" ? "Chwila odpoczynku" : status === "won" ? "Kraina uratowana!" : "Spróbuj jeszcze raz!"}
                </h2>
                <p>
                  {status === "ready"
                    ? "Pokonuj potworki, zbieraj bonusy i odkryj wszystkie pięć krain."
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
              <button type="button" aria-label="Skocz" onPointerDown={jump}><FiArrowUp /><FiArrowDown className="platformer-jump-accent" /></button>
              <button type="button" aria-label="Idź w prawo" onPointerDown={() => setDirection("right", true)} onPointerUp={() => setDirection("right", false)} onPointerLeave={() => setDirection("right", false)} onPointerCancel={() => setDirection("right", false)}><FiArrowRight /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlutenFreePlatformer;
