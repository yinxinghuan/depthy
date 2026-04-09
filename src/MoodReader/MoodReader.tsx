import { useState, useEffect, useCallback } from 'react';
import LayeredCharacter from './components/LayeredCharacter';
import { useTilt } from './hooks/useTilt';
import { CHARACTERS, loadCharacter } from './data/characters';
import { QUIZ, RESULTS, CHARACTER_ORDER } from './data/quiz';
import type { ExpressionType } from './data/expressions';
import { t } from './i18n';
import type { CharacterData } from './types';
import './MoodReader.less';

type Phase = 'gallery' | 'quiz' | 'result';

function preloadImages(char: CharacterData): Promise<void> {
  const srcs = char.layers.map(l => l[0]);
  const loadOne = (src: string) => new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });
  return Promise.race([
    Promise.all(srcs.map(loadOne)).then(() => {}),
    new Promise<void>(resolve => setTimeout(resolve, 5000)),
  ]);
}

export default function MoodReader() {
  const [phase, setPhase] = useState<Phase>('gallery');
  const [charIndex, setCharIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const { tilt, showPermissionButton, requestGyroPermission } = useTilt();

  // Quiz state
  const [qIndex, setQIndex] = useState(0);
  const [scores, setScores] = useState([0, 0, 0, 0]);
  const [answered, setAnswered] = useState(false);
  const [resultChar, setResultChar] = useState('isaya');

  const charData = phase === 'result'
    ? loadCharacter(resultChar)
    : CHARACTERS[charIndex];

  // Expression for current state
  const [expression, setExpression] = useState<ExpressionType>('neutral');

  // Preload images
  useEffect(() => {
    let cancelled = false;
    setVisible(false);
    setReady(false);
    preloadImages(charData).then(() => {
      if (cancelled) return;
      setReady(true);
      requestAnimationFrame(() => { if (!cancelled) setVisible(true); });
    });
    return () => { cancelled = true; };
  }, [charData]);

  // Quiz expression changes
  useEffect(() => {
    if (phase === 'quiz') {
      const q = QUIZ[qIndex];
      if (q) {
        // Show the reactor character
        const reactorIdx = CHARACTERS.findIndex(c => c.name === q.reactor);
        if (reactorIdx >= 0) setCharIndex(reactorIdx);
        setExpression(q.reactExpr);
      }
    } else if (phase === 'result') {
      const r = RESULTS[resultChar];
      setExpression(r?.expr ?? 'happy');
    } else {
      setExpression('neutral');
    }
  }, [phase, qIndex, resultChar]);

  // Gallery navigation
  const switchChar = useCallback((i: number) => {
    setReady(false);
    setVisible(false);
    setCharIndex(i);
    setExpression('neutral');
  }, []);

  const prev = useCallback(() => switchChar((charIndex - 1 + CHARACTERS.length) % CHARACTERS.length), [charIndex, switchChar]);
  const next = useCallback(() => switchChar((charIndex + 1) % CHARACTERS.length), [charIndex, switchChar]);

  // Start quiz
  const startQuiz = useCallback(() => {
    setPhase('quiz');
    setQIndex(0);
    setScores([0, 0, 0, 0]);
    setAnswered(false);
  }, []);

  // Answer question
  const answer = useCallback((optScores: [number, number, number, number]) => {
    if (answered) return;
    setAnswered(true);
    const newScores = scores.map((s, i) => s + optScores[i]);
    setScores(newScores);

    // Show happy reaction briefly
    setExpression('happy');

    setTimeout(() => {
      if (qIndex < QUIZ.length - 1) {
        setQIndex(qIndex + 1);
        setAnswered(false);
      } else {
        // Calculate result
        const maxScore = Math.max(...newScores);
        const winnerIdx = newScores.indexOf(maxScore);
        const winner = CHARACTER_ORDER[winnerIdx];
        setResultChar(winner);
        setPhase('result');
      }
    }, 600);
  }, [answered, scores, qIndex]);

  const backToGallery = useCallback(() => {
    setPhase('gallery');
    setCharIndex(0);
    setExpression('neutral');
  }, []);

  const currentQuestion = QUIZ[qIndex];
  const locale = navigator.language.startsWith('zh') ? 'zh' : 'en';

  return (
    <div className="mr">
      {/* Character portrait */}
      <div className="mr__stage">
        {!ready && <div className="mr__shimmer" style={{ width: 380, height: 380, borderRadius: 28 }} />}
        <div className={`mr__portrait ${visible ? 'mr__portrait--visible' : ''}`}>
          {ready && (
            <LayeredCharacter
              key={charData.name}
              charName={charData.name}
              layers={charData.layers}
              canvasSize={charData.canvasSize}
              tilt={tilt}
              expression={expression}
              width={380}
              maxShift={35}
            />
          )}
        </div>
      </div>

      {showPermissionButton && (
        <button className="mr__gyro-btn" onClick={requestGyroPermission}>{t('enable_gyro')}</button>
      )}

      {/* ── Gallery mode ── */}
      {phase === 'gallery' && (
        <>
          <div className="mr__controls">
            <button className="mr__nav" onPointerDown={prev}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <div className="mr__info">
              <span className="mr__name">{charData.displayName}</span>
              <span className="mr__hint">{t('hint')}</span>
            </div>
            <button className="mr__nav" onPointerDown={next}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 6 15 12 9 18" /></svg>
            </button>
          </div>

          <div className="mr__dots">
            {CHARACTERS.map((c, i) => (
              <span key={c.name} className={`mr__dot ${i === charIndex ? 'mr__dot--active' : ''}`} onPointerDown={() => switchChar(i)} />
            ))}
          </div>

          <button className="mr__start-btn" onPointerDown={startQuiz}>{t('start_quiz')}</button>
        </>
      )}

      {/* ── Quiz mode ── */}
      {phase === 'quiz' && currentQuestion && (
        <div className="mr__quiz">
          <div className="mr__quiz-progress">
            <span>{qIndex + 1} / {QUIZ.length}</span>
            <div className="mr__quiz-bar">
              <div className="mr__quiz-fill" style={{ width: `${((qIndex + 1) / QUIZ.length) * 100}%` }} />
            </div>
          </div>
          <p className="mr__quiz-q">{currentQuestion.text[locale]}</p>
          <div className="mr__quiz-options">
            {currentQuestion.options.map((opt, i) => (
              <button
                key={i}
                className={`mr__quiz-opt ${answered ? 'mr__quiz-opt--disabled' : ''}`}
                onPointerDown={() => answer(opt.scores)}
              >
                {opt.text[locale]}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Result mode ── */}
      {phase === 'result' && (
        <div className="mr__result">
          <h2 className="mr__result-title">{t('result_you_are')}</h2>
          <span className="mr__result-name">{loadCharacter(resultChar).displayName}</span>
          <p className="mr__result-subtitle">{RESULTS[resultChar].title[locale]}</p>
          <p className="mr__result-desc">{RESULTS[resultChar].desc[locale]}</p>
          <button className="mr__start-btn" onPointerDown={backToGallery}>{t('back')}</button>
        </div>
      )}
    </div>
  );
}
