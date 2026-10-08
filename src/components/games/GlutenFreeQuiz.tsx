"use client";

import { useEffect, useState } from "react";
import { FiAward, FiArrowRight, FiCheck, FiPlay, FiRotateCcw } from "react-icons/fi";

type QuizQuestion = {
  question: string;
  answers: [string, string, string, string];
  correctIndex: number;
  explanation: string;
};
type QuizResult = { nickname: string; score: number; date: string };
type QuizStatus = "ready" | "playing" | "finished";

const QUESTIONS: QuizQuestion[] = [
  {
    question: "Które zboża zawierają gluten?",
    answers: [
      "Pszenica, żyto i jęczmień",
      "Ryż, kukurydza i gryka",
      "Proso, amarantus i komosa ryżowa",
      "Ziemniaki, ryż i tapioka",
    ],
    correctIndex: 0,
    explanation:
      "Gluten występuje m.in. w pszenicy, życie i jęczmieniu oraz ich odmianach i przetworach.",
  },
  {
    question: "Która z tych mąk jest naturalnie bezglutenowa?",
    answers: ["Mąka żytnia", "Mąka orkiszowa", "Mąka ryżowa", "Mąka jęczmienna"],
    correctIndex: 2,
    explanation:
      "Ryż nie zawiera glutenu. Przy produktach przetworzonych warto jednak sprawdzić oznaczenie i możliwe zanieczyszczenie.",
  },
  {
    question: "Co oznacza licencjonowany znak Przekreślonego Kłosa na opakowaniu?",
    answers: [
      "Produkt jest wegetariański",
      "Produkt spełnia standardy certyfikacji bezglutenowej",
      "Produkt zawiera pełne ziarno",
      "Produkt nie zawiera cukru",
    ],
    correctIndex: 1,
    explanation:
      "Licencjonowany znak Przekreślonego Kłosa potwierdza, że produkt spełnia wymagania programu certyfikacji bezglutenowej.",
  },
  {
    question: "Jak podejść do płatków owsianych w diecie bezglutenowej?",
    answers: [
      "Każde płatki owsiane są bezglutenowe",
      "Wystarczy wybrać płatki błyskawiczne",
      "Wybierać owies oznaczony jako bezglutenowy",
      "Owies zawsze zawiera pszenicę",
    ],
    correctIndex: 2,
    explanation:
      "Owies może być zanieczyszczony glutenem podczas uprawy i przetwarzania, dlatego wybieraj produkty wyraźnie oznaczone jako bezglutenowe.",
  },
  {
    question: "Co zrobić, gdy etykieta zawiera ostrzeżenie „może zawierać pszenicę”?",
    answers: [
      "Zignorować je, jeśli pszenicy nie ma na początku składu",
      "Traktować je jako informację o możliwej obecności glutenu i wybrać pewny produkt",
      "Uznać, że produkt jest certyfikowany",
      "Sprawdzić tylko tabelę wartości odżywczych",
    ],
    correctIndex: 1,
    explanation:
      "Ostrzeżenie może wskazywać na ryzyko zanieczyszczenia krzyżowego. Wybieraj produkty, których bezpieczeństwo możesz potwierdzić.",
  },
  {
    question: "Który składnik może wskazywać na obecność glutenu?",
    answers: ["Skrobia kukurydziana", "Kasza jaglana", "Słód jęczmienny", "Mąka z tapioki"],
    correctIndex: 2,
    explanation:
      "Słód jęczmienny i składniki pochodzące z jęczmienia zawierają gluten.",
  },
  {
    question: "Jak ograniczyć ryzyko zanieczyszczenia krzyżowego w kuchni?",
    answers: [
      "Używać wspólnego tostera dla każdego pieczywa",
      "Kroić pieczywo na tej samej desce bez mycia",
      "Przechowywać mąki razem w otwartych opakowaniach",
      "Używać czystych, osobnych przyborów i powierzchni",
    ],
    correctIndex: 3,
    explanation:
      "Okruchy i resztki mąki mogą przenieść gluten. Pomagają czyste powierzchnie, osobne przybory i bezpieczne przechowywanie.",
  },
  {
    question: "Która kasza jest naturalnie bezglutenowa?",
    answers: ["Kasza jęczmienna", "Kasza manna", "Kasza gryczana", "Kasza kuskus"],
    correctIndex: 2,
    explanation:
      "Gryka nie jest spokrewniona z pszenicą i naturalnie nie zawiera glutenu. Warto sprawdzić etykietę produktu.",
  },
  {
    question: "Gdzie sprawdzić, czy pakowany produkt jest odpowiedni?",
    answers: [
      "Wyłącznie po kolorze opakowania",
      "W składzie, oznaczeniach i informacji o alergenach",
      "Tylko w tabeli kalorii",
      "Po kraju produkcji",
    ],
    correctIndex: 1,
    explanation:
      "Czytaj skład i wyróżnione alergeny, szukaj wiarygodnych oznaczeń bezglutenowych i sprawdzaj informacje producenta.",
  },
  {
    question: "Co najlepiej zrobić, gdy nie masz pewności co do produktu?",
    answers: [
      "Zjeść małą porcję na próbę",
      "Usunąć widoczne okruszki z produktu",
      "Sprawdzić informacje producenta lub wybrać pewną alternatywę",
      "Kierować się tylko opinią z mediów społecznościowych",
    ],
    correctIndex: 2,
    explanation:
      "Gdy informacje są niejasne, sprawdź je u producenta albo wybierz produkt z pewnym składem i oznaczeniem.",
  },
];

const STORAGE_KEY = "bezglutenowa-karola-quiz-results";
const QUESTION_COUNT = 10;
const POINTS_PER_ANSWER = 100;

const isQuizResult = (value: unknown): value is QuizResult => {
  if (!value || typeof value !== "object") return false;
  const result = value as Record<string, unknown>;
  return (
    typeof result.nickname === "string" &&
    typeof result.score === "number" &&
    Number.isFinite(result.score) &&
    typeof result.date === "string"
  );
};

const shuffleQuestions = () => {
  const shuffled = [...QUESTIONS];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [
      shuffled[swapIndex],
      shuffled[index],
    ];
  }
  return shuffled.slice(0, QUESTION_COUNT);
};

const GlutenFreeQuiz = () => {
  const [nickname, setNickname] = useState("");
  const [activeNickname, setActiveNickname] = useState("");
  const [status, setStatus] = useState<QuizStatus>("ready");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [showNicknameModal, setShowNicknameModal] = useState(false);
  const [nicknameError, setNicknameError] = useState(false);
  const [storageMessage, setStorageMessage] = useState("");

  useEffect(() => {
    try {
      const savedResults = window.localStorage.getItem(STORAGE_KEY);
      if (!savedResults) return;
      const parsed: unknown = JSON.parse(savedResults);
      if (!Array.isArray(parsed)) {
        throw new Error("Nieprawidłowy format zapisanych wyników.");
      }
      setResults(parsed.filter(isQuizResult).slice(0, 10));
    } catch {
      setStorageMessage(
        "Nie udało się odczytać lokalnej tablicy wyników. Możesz nadal grać.",
      );
    }
  }, []);

  const startQuiz = () => {
    const playerName = nickname.trim();
    if (!playerName) {
      setNicknameError(true);
      return;
    }
    setNicknameError(false);
    setActiveNickname(playerName);
    setQuestions(shuffleQuestions());
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setCorrectAnswers(0);
    setStatus("playing");
    setShowNicknameModal(false);
  };

  const selectAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null || status !== "playing") return;
    setSelectedAnswer(answerIndex);
    if (answerIndex === questions[questionIndex].correctIndex) {
      setScore((currentScore) => currentScore + POINTS_PER_ANSWER);
      setCorrectAnswers((currentCount) => currentCount + 1);
    }
  };

  const finishQuiz = (finalScore: number) => {
    setStatus("finished");
    const newResult: QuizResult = {
      nickname: activeNickname,
      score: finalScore,
      date: new Date().toISOString(),
    };
    const updatedResults = [...results, newResult]
      .sort((first, second) => second.score - first.score)
      .slice(0, 10);
    setResults(updatedResults);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedResults));
      setStorageMessage("");
    } catch {
      setStorageMessage(
        "Wynik został pokazany, ale nie można go zapisać na tym urządzeniu.",
      );
    }
  };

  const nextQuestion = () => {
    if (selectedAnswer === null) return;
    if (questionIndex === questions.length - 1) {
      finishQuiz(score);
      return;
    }
    setQuestionIndex((currentIndex) => currentIndex + 1);
    setSelectedAnswer(null);
  };

  const currentQuestion = questions[questionIndex];
  const bestScore = results[0]?.score ?? 0;

  return (
    <section className="quiz-page">
      <div className="quiz-intro">
        <span className="quiz-kicker">Mała przerwa na zabawę</span>
        <h1>Bezglutenowy quiz</h1>
        <p>
          Sprawdź swoją wiedzę o bezglutenowych produktach, etykietach i
          codziennych wyborach. Dziesięć pytań, dziesięć szans na komplet punktów!
        </p>
      </div>

      <div className="quiz-layout">
        <aside className="quiz-card quiz-instructions">
          <div className="quiz-card-heading">
            <span aria-hidden="true">💡</span>
            <h2>Jak grać?</h2>
          </div>
          <ol>
            <li>Wpisz swój nick i odpowiedz na 10 pytań.</li>
            <li>W każdym pytaniu wybierz jedną z czterech odpowiedzi.</li>
            <li>
              Za każdą poprawną odpowiedź zdobywasz <b>100 punktów</b>.
            </li>
            <li>
              Po wyborze zobaczysz prawidłową odpowiedź i krótkie wyjaśnienie.
            </li>
          </ol>
          <div className="quiz-fact">
            <span aria-hidden="true">📋</span>
            <p>
              Quiz ma charakter edukacyjny. Zawsze sprawdzaj skład i oznaczenia
              konkretnych produktów.
            </p>
          </div>
        </aside>

        <div className="quiz-game-card">
          <div className="quiz-game-stats">
            <div>
              <span className="quiz-stat-label">Gracz</span>
              <strong>{activeNickname || nickname.trim() || "—"}</strong>
            </div>
            <div className="quiz-score">
              <span className="quiz-stat-label">Wynik</span>
              <strong>{score} pkt</strong>
            </div>
            <div className="quiz-best-score">
              <span className="quiz-stat-label">Rekord</span>
              <strong>{bestScore} pkt</strong>
            </div>
          </div>

          {status === "ready" && (
            <div className="quiz-welcome">
              <span className="quiz-welcome-icon" aria-hidden="true">
                🥑
              </span>
              <h2>Gotowy na quiz?</h2>
              <p>
                Dziesięć pytań o bezglutenowym świecie. Sprawdź, ile punktów
                uda Ci się zdobyć!
              </p>
              <button
                type="button"
                className="quiz-primary-button"
                onClick={() => setShowNicknameModal(true)}
              >
                <FiPlay aria-hidden="true" /> Rozpocznij quiz
              </button>
            </div>
          )}

          {status === "playing" && currentQuestion && (
            <div className="quiz-question">
              <div className="quiz-progress-row">
                <span>
                  Pytanie <b>{questionIndex + 1}</b> z {questions.length}
                </span>
                <span>
                  <b>{correctAnswers}</b> poprawnych
                </span>
              </div>
              <div
                className="quiz-progress-track"
                role="progressbar"
                aria-label="Postęp quizu"
                aria-valuemin={0}
                aria-valuemax={questions.length}
                aria-valuenow={questionIndex + (selectedAnswer !== null ? 1 : 0)}
              >
                <span
                  style={{
                    width: `${((questionIndex + (selectedAnswer !== null ? 1 : 0)) / questions.length) * 100}%`,
                  }}
                />
              </div>
              <h2>{currentQuestion.question}</h2>
              <div className="quiz-answer-list">
                {currentQuestion.answers.map((answer, index) => {
                  const isCorrect = index === currentQuestion.correctIndex;
                  const isSelected = index === selectedAnswer;
                  let answerClass = "";
                  if (selectedAnswer !== null && isCorrect) {
                    answerClass = "is-correct";
                  } else if (isSelected) {
                    answerClass = "is-incorrect";
                  }
                  return (
                    <button
                      type="button"
                      key={answer}
                      className={`quiz-answer ${answerClass}`}
                      onClick={() => selectAnswer(index)}
                      disabled={selectedAnswer !== null}
                    >
                      <span className="quiz-answer-letter">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span>{answer}</span>
                      {selectedAnswer !== null && isCorrect && (
                        <FiCheck className="quiz-answer-check" aria-hidden="true" />
                      )}
                    </button>
                  );
                })}
              </div>
              {selectedAnswer !== null && (
                <div
                  className={`quiz-feedback ${selectedAnswer === currentQuestion.correctIndex ? "is-correct" : "is-incorrect"}`}
                  aria-live="polite"
                >
                  <strong>
                    {selectedAnswer === currentQuestion.correctIndex
                      ? "Świetnie, poprawna odpowiedź!"
                      : "Tym razem nie — oto poprawna odpowiedź."}
                  </strong>
                  <p>{currentQuestion.explanation}</p>
                </div>
              )}
              {selectedAnswer !== null && (
                <button
                  type="button"
                  className="quiz-primary-button quiz-next-button"
                  onClick={nextQuestion}
                >
                  {questionIndex === questions.length - 1
                    ? "Zobacz wynik"
                    : "Następne pytanie"}
                  <FiArrowRight aria-hidden="true" />
                </button>
              )}
            </div>
          )}

          {status === "finished" && (
            <div className="quiz-finish">
              <span className="quiz-welcome-icon" aria-hidden="true">
                {score === QUESTIONS.length * POINTS_PER_ANSWER ? "🏆" : "🎉"}
              </span>
              <h2>Koniec quizu, {activeNickname}!</h2>
              <p className="quiz-final-score">
                <strong>{score}</strong> / {QUESTIONS.length * POINTS_PER_ANSWER} pkt
              </p>
              <p>
                Poprawne odpowiedzi: <b>{correctAnswers} z {questions.length}</b>
              </p>
              <button
                type="button"
                className="quiz-primary-button"
                onClick={startQuiz}
              >
                <FiRotateCcw aria-hidden="true" /> Zagraj ponownie
              </button>
            </div>
          )}
        </div>

        <aside className="quiz-card quiz-ranking">
          <div className="quiz-card-heading">
            <FiAward aria-hidden="true" />
            <h2>Tablica wyników</h2>
          </div>
          <p className="quiz-ranking-caption">
            Najlepsze wyniki zapisane na tym urządzeniu
          </p>
          {results.length === 0 ? (
            <p className="quiz-ranking-empty">
              Jeszcze nie ma wyników. Zagraj jako pierwszy i wpisz się na listę!
            </p>
          ) : (
            <ol>
              {results.map((result, index) => (
                <li key={`${result.date}-${result.nickname}-${index}`}>
                  <span className="quiz-rank-number">
                    {index < 3 ? ["🥇", "🥈", "🥉"][index] : index + 1}
                  </span>
                  <span className="quiz-rank-player">
                    <strong>{result.nickname}</strong>
                    <time dateTime={result.date}>
                      {new Date(result.date).toLocaleDateString("pl-PL")}
                    </time>
                  </span>
                  <b className="quiz-rank-score">{result.score}</b>
                </li>
              ))}
            </ol>
          )}
          <p className="quiz-ranking-note">
            Wyniki są przechowywane lokalnie w przeglądarce.
          </p>
          {storageMessage && (
            <p className="quiz-storage-message" role="status">
              {storageMessage}
            </p>
          )}
        </aside>
      </div>

      {showNicknameModal && (
        <div className="quiz-modal-backdrop" role="presentation">
          <form
            className="quiz-player-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quiz-player-modal-title"
            onSubmit={(event) => {
              event.preventDefault();
              startQuiz();
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") setShowNicknameModal(false);
            }}
          >
            <span className="quiz-welcome-icon" aria-hidden="true">
              🧠
            </span>
            <h2 id="quiz-player-modal-title">Czas na bezglutenowy quiz!</h2>
            <p>Wpisz nick, który pojawi się przy Twoim wyniku.</p>
            <label htmlFor="quiz-nickname">Twój nick</label>
            <input
              id="quiz-nickname"
              maxLength={18}
              autoComplete="nickname"
              autoFocus
              value={nickname}
              onChange={(event) => {
                setNickname(event.target.value);
                if (nicknameError) setNicknameError(false);
              }}
              placeholder="np. MistrzyniEtykiet"
              aria-invalid={nicknameError}
              aria-describedby={nicknameError ? "quiz-nickname-error" : undefined}
            />
            {nicknameError && (
              <p
                className="quiz-nickname-error"
                id="quiz-nickname-error"
                role="alert"
              >
                Wpisz nick, aby rozpocząć quiz.
              </p>
            )}
            <button type="submit" className="quiz-primary-button">
              <FiPlay aria-hidden="true" /> Start
            </button>
            <button
              type="button"
              className="quiz-cancel-button"
              onClick={() => setShowNicknameModal(false)}
            >
              Wróć do gry
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default GlutenFreeQuiz;
