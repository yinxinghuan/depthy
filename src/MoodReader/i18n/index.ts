export type Locale = 'zh' | 'en';

function detectLocale(): Locale {
  const override = localStorage.getItem('game_locale');
  if (override === 'en' || override === 'zh') return override;
  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

export const locale: Locale = detectLocale();

const strings: Record<string, Record<Locale, string>> = {
  interrogate: { zh: '开始问话', en: 'Interrogate' },
  start: { zh: '开始问话', en: 'Begin' },
  back_home: { zh: '继续调查', en: 'Continue' },
  verdict_title: { zh: '你认为真相是——', en: 'You believe the truth is—' },
  done_tag: { zh: '已问话', en: 'Done' },
  make_verdict: { zh: '做出判断', en: 'Make Your Verdict' },
  restart: { zh: '重新调查', en: 'Investigate Again' },
};

export function t(key: string): string {
  const entry = strings[key];
  if (!entry) return key;
  return entry[locale] ?? entry.zh;
}

/** Helper for bilingual data objects */
export function L(obj: { zh: string; en: string }): string {
  return obj[locale];
}
