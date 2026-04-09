import { useState, useEffect, useCallback } from 'react';
import LayeredCharacter from './components/LayeredCharacter';
import { useTilt } from './hooks/useTilt';
import { CHARACTERS, loadCharacter } from './data/characters';
import { CHARACTER_QUIZZES } from './data/quiz';
import type { ExpressionType } from './data/expressions';
import { t } from './i18n';
import type { CharacterData } from './types';
import './MoodReader.less';

type Phase = 'home' | 'intro' | 'quiz' | 'outro';

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

const locale = navigator.language.startsWith('zh') ? 'zh' : 'en';

export default function MoodReader() {
  const [phase, setPhase] = useState<Phase>('home');
  const [homeIndex, setHomeIndex] = useState(0);
  const [activeChar, setActiveChar] = useState<string>('isaya');
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const { tilt, showPermissionButton, requestGyroPermission } = useTilt();

  // Quiz state
  const [qIndex, setQIndex] = useState(0);
  const [expression, setExpression] = useState<ExpressionType>('neutral');
  const [reactionText, setReactionText] = useState('');
  const [answered, setAnswered] = useState(false);

  const charData = phase === 'home'
    ? CHARACTERS[homeIndex]
    : loadCharacter(activeChar);

  const quiz = CHARACTER_QUIZZES[activeChar];
  const currentQ = quiz?.questions[qIndex];

  // Preload
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

  // ── Home: character select carousel ──
  const switchHome = useCallback((i: number) => {
    setReady(false);
    setVisible(false);
    setHomeIndex(i);
  }, []);

  const enterCharacter = useCallback(() => {
    const char = CHARACTERS[homeIndex];
    setActiveChar(char.name);
    setPhase('intro');
    setExpression('neutral');
    setQIndex(0);
    setReactionText('');
    setAnswered(false);
  }, [homeIndex]);

  // ── Quiz interactions ──
  const startQuiz = useCallback(() => {
    setPhase('quiz');
    if (currentQ) setExpression(currentQ.askExpr);
    setReactionText('');
    setAnswered(false);
  }, [currentQ]);

  const answer = useCallback((optIdx: number) => {
    if (answered || !currentQ) return;
    setAnswered(true);
    const opt = currentQ.options[optIdx];
    setExpression(opt.reaction);
    setReactionText(opt.reactionText?.[locale] ?? '');

    setTimeout(() => {
      if (qIndex < quiz.questions.length - 1) {
        const nextQ = quiz.questions[qIndex + 1];
        setQIndex(qIndex + 1);
        setExpression(nextQ.askExpr);
        setReactionText('');
        setAnswered(false);
      } else {
        setPhase('outro');
        setExpression(quiz.outroExpr);
        setReactionText('');
      }
    }, 1800);
  }, [answered, currentQ, qIndex, quiz]);

  const backHome = useCallback(() => {
    setPhase('home');
    setExpression('neutral');
    setReactionText('');
  }, []);

  return (
    <div className="mr">
      {/* Character portrait — always visible */}
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
        {/* Reaction bubble */}
        {reactionText && (
          <div className="mr__bubble" key={reactionText}>
            {reactionText}
          </div>
        )}
      </div>

      {showPermissionButton && (
        <button className="mr__gyro-btn" onClick={requestGyroPermission}>{t('enable_gyro')}</button>
      )}

      {/* ── Home: character select ── */}
      {phase === 'home' && (
        <>
          <div className="mr__controls">
            <button className="mr__nav" onPointerDown={() => switchHome((homeIndex - 1 + CHARACTERS.length) % CHARACTERS.length)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <div className="mr__info">
              <span className="mr__name">{charData.displayName}</span>
              <span className="mr__hint">{t('hint')}</span>
            </div>
            <button className="mr__nav" onPointerDown={() => switchHome((homeIndex + 1) % CHARACTERS.length)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 6 15 12 9 18" /></svg>
            </button>
          </div>
          <div className="mr__dots">
            {CHARACTERS.map((c, i) => (
              <span key={c.name} className={`mr__dot ${i === homeIndex ? 'mr__dot--active' : ''}`} onPointerDown={() => switchHome(i)} />
            ))}
          </div>
          <button className="mr__start-btn" onPointerDown={enterCharacter}>{t('chat_with')} {charData.displayName}</button>
        </>
      )}

      {/* ── Intro ── */}
      {phase === 'intro' && quiz && (
        <div className="mr__dialog">
          <p className="mr__dialog-text">{quiz.intro[locale]}</p>
          <button className="mr__start-btn" onPointerDown={startQuiz}>{t('start')}</button>
        </div>
      )}

      {/* ── Quiz ── */}
      {phase === 'quiz' && currentQ && (
        <div className="mr__quiz" key={qIndex}>
          <div className="mr__quiz-progress">
            <span>{qIndex + 1} / {quiz.questions.length}</span>
            <div className="mr__quiz-bar">
              <div className="mr__quiz-fill" style={{ width: `${((qIndex + 1) / quiz.questions.length) * 100}%` }} />
            </div>
          </div>
          <p className="mr__quiz-q">{currentQ.text[locale]}</p>
          <div className="mr__quiz-options">
            {currentQ.options.map((opt, i) => (
              <button
                key={i}
                className={`mr__quiz-opt ${answered ? 'mr__quiz-opt--disabled' : ''}`}
                onPointerDown={() => answer(i)}
              >
                {opt.text[locale]}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Outro ── */}
      {phase === 'outro' && quiz && (
        <div className="mr__dialog">
          <p className="mr__dialog-text">{quiz.outro[locale]}</p>
          <button className="mr__start-btn" onPointerDown={backHome}>{t('back_home')}</button>
        </div>
      )}
    </div>
  );
}
