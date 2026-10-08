"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  FiAward,
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiArrowUp,
  FiPause,
  FiPlay,
  FiRotateCcw,
} from "react-icons/fi";

type Direction = "up" | "down" | "left" | "right";
type Point = { x: number; y: number };
type GameStatus = "ready" | "playing" | "paused" | "finished";
type Result = { nickname: string; score: number; date: string };

const BOARD_SIZE = 20;
const INITIAL_SNAKE: Point[] = [
  { x: 8, y: 10 },
  { x: 7, y: 10 },
  { x: 6, y: 10 },
];
const INITIAL_DIRECTION: Direction = "right";
const STORAGE_KEY = "bezglutenowa-karola-snake-results";
const DIRECTIONS: Record<Direction, Point> = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};
const OPPOSITE_DIRECTION: Record<Direction, Direction> = {
  up: "down",
  down: "up",
  left: "right",
  right: "left",
};

const isResult = (value: unknown): value is Result => {
  if (!value || typeof value !== "object") return false;
  const result = value as Record<string, unknown>;
  return (
    typeof result.nickname === "string" &&
    typeof result.score === "number" &&
    Number.isFinite(result.score) &&
    typeof result.date === "string"
  );
};

const createFood = (snake: Point[]): Point => {
  const emptyCells: Point[] = [];
  for (let y = 0; y < BOARD_SIZE; y += 1) {
    for (let x = 0; x < BOARD_SIZE; x += 1) {
      if (!snake.some((segment) => segment.x === x && segment.y === y)) {
        emptyCells.push({ x, y });
      }
    }
  }
  return emptyCells[Math.floor(Math.random() * emptyCells.length)] ?? { x: 0, y: 0 };
};

const pointKey = ({ x, y }: Point) => `${x},${y}`;

const GlutenFreeSnake = () => {
  const [nickname, setNickname] = useState("");
  const [gameStatus, setGameStatus] = useState<GameStatus>("ready");
  const [score, setScore] = useState(0);
  const [snake, setSnake] = useState<Point[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Point>(() => createFood(INITIAL_SNAKE));
  const [results, setResults] = useState<Result[]>([]);
  const [showNicknameModal, setShowNicknameModal] = useState(false);
  const [nicknameError, setNicknameError] = useState(false);
  const [storageMessage, setStorageMessage] = useState("");
  const boardRef = useRef<HTMLDivElement>(null);
  const snakeRef = useRef<Point[]>(INITIAL_SNAKE);
  const foodRef = useRef<Point>(food);
  const directionRef = useRef<Direction>(INITIAL_DIRECTION);
  const nextDirectionRef = useRef<Direction>(INITIAL_DIRECTION);
  const scoreRef = useRef(0);
  const statusRef = useRef<GameStatus>("ready");
  const resultsRef = useRef<Result[]>([]);
  const activeNicknameRef = useRef("");
  const touchStartRef = useRef<Point | null>(null);

  const updateStatus = useCallback((status: GameStatus) => {
    statusRef.current = status;
    setGameStatus(status);
  }, []);

  useEffect(() => {
    try {
      const savedResults = window.localStorage.getItem(STORAGE_KEY);
      if (!savedResults) return;
      const parsed: unknown = JSON.parse(savedResults);
      if (!Array.isArray(parsed)) {
        throw new Error("Nieprawidłowy format zapisanych wyników.");
      }
      const validResults = parsed.filter(isResult).slice(0, 10);
      resultsRef.current = validResults;
      setResults(validResults);
    } catch {
      setStorageMessage(
        "Nie udało się odczytać lokalnej tablicy wyników. Możesz nadal grać.",
      );
    }
  }, []);

  const finishGame = useCallback((finalScore: number) => {
    if (statusRef.current !== "playing") return;
    updateStatus("finished");
    const newResult: Result = {
      nickname: activeNicknameRef.current,
      score: finalScore,
      date: new Date().toISOString(),
    };
    const updatedResults = [...resultsRef.current, newResult]
      .sort((first, second) => second.score - first.score)
      .slice(0, 10);
    resultsRef.current = updatedResults;
    setResults(updatedResults);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedResults));
      setStorageMessage("");
    } catch {
      setStorageMessage(
        "Wynik został pokazany, ale nie można go zapisać na tym urządzeniu.",
      );
    }
  }, [updateStatus]);

  const chooseDirection = useCallback((direction: Direction) => {
    if (
      statusRef.current === "playing" &&
      direction !== OPPOSITE_DIRECTION[nextDirectionRef.current]
    ) {
      nextDirectionRef.current = direction;
    }
  }, []);

  const startGame = () => {
    const playerName = nickname.trim();
    if (!playerName) {
      setNicknameError(true);
      return;
    }
    setNicknameError(false);
    activeNicknameRef.current = playerName;
    const startingSnake = INITIAL_SNAKE.map((segment) => ({ ...segment }));
    const startingFood = createFood(startingSnake);
    snakeRef.current = startingSnake;
    foodRef.current = startingFood;
    directionRef.current = INITIAL_DIRECTION;
    nextDirectionRef.current = INITIAL_DIRECTION;
    scoreRef.current = 0;
    setSnake(startingSnake);
    setFood(startingFood);
    setScore(0);
    setShowNicknameModal(false);
    updateStatus("playing");
    if (window.matchMedia("(max-width: 760px)").matches) {
      window.requestAnimationFrame(() => {
        const board = boardRef.current;
        if (!board) return;
        const targetTop = window.scrollY + board.getBoundingClientRect().top - 70;
        window.scrollTo({ top: targetTop, behavior: "smooth" });
      });
    }
  };

  const restartGame = () => {
    if (!activeNicknameRef.current) {
      setShowNicknameModal(true);
      return;
    }
    const startingSnake = INITIAL_SNAKE.map((segment) => ({ ...segment }));
    const startingFood = createFood(startingSnake);
    snakeRef.current = startingSnake;
    foodRef.current = startingFood;
    directionRef.current = INITIAL_DIRECTION;
    nextDirectionRef.current = INITIAL_DIRECTION;
    scoreRef.current = 0;
    setSnake(startingSnake);
    setFood(startingFood);
    setScore(0);
    updateStatus("playing");
  };

  useEffect(() => {
    if (gameStatus !== "playing") return undefined;
    const speed = Math.max(75, 145 - Math.floor(score / 50) * 8);
    const timer = window.setInterval(() => {
      const direction = nextDirectionRef.current;
      const movement = DIRECTIONS[direction];
      const head = snakeRef.current[0];
      const nextHead = { x: head.x + movement.x, y: head.y + movement.y };
      const eating = nextHead.x === foodRef.current.x && nextHead.y === foodRef.current.y;
      const bodyToCheck = eating
        ? snakeRef.current
        : snakeRef.current.slice(0, -1);
      const hitWall =
        nextHead.x < 0 ||
        nextHead.x >= BOARD_SIZE ||
        nextHead.y < 0 ||
        nextHead.y >= BOARD_SIZE;
      const hitBody = bodyToCheck.some(
        (segment) => segment.x === nextHead.x && segment.y === nextHead.y,
      );

      directionRef.current = direction;
      if (hitWall || hitBody) {
        finishGame(scoreRef.current);
        return;
      }

      const nextSnake = [nextHead, ...snakeRef.current];
      if (eating) {
        const nextScore = scoreRef.current + 10;
        scoreRef.current = nextScore;
        setScore(nextScore);
        foodRef.current = createFood(nextSnake);
        setFood(foodRef.current);
      } else {
        nextSnake.pop();
      }
      snakeRef.current = nextSnake;
      setSnake(nextSnake);
    }, speed);
    return () => window.clearInterval(timer);
  }, [finishGame, gameStatus, score]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable
      ) {
        return;
      }
      const key = event.key.toLowerCase();
      const keyDirections: Record<string, Direction> = {
        arrowup: "up",
        w: "up",
        arrowdown: "down",
        s: "down",
        arrowleft: "left",
        a: "left",
        arrowright: "right",
        d: "right",
      };
      if (keyDirections[key]) {
        event.preventDefault();
        chooseDirection(keyDirections[key]);
      } else if (key === " " || key === "p") {
        event.preventDefault();
        if (statusRef.current === "playing") updateStatus("paused");
        else if (statusRef.current === "paused") updateStatus("playing");
      } else if (key === "r" && statusRef.current !== "ready") {
        restartGame();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [chooseDirection, updateStatus]);

  const togglePause = () => {
    if (gameStatus === "playing") updateStatus("paused");
    else if (gameStatus === "paused") updateStatus("playing");
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const start = touchStartRef.current;
    const touch = event.changedTouches[0];
    touchStartRef.current = null;
    if (!start || !touch) return;
    const deltaX = touch.clientX - start.x;
    const deltaY = touch.clientY - start.y;
    if (Math.max(Math.abs(deltaX), Math.abs(deltaY)) < 24) return;
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      chooseDirection(deltaX > 0 ? "right" : "left");
    } else {
      chooseDirection(deltaY > 0 ? "down" : "up");
    }
  };

  const snakeCells = new Map(snake.map((segment, index) => [pointKey(segment), index]));

  return (
    <section className="snake-page">
      <div className="snake-intro">
        <span className="snake-kicker">Mała przerwa na zabawę</span>
        <h1>Bezglutenowy Snake</h1>
        <p>
          Poprowadź węża do kromek bezglutenowego chleba. Zbieraj je, bij własne rekordy i uważaj,
          żeby nie wpaść na siebie!
        </p>
      </div>

      <div className="snake-layout">
        <aside className="snake-card snake-instructions">
          <div className="snake-card-heading">
            <span aria-hidden="true">🎮</span>
            <h2>Jak grać?</h2>
          </div>
          <ol>
            <li>
              Kieruj wężem strzałkami lub klawiszami <b>W, A, S, D</b>.
            </li>
            <li>
              Na telefonie użyj przycisków kierunkowych albo przesuń palcem po
              planszy.
            </li>
            <li>
              Zjedz kromkę chleba <b>🍞, aby zdobyć 10 pkt</b> i urosnąć.
            </li>
            <li>
              Nie uderzaj w ściany ani we własny ogon. Z każdym wynikiem wąż
              porusza się szybciej!
            </li>
          </ol>
          <div className="snake-shortcuts">
            <span>
              <kbd>Space</kbd> pauza
            </span>
            <span>
              <kbd>R</kbd> od nowa
            </span>
          </div>
          <div className="snake-fact">
            <span aria-hidden="true">🍞</span>
            <p>
              Bezglutenowe kromki dodają wężowi sił — smacznego!
            </p>
          </div>
        </aside>

        <div className="snake-game-card">
          <div className="snake-game-stats">
            <div>
              <span className="snake-stat-label">Gracz</span>
              <strong>{activeNicknameRef.current || nickname.trim() || "—"}</strong>
            </div>
            <div className="snake-score">
              <span className="snake-stat-label">Wynik</span>
              <strong>{score} pkt</strong>
            </div>
            <div className="snake-best-score">
              <span className="snake-stat-label">Rekord</span>
              <strong>{results[0]?.score ?? 0} pkt</strong>
            </div>
          </div>

          <div
            className={`snake-board-wrap ${gameStatus === "playing" ? "is-playing" : ""}`}
            ref={boardRef}
          >
            <div
              className="snake-board"
              role="application"
              aria-label={`Plansza gry Bezglutenowy Snake. Wynik: ${score} punktów.`}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {Array.from({ length: BOARD_SIZE * BOARD_SIZE }, (_, index) => {
                const cell = {
                  x: index % BOARD_SIZE,
                  y: Math.floor(index / BOARD_SIZE),
                };
                const segmentIndex = snakeCells.get(pointKey(cell));
                const isFood = food.x === cell.x && food.y === cell.y;
                return (
                  <span
                    key={index}
                    style={{
                      gridColumn: cell.x + 1,
                      gridRow: cell.y + 1,
                    }}
                    className={[
                      "snake-cell",
                      segmentIndex === 0 ? "is-head" : "",
                      typeof segmentIndex === "number" && segmentIndex > 0
                        ? "is-body"
                        : "",
                      isFood ? "is-food" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    aria-hidden="true"
                  >
                  </span>
                );
              })}
            </div>
            {gameStatus !== "playing" && (
              <div className="snake-overlay">
                <span className="snake-overlay-icon" aria-hidden="true">
                  {gameStatus === "paused"
                    ? "⏸️"
                    : gameStatus === "finished"
                      ? "🏆"
                      : "🐍"}
                </span>
                <h2>
                  {gameStatus === "paused"
                    ? "Gra wstrzymana"
                    : gameStatus === "finished"
                      ? "Koniec gry!"
                      : "Gotowy na kromkę?"}
                </h2>
                <p>
                  {gameStatus === "paused"
                    ? "Złap oddech i wróć do gry."
                    : gameStatus === "finished"
                      ? `Świetna gra, ${activeNicknameRef.current}! Twój wynik to ${score} pkt.`
                      : "Zbieraj bezglutenowe kromki i ustanów nowy rekord."}
                </p>
              </div>
            )}
          </div>
          <p className="snake-live-score" aria-live="polite">
            {score > 0
              ? `Zdobyte punkty: ${score}`
              : "Zjedz pierwszą kromkę i zdobądź 10 punktów"}
          </p>
          <div className="snake-controls">
            <button
              type="button"
              className="snake-action-button"
              onClick={() => {
                if (gameStatus === "playing") togglePause();
                else if (gameStatus === "paused") togglePause();
                else setShowNicknameModal(true);
              }}
            >
              {gameStatus === "playing" ? (
                <>
                  <FiPause aria-hidden="true" /> Pauza
                </>
              ) : gameStatus === "paused" ? (
                <>
                  <FiPlay aria-hidden="true" /> Wznów
                </>
              ) : (
                <>
                  <FiPlay aria-hidden="true" />{" "}
                  {gameStatus === "finished" ? "Zagraj ponownie" : "Rozpocznij grę"}
                </>
              )}
            </button>
            <button
              type="button"
              className="snake-restart-button"
              onClick={restartGame}
              aria-label="Rozpocznij grę od nowa"
              title="Rozpocznij od nowa (R)"
            >
              <FiRotateCcw aria-hidden="true" />
              <span>Od nowa</span>
            </button>
          </div>
          <div className="snake-dpad" aria-label="Sterowanie kierunkiem">
            <button
              type="button"
              onClick={() => chooseDirection("up")}
              aria-label="Kieruj w górę"
            >
              <FiArrowUp aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => chooseDirection("left")}
              aria-label="Kieruj w lewo"
            >
              <FiArrowLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => chooseDirection("down")}
              aria-label="Kieruj w dół"
            >
              <FiArrowDown aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => chooseDirection("right")}
              aria-label="Kieruj w prawo"
            >
              <FiArrowRight aria-hidden="true" />
            </button>
          </div>
          <p className="snake-control-hint">
            Strzałki / W A S D · <kbd>Space</kbd> pauza · <kbd>R</kbd> od nowa
          </p>
        </div>

        <aside className="snake-card snake-ranking">
          <div className="snake-card-heading">
            <FiAward aria-hidden="true" />
            <h2>Tablica wyników</h2>
          </div>
          <p className="snake-ranking-caption">Najlepsze wyniki na tym urządzeniu</p>
          {results.length === 0 ? (
            <p className="snake-ranking-empty">
              Jeszcze nikt nie zdobył punktów. Zagraj i zostań pierwszym
              rekordzistą!
            </p>
          ) : (
            <ol>
              {results.map((result, index) => (
                <li key={`${result.date}-${result.nickname}-${index}`}>
                  <span className="snake-rank-number">
                    {index < 3 ? ["🥇", "🥈", "🥉"][index] : index + 1}
                  </span>
                  <span className="snake-rank-player">
                    <strong>{result.nickname}</strong>
                    <time dateTime={result.date}>
                      {new Date(result.date).toLocaleDateString("pl-PL")}
                    </time>
                  </span>
                  <b className="snake-rank-score">{result.score}</b>
                </li>
              ))}
            </ol>
          )}
          <p className="snake-ranking-note">
            Wyniki są zapisywane lokalnie w przeglądarce.
          </p>
          {storageMessage && (
            <p className="snake-storage-message" role="status">
              {storageMessage}
            </p>
          )}
        </aside>
      </div>

      {showNicknameModal && (
        <div className="snake-modal-backdrop" role="presentation">
          <form
            className="snake-player-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="snake-player-modal-title"
            onSubmit={(event) => {
              event.preventDefault();
              startGame();
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") setShowNicknameModal(false);
            }}
          >
            <span className="snake-overlay-icon" aria-hidden="true">
              🍞
            </span>
            <h2 id="snake-player-modal-title">Wskakujesz do gry?</h2>
            <p>
              Podaj swój nick — będzie widoczny przy wyniku w lokalnej tablicy
              rekordów.
            </p>
            <label htmlFor="snake-nickname">Twój nick</label>
            <input
              id="snake-nickname"
              maxLength={18}
              autoComplete="nickname"
              autoFocus
              value={nickname}
              onChange={(event) => {
                setNickname(event.target.value);
                if (nicknameError) setNicknameError(false);
              }}
              placeholder="np. JabłkoMocy"
              aria-invalid={nicknameError}
              aria-describedby={nicknameError ? "snake-nickname-error" : undefined}
            />
            {nicknameError && (
              <p className="snake-nickname-error" id="snake-nickname-error" role="alert">
                Wpisz nick, aby rozpocząć grę.
              </p>
            )}
            <button type="submit" className="snake-action-button">
              <FiPlay aria-hidden="true" /> Start
            </button>
            <button
              type="button"
              className="snake-cancel-button"
              onClick={() => setShowNicknameModal(false)}
            >
              Wróć do strony
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default GlutenFreeSnake;
