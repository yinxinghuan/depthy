import { useState, useEffect, useCallback } from 'react';
import LayeredCharacter from './components/LayeredCharacter';
import Typewriter from './components/Typewriter';
import SplashScreen from './components/SplashScreen';
import { CHARACTERS, loadCharacter } from './data/characters';
import { CHARACTER_QUIZZES, STORY_INTRO } from './data/quiz';
import { ENDINGS } from './data/endings';
import type { ExpressionName, CharacterData } from './types';
import { t, L, locale } from './i18n';
import './MoodReader.less';

type Phase = 'splash' | 'story' | 'home' | 'intro' | 'quiz' | 'outro' | 'verdict' | 'ending';

function preloadImages(char: CharacterData): Promise<void> {
  const allSrcs = new Set<string>();
  allSrcs.add(char.bgSrc);
  for (const layers of Object.values(char.expressions)) {
    for (const l of layers) allSrcs.add(l[0]);
  }
  const loadOne = (src: string) => new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });
  return Promise.race([
    Promise.all([...allSrcs].map(loadOne)).then(() => {}),
    new Promise<void>(resolve => setTimeout(resolve, 12000)),
  ]);
}

export default function MoodReader() {
  const [phase, setPhase] = useState<Phase>('splash');
  const [homeIndex, setHomeIndex] = useState(0);
  const [activeChar, setActiveChar] = useState('isaya');
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  const [qIndex, setQIndex] = useState(0);
  const [expression, setExpression] = useState<ExpressionName>('neutral');
  const [reactionText, setReactionText] = useState('');
  const [answered, setAnswered] = useState(false);

  const [interrogated, setInterrogated] = useState<Set<string>>(new Set());
  const [endingIndex, setEndingIndex] = useState(-1);

  const needsChar = phase === 'home' || phase === 'intro' || phase === 'quiz' || phase === 'outro' || phase === 'ending';

  const charData = (phase === 'ending' && endingIndex >= 0)
    ? loadCharacter(ENDINGS[endingIndex].reactor)
    : phase === 'home'
      ? CHARACTERS[homeIndex]
      : loadCharacter(activeChar);

  const quiz = CHARACTER_QUIZZES[activeChar];
  const currentQ = quiz?.questions[qIndex];
  const allDone = interrogated.size >= 4;

  useEffect(() => {
    if (!needsChar) return;
    let cancelled = false;
    setVisible(false); setReady(false);
    preloadImages(charData).then(() => {
      if (cancelled) return;
      setReady(true);
      requestAnimationFrame(() => { if (!cancelled) setVisible(true); });
    });
    return () => { cancelled = true; };
  }, [charData, needsChar]);

  const switchHome = useCallback((i: number) => {
    setReady(false); setVisible(false); setHomeIndex(i); setExpression('neutral');
  }, []);

  const enterCharacter = useCallback(() => {
    setActiveChar(CHARACTERS[homeIndex].name);
    setPhase('intro'); setExpression('neutral');
    setQIndex(0); setReactionText(''); setAnswered(false);
  }, [homeIndex]);

  const startQuiz = useCallback(() => {
    setPhase('quiz'); setExpression('neutral'); setReactionText(''); setAnswered(false);
  }, []);

  const answer = useCallback((optIdx: number) => {
    if (answered || !currentQ) return;
    setAnswered(true);
    const opt = currentQ.options[optIdx];
    setExpression(opt.reaction);
    setReactionText(opt.reactionText ? L(opt.reactionText) : '');
  }, [answered, currentQ]);

  const nextQuestion = useCallback(() => {
    setReactionText('');
    if (qIndex < quiz.questions.length - 1) {
      setQIndex(qIndex + 1); setAnswered(false);
    } else {
      setPhase('outro');
      setExpression(quiz.outroExpr);
      setInterrogated(prev => new Set([...prev, activeChar]));
    }
  }, [qIndex, quiz, activeChar]);

  const backHome = useCallback(() => {
    setPhase(allDone ? 'verdict' : 'home');
    setExpression('neutral'); setReactionText('');
  }, [allDone]);

  const chooseEnding = useCallback((idx: number) => {
    setEndingIndex(idx); setExpression(ENDINGS[idx].reactExpr); setPhase('ending');
  }, []);

  const restart = useCallback(() => {
    setPhase('story'); setHomeIndex(0);
    setInterrogated(new Set()); setEndingIndex(-1);
    setExpression('neutral'); setReactionText('');
  }, []);

  // ── Splash ──
  if (phase === 'splash') {
    return <div className="mr"><SplashScreen onDone={() => setPhase('story')} /></div>;
  }

  // ── Story intro (standalone page, typewriter) ──
  if (phase === 'story') {
    return (
      <div className="mr mr--story">
        <div className="mr__story-page">
          <h1 className="mr__story-title">{t('story_title')}</h1>
          <Typewriter text={L(STORY_INTRO)} speed={40} />
          <button className="mr__start-btn" onPointerDown={() => setPhase('home')}>
            {locale === 'zh' ? '开始调查' : 'Begin Investigation'}
          </button>
        </div>
      </div>
    );
  }

  // ── Verdict (standalone page, simple avatars) ──
  if (phase === 'verdict') {
    return (
      <div className="mr mr--verdict">
        <h2 className="mr__verdict-title">{t('verdict_title')}</h2>
        <div className="mr__suspect-grid">
          {CHARACTERS.map(c => {
            // Find the ending for this character
            const endIdx = ENDINGS.findIndex(e => e.suspect === c.name);
            return (
              <button
                key={c.name}
                className="mr__suspect-card"
                onPointerDown={() => endIdx >= 0 && chooseEnding(endIdx)}
              >
                <div className="mr__suspect-avatar">{c.displayName[0]}</div>
                <span className="mr__suspect-name">{c.displayName}</span>
                <span className="mr__suspect-role">{L(CHARACTER_QUIZZES[c.name].role)}</span>
              </button>
            );
          })}
        </div>
        {/* Extra options */}
        {ENDINGS.filter(e => !CHARACTERS.find(c => c.name === e.suspect)).map((e, i) => (
          <button key={i} className="mr__verdict-extra" onPointerDown={() => chooseEnding(ENDINGS.indexOf(e))}>
            {L(e.label)}
          </button>
        ))}
      </div>
    );
  }

  // ── Character phases (intro/quiz/outro/ending) ──
  return (
    <div className="mr">
      {needsChar && (
        <div className="mr__stage">
          {!ready && <div className="mr__shimmer" style={{ width: 380, height: 380, borderRadius: 28 }} />}
          <div className={`mr__portrait ${visible ? 'mr__portrait--visible' : ''}`}>
            {ready && (
              <LayeredCharacter
                key={charData.name}
                charName={charData.name}
                bgSrc={charData.bgSrc}
                expressions={charData.expressions}
                expression={expression}
                canvasSize={charData.canvasSize}
                width={380}
                maxShift={15}
              />
            )}
          </div>
        </div>
      )}

      {/* Reaction — simple italic text below portrait */}
      {reactionText && <p className="mr__reaction" key={reactionText}>"{reactionText}"</p>}

      {phase === 'home' && (
        <>
          <div className="mr__controls">
            <button className="mr__nav" onPointerDown={() => switchHome((homeIndex - 1 + CHARACTERS.length) % CHARACTERS.length)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <div className="mr__info">
              <span className="mr__name">{charData.displayName}</span>
              {quiz && <span className="mr__role">{L(quiz.role)}</span>}
              {interrogated.has(charData.name) && <span className="mr__done-tag">✓ {t('done_tag')}</span>}
            </div>
            <button className="mr__nav" onPointerDown={() => switchHome((homeIndex + 1) % CHARACTERS.length)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="9 6 15 12 9 18" /></svg>
            </button>
          </div>
          <div className="mr__dots">
            {CHARACTERS.map((c, i) => (
              <span key={c.name} className={`mr__dot ${i === homeIndex ? 'mr__dot--active' : ''} ${interrogated.has(c.name) ? 'mr__dot--done' : ''}`} onPointerDown={() => switchHome(i)} />
            ))}
          </div>
          {allDone
            ? <button className="mr__start-btn mr__start-btn--verdict" onPointerDown={() => setPhase('verdict')}>{t('make_verdict')}</button>
            : <button className="mr__start-btn" onPointerDown={enterCharacter}>{t('interrogate')} {charData.displayName}</button>
          }
        </>
      )}

      {phase === 'intro' && quiz && (
        <div className="mr__dialog">
          <p className="mr__dialog-text">"{L(quiz.intro)}"</p>
          <button className="mr__start-btn" onPointerDown={startQuiz}>{t('start')}</button>
        </div>
      )}

      {phase === 'quiz' && currentQ && (
        <div className="mr__quiz" key={`${qIndex}-${answered}`}>
          <div className="mr__quiz-progress">
            <span>{qIndex + 1} / {quiz.questions.length}</span>
            <div className="mr__quiz-bar">
              <div className="mr__quiz-fill" style={{ width: `${((qIndex + 1) / quiz.questions.length) * 100}%` }} />
            </div>
          </div>
          <p className="mr__quiz-q">{L(currentQ.text)}</p>
          {!answered ? (
            <div className="mr__quiz-options">
              {currentQ.options.map((opt, i) => (
                <button key={i} className="mr__quiz-opt" onPointerDown={() => answer(i)}>{L(opt.text)}</button>
              ))}
            </div>
          ) : (
            <button className="mr__continue-btn" onPointerDown={nextQuestion}>
              {qIndex < quiz.questions.length - 1
                ? (locale === 'zh' ? '继续 →' : 'Continue →')
                : (locale === 'zh' ? '结束问话' : 'End Interview')}
            </button>
          )}
        </div>
      )}

      {phase === 'outro' && quiz && (
        <div className="mr__dialog">
          <p className="mr__dialog-text">"{L(quiz.outro)}"</p>
          <button className="mr__start-btn" onPointerDown={backHome}>{t('back_home')}</button>
        </div>
      )}

      {phase === 'ending' && endingIndex >= 0 && (
        <div className="mr__ending">
          <span className="mr__ending-tag">{L(ENDINGS[endingIndex].tag)}</span>
          <h3 className="mr__ending-verdict">{L(ENDINGS[endingIndex].verdict)}</h3>
          <p className="mr__ending-text">{L(ENDINGS[endingIndex].text)}</p>
          <button className="mr__start-btn" onPointerDown={restart}>{t('restart')}</button>
        </div>
      )}
    </div>
  );
}
