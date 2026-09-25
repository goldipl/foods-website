"use client";

import { useEffect, useRef, useState } from "react";
import {
  FiAward,
  FiClock,
  FiInfo,
  FiPlay,
  FiRotateCcw,
  FiShield,
  FiX,
} from "react-icons/fi";

type FallingProduct = {
  id: number;
  emoji: string;
  x: number;
  y: number;
  speed: number;
  isSafe: boolean;
};
type Result = { nickname: string; score: number; date: string };

const GAME_LENGTH = 45;
const STARTING_LIVES = 3;
const SAFE_PRODUCTS = [
  "🍎",
  "🍏",
  "🍐",
  "🍊",
  "🍋",
  "🍉",
  "🍇",
  "🍓",
  "🫐",
  "🍒",
  "🥝",
  "🍅",
  "🥕",
  "🌽",
  "🥦",
  "🥬",
  "🥒",
  "🫑",
  "🍆",
  "🥑",
  "🥗",
  "🍦",
  "🍨",
  "🍧",
];
const UNSAFE_PRODUCTS = [
  "🍞",
  "🥖",
  "🥐",
  "🥨",
  "🥯",
  "🍕",
  "🍔",
  "🌭",
  "🌮",
  "🍝",
  "🍜",
  "🍰",
  "🍪",
  "🧁",
  "🥧",
  "🥞",
  "🍺",
];
const STORAGE_KEY = "bezglutenowa-karola-catcher-results";

const GlutenFreeCatcher = () => {
  const [nickname, setNickname] = useState("");
  const [gameState, setGameState] = useState<"ready" | "playing" | "finished">(
    "ready",
  );
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(STARTING_LIVES);
  const [timeLeft, setTimeLeft] = useState(GAME_LENGTH);
  const [showNicknameModal, setShowNicknameModal] = useState(false);
  const [nicknameError, setNicknameError] = useState(false);
  const [showInstructionsModal, setShowInstructionsModal] = useState(false);
  const [damageFlash, setDamageFlash] = useState(false);
  const [products, setProducts] = useState<FallingProduct[]>([]);
  const [results, setResults] = useState<Result[]>([]);
  const playerX = useRef(50);
  const [playerPosition, setPlayerPosition] = useState(50);
  const moveDirection = useRef(0);
  const damageFlashTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const livesRef = useRef(STARTING_LIVES);
  const productsRef = useRef<FallingProduct[]>([]);
  const nextId = useRef(0);
  const catcherPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const savedResults = window.localStorage.getItem(STORAGE_KEY);
      if (savedResults) setResults(JSON.parse(savedResults));
    } catch {
      setResults([]);
    }
  }, []);

  useEffect(() => {
    if (gameState !== "playing") return undefined;
    let animationFrame = 0;
    let previousTime = performance.now();
    let spawnTimer = 0;
    let elapsed = 0;
    const tick = (now: number) => {
      const delta = Math.min((now - previousTime) / 1000, 0.05);
      previousTime = now;
      elapsed += delta;
      spawnTimer += delta;
      const nextPlayerX = Math.max(
        9,
        Math.min(91, playerX.current + moveDirection.current * delta * 58),
      );
      playerX.current = nextPlayerX;
      setPlayerPosition(nextPlayerX);

      let caughtSafeProducts = 0;
      let caughtUnsafeProducts = 0;
      const nextProducts = productsRef.current
        .map((product) => ({
          ...product,
          y: product.y + product.speed * delta,
        }))
        .filter((product) => {
          const caught =
            product.y >= 76 &&
            product.y <= 96 &&
            Math.abs(product.x - nextPlayerX) < 13;
          if (caught) {
            if (product.isSafe) caughtSafeProducts += 1;
            else caughtUnsafeProducts += 1;
          }
          return product.y < 105 && !caught;
        });
      if (spawnTimer > 0.62) {
        spawnTimer = 0;
        const isSafe = Math.random() < 0.78;
        const productPool = isSafe ? SAFE_PRODUCTS : UNSAFE_PRODUCTS;
        nextProducts.push({
          id: nextId.current++,
          emoji: productPool[Math.floor(Math.random() * productPool.length)],
          x: 8 + Math.random() * 84,
          y: -8,
          speed: 22 + Math.random() * 13,
          isSafe,
        });
      }
      productsRef.current = nextProducts;
      setProducts(nextProducts);
      if (caughtSafeProducts > 0) {
        setScore((currentScore) => currentScore + caughtSafeProducts * 10);
      }
      if (caughtUnsafeProducts > 0) {
        livesRef.current = Math.max(0, livesRef.current - caughtUnsafeProducts);
        setLives(livesRef.current);
        setDamageFlash(true);
        if (damageFlashTimer.current) clearTimeout(damageFlashTimer.current);
        damageFlashTimer.current = setTimeout(() => setDamageFlash(false), 520);
      }
      const remainingTime = Math.max(0, GAME_LENGTH - Math.floor(elapsed));
      setTimeLeft(remainingTime);
      if (remainingTime === 0 || livesRef.current === 0) {
        setGameState("finished");
        productsRef.current = [];
        setProducts([]);
      } else animationFrame = requestAnimationFrame(tick);
    };
    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [gameState]);

  useEffect(() => {
    return () => {
      if (damageFlashTimer.current) clearTimeout(damageFlashTimer.current);
    };
  }, []);

  useEffect(() => {
    if (gameState !== "finished") return;
    setResults((currentResults) => {
      const newResult = {
        nickname: nickname.trim(),
        score,
        date: new Date().toISOString(),
      };
      const updatedResults = [...currentResults, newResult]
        .sort((first, second) => second.score - first.score)
        .slice(0, 10);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedResults));
      return updatedResults;
    });
  }, [gameState]);

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
      if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
        event.preventDefault();
        moveDirection.current = -1;
      }
      if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
        event.preventDefault();
        moveDirection.current = 1;
      }
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target?.isContentEditable
      ) {
        return;
      }
      if (
        ["arrowleft", "arrowright", "a", "d"].includes(event.key.toLowerCase())
      )
        moveDirection.current = 0;
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const startGame = () => {
    if (!nickname.trim()) {
      setNicknameError(true);
      return;
    }
    setNicknameError(false);
    playerX.current = 50;
    setPlayerPosition(50);
    moveDirection.current = 0;
    setScore(0);
    livesRef.current = STARTING_LIVES;
    setLives(STARTING_LIVES);
    setDamageFlash(false);
    if (damageFlashTimer.current) clearTimeout(damageFlashTimer.current);
    setTimeLeft(GAME_LENGTH);
    productsRef.current = [];
    setProducts([]);
    setShowNicknameModal(false);
    setGameState("playing");
    if (window.matchMedia("(max-width: 760px)").matches) {
      window.requestAnimationFrame(() => {
        const panel = catcherPanelRef.current;
        if (!panel) return;
        const targetTop =
          window.scrollY + panel.getBoundingClientRect().top - 60;
        window.scrollTo({ top: targetTop, behavior: "smooth" });
      });
    }
  };
  const openNicknameModal = () => setShowNicknameModal(true);
  const setMovement = (direction: number) => {
    moveDirection.current = direction;
  };
  const stopMovement = () => {
    moveDirection.current = 0;
  };

  return (
    <section className="catcher-page">
      <div className="catcher-intro">
        <h1>Łap bezglutenowe produkty</h1>
        <p>
          Przesuwaj koszyk i złap jak najwięcej produktów, zanim skończy się
          czas.
        </p>
      </div>
      <div className="catcher-layout">
        <aside className="catcher-instructions">
          <div className="ranking-heading">
            <FiShield aria-hidden="true" />
            <h2>Jak grać?</h2>
          </div>
          <ul>
            <li>
              Przesuwaj koszyk klawiszami ⬅️ ➡️ lub przyciskami na telefonie.
            </li>
            <li>
              <b>+10 pkt:</b> łap owoce, warzywa, sałatki i lody gluten-free,
              np. 🍎 🥕 🥗 🍦.
            </li>
            <li>
              <b>-1 życie:</b> omijaj pszenne pieczywo, pizzę, makarony i
              wypieki, np. 🍞 🍕 🍝 🍰.
            </li>
            <li>
              Masz <b>3 życia</b>. Gra kończy się także po 45 sekundach.
            </li>
          </ul>
        </aside>
        <div className="catcher-panel" ref={catcherPanelRef}>
          <div className="catcher-stats">
            <span>
              <FiClock aria-hidden="true" /> {timeLeft}s
            </span>
            <strong>Wynik: {score}</strong>
            <span
              className="catcher-lives"
              aria-label={`Pozostało ${lives} żyć`}
            >
              {Array.from({ length: STARTING_LIVES }, (_, index) => (
                <span
                  key={index}
                  className={index < lives ? "is-active" : ""}
                  aria-hidden="true"
                >
                  ♥
                </span>
              ))}
            </span>
          </div>
          <div
            className={`catcher-arena ${damageFlash ? "is-damaged" : ""}`}
            role="application"
            aria-label="Gra Łap bezglutenowe produkty"
          >
            {damageFlash && (
              <div className="catcher-damage-feedback" aria-live="polite">
                <span>💔</span> -1 życie
              </div>
            )}
            <div className="catcher-cloud catcher-cloud-one">☁️</div>
            <div className="catcher-cloud catcher-cloud-two">☁️</div>
            {products.map((product) => (
              <span
                className={`catcher-product ${product.isSafe ? "is-safe" : "is-unsafe"}`}
                key={product.id}
                style={{ left: `${product.x}%`, top: `${product.y}%` }}
              >
                {product.emoji}
              </span>
            ))}
            <div
              className="catcher-basket"
              style={{ left: `${playerPosition}%` }}
              aria-hidden="true"
            >
              🧺
            </div>
            {gameState !== "playing" && (
              <div className="catcher-overlay">
                <span className="catcher-overlay-icon">
                  {gameState === "finished" ? "🎉" : "🥖"}
                </span>
                <h2>
                  {gameState === "finished"
                    ? `Koniec gry, ${nickname}!`
                    : "Gotowy na bezglutenowe łowy?"}
                </h2>
                {gameState === "finished" && (
                  <p>
                    Twój wynik: <strong>{score} pkt</strong>
                  </p>
                )}
              </div>
            )}
          </div>
          <div className="catcher-controls">
            <button
              type="button"
              className="catcher-direction-button"
              onPointerDown={(event) => {
                event.currentTarget.setPointerCapture(event.pointerId);
                setMovement(-1);
              }}
              onPointerUp={stopMovement}
              onPointerCancel={stopMovement}
              aria-label="Przesuń koszyk w lewo"
            >
              <svg viewBox="0 0 100 100" role="img" aria-label="W lewo">
                <rect width="100" height="100" rx="6" fill="currentColor" />
                <path
                  d="M73 50H30m0 0 18-18M30 50l18 18"
                  fill="none"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="9"
                />
              </svg>
            </button>
            <button
              type="button"
              className="catcher-start-button"
              onClick={
                gameState === "playing"
                  ? () => setGameState("finished")
                  : openNicknameModal
              }
            >
              {gameState === "playing" ? (
                <>
                  <FiRotateCcw aria-hidden="true" /> Zakończ
                </>
              ) : (
                <>
                  <FiPlay aria-hidden="true" />{" "}
                  {gameState === "finished" ? "Zagraj ponownie" : "Start"}
                </>
              )}
            </button>
            <button
              type="button"
              className="catcher-direction-button"
              onPointerDown={(event) => {
                event.currentTarget.setPointerCapture(event.pointerId);
                setMovement(1);
              }}
              onPointerUp={stopMovement}
              onPointerCancel={stopMovement}
              aria-label="Przesuń koszyk w prawo"
            >
              <svg viewBox="0 0 100 100" role="img" aria-label="W prawo">
                <rect width="100" height="100" rx="6" fill="currentColor" />
                <path
                  d="M27 50h43m0 0L52 32m18 18L52 68"
                  fill="none"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="9"
                />
              </svg>
            </button>
          </div>
          <p className="catcher-hint">
            Desktop: użyj klawiszy ⬅️ ➡️ lub A / D. Telefon: przytrzymaj
            przycisk kierunku.
          </p>
        </div>
        <aside className="catcher-ranking">
          <div className="ranking-heading">
            <FiAward aria-hidden="true" />
            <h2>Tablica wyników</h2>
          </div>
          {results.length === 0 ? (
            <p className="ranking-empty">
              Zagraj jako pierwszy i wpisz się na listę!
            </p>
          ) : (
            <ol>
              {results.map((result, index) => (
                <li key={`${result.date}-${index}`}>
                  <span>
                    <b>{index + 1}</b>
                    {result.nickname}
                  </span>
                  <strong>{result.score}</strong>
                </li>
              ))}
            </ol>
          )}
        </aside>
      </div>
      {showNicknameModal && (
        <div className="catcher-modal-backdrop" role="presentation">
          <form
            className="catcher-nickname-modal"
            onSubmit={(event) => {
              event.preventDefault();
              startGame();
            }}
          >
            <button
              className="catcher-modal-close"
              type="button"
              onClick={() => setShowNicknameModal(false)}
              aria-label="Zamknij okno startu gry"
            >
              <FiX aria-hidden="true" />
            </button>
            <span className="catcher-overlay-icon">🥖</span>
            <h2>
              {gameState === "finished"
                ? "Zagraj ponownie"
                : "Witaj w bezglutenowym catcherze"}
            </h2>
            <p>
              Wpisz swój nick, aby rozpocząć grę i trafić na tablicę wyników.
            </p>
            <label htmlFor="catcher-nickname">Twój nick</label>
            <div className="catcher-nickname-input">
              <input
                id="catcher-nickname"
                maxLength={18}
                value={nickname}
                onChange={(event) => {
                  setNickname(event.target.value);
                  if (nicknameError) setNicknameError(false);
                }}
                placeholder="np. BezglutenowaMoc"
                autoFocus
                aria-invalid={nicknameError}
                aria-describedby={
                  nicknameError ? "catcher-nickname-error" : undefined
                }
              />
              <span>/ 18</span>
            </div>
            {nicknameError && (
              <p
                className="catcher-nickname-error"
                id="catcher-nickname-error"
                role="alert"
              >
                Wpisz swój nick
              </p>
            )}
            <button className="catcher-start-button" type="submit">
              <FiPlay aria-hidden="true" /> Start gry
            </button>
            <button
              className="catcher-info-button"
              type="button"
              onClick={() => setShowInstructionsModal(true)}
            >
              <FiInfo aria-hidden="true" /> Jak grać?
            </button>
          </form>
        </div>
      )}
      {showInstructionsModal && (
        <div className="catcher-modal-backdrop" role="presentation">
          <div
            className="catcher-info-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="catcher-instructions-title"
          >
            <button
              className="catcher-modal-close"
              type="button"
              onClick={() => setShowInstructionsModal(false)}
              aria-label="Zamknij instrukcję"
            >
              <FiX aria-hidden="true" />
            </button>
            <span className="catcher-overlay-icon">🎮</span>
            <h2 id="catcher-instructions-title">Jak grać?</h2>
            <ul>
              <li>Przesuwaj koszyk klawiszami ← → lub A / D.</li>
              <li>Na telefonie przytrzymuj przyciski kierunku.</li>
              <li>
                Łap owoce, warzywa, sałatki i lody gluten-free za +10 punktów.
              </li>
              <li>Unikaj pszennego pieczywa, pizzy, makaronów i wypieków.</li>
              <li>Każdy niebezpieczny produkt zabiera jedno z trzech żyć.</li>
            </ul>
            <button
              className="catcher-start-button"
              type="button"
              onClick={() => setShowInstructionsModal(false)}
            >
              Rozumiem
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default GlutenFreeCatcher;
