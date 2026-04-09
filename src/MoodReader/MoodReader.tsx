import { useState, useEffect, useCallback } from 'react';
import LayeredCharacter from './components/LayeredCharacter';
import { CHARACTERS, loadCharacter } from './data/characters';
import { CHARACTER_QUIZZES, STORY_INTRO } from './data/quiz';
import { ENDINGS } from './data/endings';
import type { ExpressionName, CharacterData } from './types';
import { t } from './i18n';
import './MoodReader.less';

type Phase = 'home' | 'intro' | 'quiz' | 'outro' | 'verdict' | 'ending';

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

const locale = navigator.language.startsWith('zh') ? 'zh' : 'en';

export default function MoodReader() {
  const [phase, setPhase] = useState<Phase>('home');
  const [homeIndex, setHomeIndex] = useState(0);
  const [activeChar, setActiveChar] = useState('isaya');
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  const [qIndex, setQIndex] = useState(0);
  const [expression, setExpression] = useState<ExpressionName>('neutral');
  const [reactionText, setReactionText] = useState('');
  const [answered, setAnswered] = useState(false);

  // Track which characters have been interrogated
  const [interrogated, setInterrogated] = useState<Set<string>>(new Set());
  const [endingIndex, setEndingIndex] = useState(-1);

  const charData = (phase === 'ending' && endingIndex >= 0)
    ? loadCharacter(ENDINGS[endingIndex].reactor)
    : phase === 'home' || phase === 'verdict'
      ? CHARACTERS[homeIndex]
      : loadCharacter(activeChar);

  const quiz = CHARACTER_QUIZZES[activeChar];
  const currentQ = quiz?.questions[qIndex];
  const allDone = interrogated.size >= 4;

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

  const switchHome = useCallback((i: number) => {
    setReady(false); setVisible(false); setHomeIndex(i);
    setExpression('neutral');
  }, []);

  const enterCharacter = useCallback(() => {
    setActiveChar(CHARACTERS[homeIndex].name);
    setPhase('intro');
    setExpression('neutral');
    setQIndex(0);
    setReactionText(''); setAnswered(false);
  }, [homeIndex]);

  const startQuiz = useCallback(() => {
    setPhase('quiz');
    setExpression('neutral');
    setReactionText(''); setAnswered(false);
  }, []);

  const answer = useCallback((optIdx: number) => {
    if (answered || !currentQ) return;
    setAnswered(true);
    const opt = currentQ.options[optIdx];
    setExpression(opt.reaction as ExpressionName);
    setReactionText(opt.reactionText?.[locale] ?? '');

    setTimeout(() => {
      setReactionText('');
      if (qIndex < quiz.questions.length - 1) {
        setQIndex(qIndex + 1);
        setAnswered(false);
      } else {
        setPhase('outro');
        setExpression(quiz.outroExpr as ExpressionName);
        setInterrogated(prev => new Set([...prev, activeChar]));
      }
    }, 2200);
  }, [answered, currentQ, qIndex, quiz, activeChar]);

  const backHome = useCallback(() => {
    if (allDone) {
      setPhase('verdict');
    } else {
      setPhase('home');
    }
    setExpression('neutral');
    setReactionText('');
  }, [allDone]);

  const chooseEnding = useCallback((idx: number) => {
    setEndingIndex(idx);
    const ending = ENDINGS[idx];
    setExpression(ending.reactExpr);
    setPhase('ending');
  }, []);

  const restart = useCallback(() => {
    setPhase('home');
    setHomeIndex(0);
    setInterrogated(new Set());
    setEndingIndex(-1);
    setExpression('neutral');
    setReactionText('');
  }, []);

  return (
    <div className="mr">
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
              maxShift={25}
            />
          )}
        </div>
        {reactionText && <div className="mr__bubble" key={reactionText}>{reactionText}</div>}
      </div>

      {/* ── Home ── */}
      {phase === 'home' && (
        <>
          <div className="mr__controls">
            <button className="mr__nav" onPointerDown={() => switchHome((homeIndex - 1 + CHARACTERS.length) % CHARACTERS.length)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <div className="mr__info">
              <span className="mr__name">{charData.displayName}</span>
              {quiz && <span className="mr__role">{quiz.role[locale]}</span>}
              {interrogated.has(charData.name) && <span className="mr__done-tag">✓ {locale === 'zh' ? '已问话' : 'Done'}</span>}
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
          {!allDone && <p className="mr__story-intro">{STORY_INTRO[locale]}</p>}
          {allDone
            ? <button className="mr__start-btn mr__start-btn--verdict" onPointerDown={() => setPhase('verdict')}>
                {locale === 'zh' ? '做出判断' : 'Make Your Verdict'}
              </button>
            : <button className="mr__start-btn" onPointerDown={enterCharacter}>
                {t('interrogate')} {charData.displayName}
              </button>
          }
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
              <button key={i} className={`mr__quiz-opt ${answered ? 'mr__quiz-opt--disabled' : ''}`}
                onPointerDown={() => answer(i)}>{opt.text[locale]}</button>
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

      {/* ── Verdict ── */}
      {phase === 'verdict' && (
        <div className="mr__verdict">
          <h2 className="mr__verdict-title">{locale === 'zh' ? '你认为真相是——' : 'You believe the truth is—'}</h2>
          <div className="mr__verdict-options">
            {ENDINGS.map((e, i) => (
              <button key={i} className="mr__verdict-btn" onPointerDown={() => chooseEnding(i)}>
                {e.label[locale]}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Ending ── */}
      {phase === 'ending' && endingIndex >= 0 && (
        <div className="mr__ending">
          <span className="mr__ending-tag">{ENDINGS[endingIndex].tag[locale]}</span>
          <h3 className="mr__ending-verdict">{ENDINGS[endingIndex].verdict[locale]}</h3>
          <p className="mr__ending-text">{ENDINGS[endingIndex].text[locale]}</p>
          <button className="mr__start-btn" onPointerDown={restart}>
            {locale === 'zh' ? '重新调查' : 'Investigate Again'}
          </button>
        </div>
      )}
    </div>
  );
}
