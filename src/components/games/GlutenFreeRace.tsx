"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiAward,
  FiPause,
  FiPlay,
  FiRotateCcw,
} from "react-icons/fi";

type GameStatus = "ready" | "playing" | "paused" | "finished";
type TrackItem = { id: number; lane: number; y: number; type: "bread" | "cone" };
type RaceResult = { nickname: string; score: number; date: string };

const RACE_DURATION = 60;
const TRACK_LANES = 3;
const STORAGE_KEY = "bezglutenowa-karola-race-results";

const isRaceResult = (value: unknown): value is RaceResult => {
  if (!value || typeof value !== "object") return false;
  const result = value as Record<string, unknown>;
  return (
    typeof result.nickname === "string" &&
    typeof result.score === "number" &&
    Number.isFinite(result.score) &&
    typeof result.date === "string"
  );
};

const GlutenFreeRace = () => {
  const [nickname, setNickname] = useState("");
  const [activeNickname, setActiveNickname] = useState("");
  const [status, setStatus] = useState<GameStatus>("ready");
  const [lane, setLane] = useState(1);
  const [trackItems, setTrackItems] = useState<TrackItem[]>([]);
  const [timeLeft, setTimeLeft] = useState(RACE_DURATION);
  const [score, setScore] = useState(0);
  const [breadCollected, setBreadCollected] = useState(0);
  const [results, setResults] = useState<RaceResult[]>([]);
  const [showNicknameModal, setShowNicknameModal] = useState(false);
  const [nicknameError, setNicknameError] = useState(false);
  const [storageMessage, setStorageMessage] = useState("");
  const laneRef = useRef(1);
  const trackItemsRef = useRef<TrackItem[]>([]);
  const scoreRef = useRef(0);
  const timeLeftRef = useRef(RACE_DURATION);
  const statusRef = useRef<GameStatus>("ready");
  const activeNicknameRef = useRef("");
  const nextItemIdRef = useRef(0);
  const resultsRef = useRef<RaceResult[]>([]);
  const trackRef = useRef<HTMLDivElement>(null);

  const updateStatus = useCallback((nextStatus: GameStatus) => {
    statusRef.current = nextStatus;
    setStatus(nextStatus);
  }, []);

  useEffect(() => {
    try {
      const savedResults = window.localStorage.getItem(STORAGE_KEY);
      if (!savedResults) return;
      const parsed: unknown = JSON.parse(savedResults);
      if (!Array.isArray(parsed)) {
        throw new Error("Nieprawidłowy format zapisanych wyników.");
      }
      const validResults = parsed.filter(isRaceResult).slice(0, 10);
      resultsRef.current = validResults;
      setResults(validResults);
    } catch {
      setStorageMessage(
        "Nie udało się odczytać lokalnej tablicy wyników. Możesz nadal się ścigać.",
      );
    }
  }, []);

  const finishRace = useCallback(() => {
    if (statusRef.current !== "playing") return;
    updateStatus("finished");
    const newResult: RaceResult = {
      nickname: activeNicknameRef.current,
      score: scoreRef.current,
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

  const startRace = () => {
    const playerName = nickname.trim();
    if (!playerName) {
      setNicknameError(true);
      return;
    }
    setNicknameError(false);
    activeNicknameRef.current = playerName;
    setActiveNickname(playerName);
    laneRef.current = 1;
    setLane(1);
    trackItemsRef.current = [];
    setTrackItems([]);
    scoreRef.current = 0;
    setScore(0);
    setBreadCollected(0);
    timeLeftRef.current = RACE_DURATION;
    setTimeLeft(RACE_DURATION);
    nextItemIdRef.current = 0;
    setShowNicknameModal(false);
    updateStatus("playing");
    if (window.matchMedia("(max-width: 760px)").matches) {
      window.requestAnimationFrame(() => {
        const track = trackRef.current;
        if (!track) return;
        const targetTop = window.scrollY + track.getBoundingClientRect().top - 70;
        window.scrollTo({ top: targetTop, behavior: "smooth" });
      });
    }
  };

  const moveLane = useCallback((direction: number) => {
    if (statusRef.current !== "playing") return;
    const nextLane = Math.max(0, Math.min(TRACK_LANES - 1, laneRef.current + direction));
    laneRef.current = nextLane;
    setLane(nextLane);
  }, []);

  const togglePause = useCallback(() => {
    if (statusRef.current === "playing") updateStatus("paused");
    else if (statusRef.current === "paused") updateStatus("playing");
  }, [updateStatus]);

  useEffect(() => {
    if (status !== "playing") return undefined;
    let previousTime = performance.now();
    let spawnElapsed = 0;
    let secondElapsed = 0;
    const timer = window.setInterval(() => {
      const now = performance.now();
      const delta = Math.min((now - previousTime) / 1000, 0.1);
      previousTime = now;
      spawnElapsed += delta;
      secondElapsed += delta;

      if (secondElapsed >= 1) {
        secondElapsed -= 1;
        timeLeftRef.current = Math.max(0, timeLeftRef.current - 1);
        setTimeLeft(timeLeftRef.current);
        scoreRef.current += 5;
        setScore(scoreRef.current);
        if (timeLeftRef.current === 0) {
          finishRace();
          return;
        }
      }

      let nextScore = scoreRef.current;
      let breadCount = 0;
      let hitCone = false;
      const speed = 35 + Math.floor(nextScore / 100) * 2;
      const remainingItems = trackItemsRef.current
        .map((item) => ({ ...item, y: item.y + speed * delta }))
        .filter((item) => {
          const collision = item.lane === laneRef.current && item.y >= 80 && item.y <= 96;
          if (collision) {
            if (item.type === "bread") {
              nextScore += 50;
              breadCount += 1;
            } else {
              hitCone = true;
            }
          }
          return item.y < 105 && !collision;
        });

      if (spawnElapsed >= Math.max(0.48, 0.82 - nextScore / 1800)) {
        spawnElapsed = 0;
        remainingItems.push({
          id: nextItemIdRef.current++,
          lane: Math.floor(Math.random() * TRACK_LANES),
          y: -12,
          type: Math.random() < 0.42 ? "bread" : "cone",
        });
      }

      trackItemsRef.current = remainingItems;
      setTrackItems(remainingItems);
      if (nextScore !== scoreRef.current) {
        scoreRef.current = nextScore;
        setScore(nextScore);
      }
      if (breadCount > 0) {
        setBreadCollected((currentCount) => currentCount + breadCount);
      }
      if (hitCone) finishRace();
    }, 40);
    return () => window.clearInterval(timer);
  }, [finishRace, status]);

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
      if (key === "arrowleft" || key === "a") {
        event.preventDefault();
        moveLane(-1);
      } else if (key === "arrowright" || key === "d") {
        event.preventDefault();
        moveLane(1);
      } else if (key === " " || key === "p") {
        event.preventDefault();
        togglePause();
      } else if (key === "r" && statusRef.current !== "ready") {
        if (activeNicknameRef.current) {
          setNickname(activeNicknameRef.current);
          laneRef.current = 1;
          setLane(1);
          trackItemsRef.current = [];
          setTrackItems([]);
          scoreRef.current = 0;
          setScore(0);
          setBreadCollected(0);
          timeLeftRef.current = RACE_DURATION;
          setTimeLeft(RACE_DURATION);
          nextItemIdRef.current = 0;
          updateStatus("playing");
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [moveLane, togglePause, updateStatus]);

  const restartRace = () => {
    if (!activeNicknameRef.current) {
      setShowNicknameModal(true);
      return;
    }
    laneRef.current = 1;
    setLane(1);
    trackItemsRef.current = [];
    setTrackItems([]);
    scoreRef.current = 0;
    setScore(0);
    setBreadCollected(0);
    timeLeftRef.current = RACE_DURATION;
    setTimeLeft(RACE_DURATION);
    nextItemIdRef.current = 0;
    updateStatus("playing");
  };

  return (
    <section className="race-page">
      <div className="race-intro">
        <span className="race-kicker">Mała przerwa na zabawę</span>
        <h1>Bezglutenowy wyścig</h1>
        <p>
          Wskakuj za kierownicę i ruszaj po bezglutenowe pieczywo! Omijaj pachołki,
          zmieniaj pasy i zbierz jak najwięcej kromek przed metą.
        </p>
      </div>

      <div className="race-layout">
        <aside className="race-card race-instructions">
          <div className="race-card-heading">
            <span aria-hidden="true">🏁</span>
            <h2>Jak grać?</h2>
          </div>
          <ol>
            <li>
              Zmieniaj pasy strzałkami <b>← →</b> lub klawiszami <b>A / D</b>.
            </li>
            <li>
              Na telefonie użyj przycisków pod trasą.
            </li>
            <li>
              Zbieraj bezglutenowe pieczywo <b>🥖 za 50 pkt</b>. Za każdą
              sekundę na trasie otrzymujesz też 5 pkt.
            </li>
            <li>
              Omijaj pachołki 🚧. Wyścig trwa 60 sekund — zderzenie kończy bieg.
            </li>
          </ol>
          <div className="race-shortcuts">
            <span>
              <kbd>Space</kbd> pauza
            </span>
            <span>
              <kbd>R</kbd> od nowa
            </span>
          </div>
          <div className="race-fact">
            <span aria-hidden="true">🥖</span>
            <p>Na mecie czeka nagroda: rekord na lokalnej tablicy wyników!</p>
          </div>
        </aside>

        <div className="race-game-card">
          <div className="race-game-stats">
            <div>
              <span className="race-stat-label">Kierowca</span>
              <strong>{activeNickname || nickname.trim() || "—"}</strong>
            </div>
            <div>
              <span className="race-stat-label">Czas</span>
              <strong className={timeLeft <= 10 && status === "playing" ? "is-urgent" : ""}>
                {timeLeft}s
              </strong>
            </div>
            <div className="race-score">
              <span className="race-stat-label">Wynik</span>
              <strong>{score} pkt</strong>
            </div>
          </div>

          <div
            className={`race-track ${status === "playing" ? "is-running" : ""}`}
            ref={trackRef}
            role="application"
            aria-label={`Bezglutenowy wyścig. Pozostały czas: ${timeLeft} sekund. Wynik: ${score} punktów.`}
          >
            <div className="race-sky" aria-hidden="true">
              <span>☁️</span>
              <span>☁️</span>
            </div>
            <div className="race-road" aria-hidden="true">
              {Array.from({ length: TRACK_LANES - 1 }, (_, index) => (
                <span
                  className="race-lane-divider"
                  key={index}
                  style={{ left: `${((index + 1) / TRACK_LANES) * 100}%` }}
                />
              ))}
            </div>
            <div
              className="race-car"
              style={{ left: `${((lane + 0.5) / TRACK_LANES) * 100}%` }}
              aria-hidden="true"
            >
              🚘
            </div>
            {trackItems.map((item) => (
              <span
                className={`race-item ${item.type === "bread" ? "is-bread" : "is-cone"}`}
                key={item.id}
                style={{
                  left: `${((item.lane + 0.5) / TRACK_LANES) * 100}%`,
                  top: `${item.y}%`,
                }}
                aria-hidden="true"
              >
                {item.type === "bread" ? "🥖" : "🚧"}
              </span>
            ))}
            {status !== "playing" && (
              <div className="race-overlay">
                <span aria-hidden="true" className="race-overlay-icon">
                  {status === "paused" ? "⏸️" : status === "finished" ? "🏁" : "🚘"}
                </span>
                <h2>
                  {status === "paused"
                    ? "Krótki postój"
                    : status === "finished"
                      ? "Koniec wyścigu!"
                      : "Gotowy do startu?"}
                </h2>
                <p>
                  {status === "paused"
                    ? "Wznów, kiedy będziesz gotowy."
                    : status === "finished"
                      ? `${activeNickname}, zdobywasz ${score} pkt i zbierasz ${breadCollected} kromek!`
                      : "Zbieraj pieczywo, omijaj przeszkody i pędź do mety."}
                </p>
              </div>
            )}
          </div>
          <p className="race-live-score" aria-live="polite">
            🥖 Zebrane kromki: <b>{breadCollected}</b>
          </p>
          <div className="race-controls">
            <button
              type="button"
              className="race-direction-button"
              onClick={() => moveLane(-1)}
              aria-label="Zmień pas w lewo"
            >
              <FiArrowLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              className="race-main-button"
              onClick={() => {
                if (status === "playing" || status === "paused") togglePause();
                else setShowNicknameModal(true);
              }}
            >
              {status === "playing" ? (
                <>
                  <FiPause aria-hidden="true" /> Pauza
                </>
              ) : status === "paused" ? (
                <>
                  <FiPlay aria-hidden="true" /> Wznów
                </>
              ) : (
                <>
                  <FiPlay aria-hidden="true" />{" "}
                  {status === "finished" ? "Jeszcze jeden wyścig" : "Start"}
                </>
              )}
            </button>
            <button
              type="button"
              className="race-direction-button"
              onClick={() => moveLane(1)}
              aria-label="Zmień pas w prawo"
            >
              <FiArrowRight aria-hidden="true" />
            </button>
          </div>
          <button
            type="button"
            className="race-restart-button"
            onClick={restartRace}
          >
            <FiRotateCcw aria-hidden="true" /> Rozpocznij od nowa
          </button>
          <p className="race-hint">
            Strzałki / A D · <kbd>Space</kbd> pauza · <kbd>R</kbd> od nowa
          </p>
        </div>

        <aside className="race-card race-ranking">
          <div className="race-card-heading">
            <FiAward aria-hidden="true" />
            <h2>Tablica wyników</h2>
          </div>
          <p className="race-ranking-caption">Najlepsze wyścigi na tym urządzeniu</p>
          {results.length === 0 ? (
            <p className="race-ranking-empty">
              Jeszcze nie ma wyników. Zostań pierwszym kierowcą na podium!
            </p>
          ) : (
            <ol>
              {results.map((result, index) => (
                <li key={`${result.date}-${result.nickname}-${index}`}>
                  <span className="race-rank-number">
                    {index < 3 ? ["🥇", "🥈", "🥉"][index] : index + 1}
                  </span>
                  <span className="race-rank-player">
                    <strong>{result.nickname}</strong>
                    <time dateTime={result.date}>
                      {new Date(result.date).toLocaleDateString("pl-PL")}
                    </time>
                  </span>
                  <b className="race-rank-score">{result.score}</b>
                </li>
              ))}
            </ol>
          )}
          <p className="race-ranking-note">
            Wyniki są przechowywane lokalnie w przeglądarce.
          </p>
          {storageMessage && (
            <p className="race-storage-message" role="status">
              {storageMessage}
            </p>
          )}
        </aside>
      </div>

      {showNicknameModal && (
        <div className="race-modal-backdrop" role="presentation">
          <form
            className="race-player-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="race-player-modal-title"
            onSubmit={(event) => {
              event.preventDefault();
              startRace();
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") setShowNicknameModal(false);
            }}
          >
            <span className="race-overlay-icon" aria-hidden="true">
              🏁
            </span>
            <h2 id="race-player-modal-title">Przygotuj się do startu!</h2>
            <p>Wpisz swój nick, aby dołączyć do wyścigu i rankingu.</p>
            <label htmlFor="race-nickname">Twój nick</label>
            <input
              id="race-nickname"
              maxLength={18}
              autoComplete="nickname"
              autoFocus
              value={nickname}
              onChange={(event) => {
                setNickname(event.target.value);
                if (nicknameError) setNicknameError(false);
              }}
              placeholder="np. KromkaMocy"
              aria-invalid={nicknameError}
              aria-describedby={nicknameError ? "race-nickname-error" : undefined}
            />
            {nicknameError && (
              <p className="race-nickname-error" id="race-nickname-error" role="alert">
                Wpisz nick, aby wystartować.
              </p>
            )}
            <button type="submit" className="race-main-button">
              <FiPlay aria-hidden="true" /> Start
            </button>
            <button
              type="button"
              className="race-cancel-button"
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

export default GlutenFreeRace;
