import type { ExpressionType } from './expressions';

export interface QuizOption {
  text: { zh: string; en: string };
  /** Affinity scores: [isaya, jenny, algram, isabel] */
  scores: [number, number, number, number];
}

export interface QuizQuestion {
  text: { zh: string; en: string };
  /** Which character reacts to this question */
  reactor: string;
  /** Expression shown while question displays */
  reactExpr: ExpressionType;
  options: QuizOption[];
}

export const QUIZ: QuizQuestion[] = [
  {
    text: { zh: '周末的理想去处？', en: 'Ideal weekend plan?' },
    reactor: 'isaya',
    reactExpr: 'thinking',
    options: [
      { text: { zh: '窝在家里画画听雨', en: 'Stay home, draw, listen to rain' }, scores: [3, 0, 0, 1] },
      { text: { zh: '去咖啡馆看书', en: 'Read at a cafe' }, scores: [1, 3, 0, 1] },
      { text: { zh: '约朋友出去探险', en: 'Go explore with friends' }, scores: [0, 1, 3, 0] },
      { text: { zh: '逛花市或美术馆', en: 'Visit flower market or gallery' }, scores: [1, 1, 0, 3] },
    ],
  },
  {
    text: { zh: '面对一个困难的决定，你会...', en: 'Facing a tough decision, you...' },
    reactor: 'jenny',
    reactExpr: 'surprised',
    options: [
      { text: { zh: '独自安静地想很久', en: 'Think alone for a long time' }, scores: [3, 1, 0, 0] },
      { text: { zh: '查资料分析利弊', en: 'Research and analyze pros/cons' }, scores: [0, 3, 1, 0] },
      { text: { zh: '跟着直觉走', en: 'Trust your gut' }, scores: [0, 0, 3, 1] },
      { text: { zh: '看看别人怎么做再说', en: 'Observe how others handle it' }, scores: [1, 0, 1, 3] },
    ],
  },
  {
    text: { zh: '朋友伤心时，你最可能...', en: 'When a friend is sad, you...' },
    reactor: 'algram',
    reactExpr: 'sad',
    options: [
      { text: { zh: '默默陪在旁边', en: 'Quietly stay by their side' }, scores: [3, 1, 0, 1] },
      { text: { zh: '帮TA分析问题出在哪', en: 'Help analyze the problem' }, scores: [0, 3, 0, 1] },
      { text: { zh: '拉TA出去散心', en: 'Take them out to cheer up' }, scores: [0, 0, 3, 0] },
      { text: { zh: '给TA准备惊喜打气', en: 'Prepare a surprise to lift spirits' }, scores: [0, 1, 1, 3] },
    ],
  },
  {
    text: { zh: '你的穿衣风格？', en: 'Your fashion style?' },
    reactor: 'isabel',
    reactExpr: 'happy',
    options: [
      { text: { zh: '黑白灰，简单舒适就好', en: 'Black/white/grey, simple comfort' }, scores: [3, 0, 0, 0] },
      { text: { zh: '休闲随性但有细节', en: 'Casual but with nice details' }, scores: [0, 3, 1, 0] },
      { text: { zh: '运动风或街头潮流', en: 'Sporty or streetwear' }, scores: [0, 0, 3, 0] },
      { text: { zh: '精心搭配，注重品味', en: 'Carefully coordinated, tasteful' }, scores: [0, 1, 0, 3] },
    ],
  },
  {
    text: { zh: '深夜睡不着时...', en: 'When you can\'t sleep at night...' },
    reactor: 'isaya',
    reactExpr: 'shy',
    options: [
      { text: { zh: '戴耳机听氛围音乐', en: 'Put on headphones, ambient music' }, scores: [3, 0, 0, 1] },
      { text: { zh: '翻书或刷知识视频', en: 'Read or watch educational videos' }, scores: [0, 3, 0, 0] },
      { text: { zh: '打游戏到天亮', en: 'Game until sunrise' }, scores: [1, 0, 3, 0] },
      { text: { zh: '泡杯茶看窗外发呆', en: 'Make tea and gaze out the window' }, scores: [1, 1, 0, 3] },
    ],
  },
  {
    text: { zh: '收到一份意外的礼物！', en: 'You receive an unexpected gift!' },
    reactor: 'jenny',
    reactExpr: 'happy',
    options: [
      { text: { zh: '有点不知所措...', en: 'A bit overwhelmed...' }, scores: [3, 0, 0, 0] },
      { text: { zh: '开心地研究它的来历', en: 'Happily research its origin' }, scores: [0, 3, 0, 1] },
      { text: { zh: '马上拆开大声感谢', en: 'Open it right away, thank loudly' }, scores: [0, 0, 3, 0] },
      { text: { zh: '微笑收下，默默感动', en: 'Accept with a smile, quietly moved' }, scores: [1, 0, 0, 3] },
    ],
  },
  {
    text: { zh: '如果有超能力，你想...', en: 'If you had a superpower...' },
    reactor: 'algram',
    reactExpr: 'surprised',
    options: [
      { text: { zh: '隐身，安静观察世界', en: 'Invisibility — quietly observe' }, scores: [3, 1, 0, 0] },
      { text: { zh: '读心术，理解每个人', en: 'Mind reading — understand everyone' }, scores: [0, 3, 0, 1] },
      { text: { zh: '飞行，自由探索', en: 'Flight — explore freely' }, scores: [0, 0, 3, 0] },
      { text: { zh: '时间暂停，享受当下', en: 'Time stop — savor the moment' }, scores: [1, 0, 0, 3] },
    ],
  },
];

/** Character result descriptions */
export const RESULTS: Record<string, { title: { zh: string; en: string }; desc: { zh: string; en: string }; expr: ExpressionType }> = {
  isaya: {
    title: { zh: '安静的灵魂画家', en: 'The Quiet Soul' },
    desc: {
      zh: '你像 Isaya 一样，有着丰富的内心世界。戴上耳机，就是你与世界之间最舒适的距离。',
      en: 'Like Isaya, you have a rich inner world. Headphones on — that\'s your comfort zone.',
    },
    expr: 'shy',
  },
  jenny: {
    title: { zh: '温暖的知识探索者', en: 'The Warm Explorer' },
    desc: {
      zh: '你和 Jenny 一样，对世界充满好奇又不失温度。一杯咖啡，一本好书，就是最好的时光。',
      en: 'Like Jenny, curious about the world with a warm heart. Coffee and a good book — perfect.',
    },
    expr: 'happy',
  },
  algram: {
    title: { zh: '自由的冒险少年', en: 'The Free Spirit' },
    desc: {
      zh: '你像 Algram 一样，充满活力和行动力。背上吉他，世界就是你的舞台。',
      en: 'Like Algram, full of energy and action. Guitar on your back — the world is your stage.',
    },
    expr: 'happy',
  },
  isabel: {
    title: { zh: '优雅的从容者', en: 'The Graceful One' },
    desc: {
      zh: '你和 Isabel 一样，无论什么场合都能保持优雅从容。看似漫不经心，其实心里什么都清楚。',
      en: 'Like Isabel, graceful in every situation. Seems casual, but nothing escapes your notice.',
    },
    expr: 'thinking',
  },
};

export const CHARACTER_ORDER = ['isaya', 'jenny', 'algram', 'isabel'];
