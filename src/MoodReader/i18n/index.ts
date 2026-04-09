type Locale = 'zh' | 'en';

const strings: Record<string, Record<Locale, string>> = {
  interrogate: { zh: '开始问话', en: 'Interrogate' },
  start: { zh: '开始问话', en: 'Begin' },
  back_home: { zh: '继续调查', en: 'Continue Investigation' },
  story_title: { zh: '谁偷了画？', en: 'Who Stole the Painting?' },
};

function detectLocale(): Locale {
  const override = localStorage.getItem('game_locale');
  if (override === 'en' || override === 'zh') return override;
  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

const locale = detectLocale();

export function t(key: string): string {
  const entry = strings[key];
  if (!entry) return key;
  return entry[locale] ?? entry.zh;
}
