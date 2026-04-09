import type { ExpressionType } from './expressions';

export interface QuizOption {
  text: { zh: string; en: string };
  /** Character's reaction expression when this is chosen */
  reaction: ExpressionType;
  /** Reaction text bubble */
  reactionText?: { zh: string; en: string };
}

export interface QuizQuestion {
  /** Character's expression while asking */
  askExpr: ExpressionType;
  text: { zh: string; en: string };
  options: QuizOption[];
}

export interface CharacterQuiz {
  intro: { zh: string; en: string };
  questions: QuizQuestion[];
  outro: { zh: string; en: string };
  outroExpr: ExpressionType;
}

/** Per-character quiz data */
export const CHARACTER_QUIZZES: Record<string, CharacterQuiz> = {
  isaya: {
    intro: { zh: '...你好。想多了解我一点吗？', en: '...Hi. Want to know me better?' },
    questions: [
      {
        askExpr: 'shy',
        text: { zh: '如果只能听一种声音，你选...', en: 'If you could hear only one sound...' },
        options: [
          { text: { zh: '雨声', en: 'Rain' }, reaction: 'happy', reactionText: { zh: '...我也是', en: '...Me too' } },
          { text: { zh: '音乐', en: 'Music' }, reaction: 'neutral', reactionText: { zh: '嗯，也不错', en: 'Hmm, not bad' } },
          { text: { zh: '安静', en: 'Silence' }, reaction: 'surprised', reactionText: { zh: '真的吗...我有时也这样想', en: 'Really...I think so too sometimes' } },
          { text: { zh: '人群笑声', en: 'Laughter' }, reaction: 'thinking', reactionText: { zh: '...你比我勇敢', en: '...You\'re braver than me' } },
        ],
      },
      {
        askExpr: 'thinking',
        text: { zh: '深夜睡不着时，你会...', en: 'When you can\'t sleep at night...' },
        options: [
          { text: { zh: '戴上耳机', en: 'Put on headphones' }, reaction: 'happy', reactionText: { zh: '和我一样呢', en: 'Same as me' } },
          { text: { zh: '看窗外发呆', en: 'Stare out the window' }, reaction: 'shy', reactionText: { zh: '...夜景很安静', en: '...The night is quiet' } },
          { text: { zh: '画画或写东西', en: 'Draw or write' }, reaction: 'surprised', reactionText: { zh: '你也画画吗！', en: 'You draw too?!' } },
          { text: { zh: '刷手机到天亮', en: 'Phone until dawn' }, reaction: 'sad', reactionText: { zh: '...对眼睛不好', en: '...Bad for your eyes' } },
        ],
      },
      {
        askExpr: 'neutral',
        text: { zh: '你觉得我看起来...', en: 'Do I look...' },
        options: [
          { text: { zh: '很酷', en: 'Cool' }, reaction: 'shy', reactionText: { zh: '......谢谢', en: '......Thanks' } },
          { text: { zh: '有点忧郁', en: 'A bit melancholic' }, reaction: 'thinking', reactionText: { zh: '...也许吧', en: '...Maybe' } },
          { text: { zh: '很温柔', en: 'Gentle' }, reaction: 'happy', reactionText: { zh: '...!', en: '...!' } },
          { text: { zh: '难以接近', en: 'Hard to approach' }, reaction: 'sad', reactionText: { zh: '...我不是故意的', en: '...I don\'t mean to be' } },
        ],
      },
      {
        askExpr: 'shy',
        text: { zh: '送你一首歌的话，你想要...', en: 'If I played a song for you...' },
        options: [
          { text: { zh: '安静的钢琴曲', en: 'Quiet piano' }, reaction: 'happy', reactionText: { zh: '我会弹给你听', en: 'I\'ll play it for you' } },
          { text: { zh: '电子氛围音乐', en: 'Electronic ambient' }, reaction: 'surprised', reactionText: { zh: '品味不错', en: 'Good taste' } },
          { text: { zh: '摇滚', en: 'Rock' }, reaction: 'angry', reactionText: { zh: '...有点吵', en: '...A bit loud' } },
          { text: { zh: '随便你选', en: 'You choose' }, reaction: 'shy', reactionText: { zh: '...那就听这首', en: '...Then listen to this' } },
        ],
      },
    ],
    outro: { zh: '谢谢你...和你聊天很开心', en: 'Thanks...I enjoyed talking to you' },
    outroExpr: 'happy',
  },

  jenny: {
    intro: { zh: '嗨！来聊聊吧，我刚泡了咖啡~', en: 'Hey! Let\'s chat, I just made coffee~' },
    questions: [
      {
        askExpr: 'happy',
        text: { zh: '你喜欢什么类型的书？', en: 'What kind of books do you like?' },
        options: [
          { text: { zh: '推理悬疑', en: 'Mystery/thriller' }, reaction: 'surprised', reactionText: { zh: '我书架上超多这类的！', en: 'I have tons of those!' } },
          { text: { zh: '科幻', en: 'Sci-fi' }, reaction: 'happy', reactionText: { zh: '品味相同！', en: 'Same taste!' } },
          { text: { zh: '不太看书', en: 'Don\'t read much' }, reaction: 'thinking', reactionText: { zh: '那我推荐你一本？', en: 'Can I recommend one?' } },
          { text: { zh: '漫画', en: 'Comics/manga' }, reaction: 'happy', reactionText: { zh: '漫画也是书嘛！', en: 'Comics count too!' } },
        ],
      },
      {
        askExpr: 'thinking',
        text: { zh: '咖啡还是茶？', en: 'Coffee or tea?' },
        options: [
          { text: { zh: '咖啡，必须的', en: 'Coffee, absolutely' }, reaction: 'happy', reactionText: { zh: '那我们是同类！', en: 'We\'re the same kind!' } },
          { text: { zh: '茶', en: 'Tea' }, reaction: 'surprised', reactionText: { zh: '什么茶？我想了解', en: 'What kind? Tell me!' } },
          { text: { zh: '奶茶', en: 'Bubble tea' }, reaction: 'happy', reactionText: { zh: '哈哈偶尔也很好', en: 'Haha that\'s great too' } },
          { text: { zh: '白开水', en: 'Plain water' }, reaction: 'sad', reactionText: { zh: '也...也挺健康的', en: 'That\'s...healthy I guess' } },
        ],
      },
      {
        askExpr: 'happy',
        text: { zh: '你觉得我戴眼镜好看吗？', en: 'Do my glasses look good?' },
        options: [
          { text: { zh: '很好看！很有气质', en: 'Yes! Very stylish' }, reaction: 'happy', reactionText: { zh: '谢谢你~', en: 'Thanks~' } },
          { text: { zh: '试试摘掉看看？', en: 'Try taking them off?' }, reaction: 'shy', reactionText: { zh: '...其实我摘了什么都看不清', en: '...I can\'t see without them' } },
          { text: { zh: '换个款式试试', en: 'Try a different style' }, reaction: 'thinking', reactionText: { zh: '嗯...有推荐吗？', en: 'Hmm...any suggestions?' } },
          { text: { zh: '眼镜是灵魂！', en: 'Glasses are essential!' }, reaction: 'surprised', reactionText: { zh: '你懂我！', en: 'You get me!' } },
        ],
      },
      {
        askExpr: 'thinking',
        text: { zh: '如果我们一起出去，去哪好？', en: 'If we hung out, where would we go?' },
        options: [
          { text: { zh: '书店', en: 'Bookstore' }, reaction: 'happy', reactionText: { zh: '我可以待一整天！', en: 'I could stay all day!' } },
          { text: { zh: '游乐园', en: 'Amusement park' }, reaction: 'surprised', reactionText: { zh: '我有点怕过山车...', en: 'I\'m scared of rollercoasters...' } },
          { text: { zh: '咖啡馆', en: 'Cafe' }, reaction: 'happy', reactionText: { zh: '完美选择！', en: 'Perfect choice!' } },
          { text: { zh: '哪都行，聊天就好', en: 'Anywhere, just chatting' }, reaction: 'shy', reactionText: { zh: '...那就这样吧', en: '...Let\'s do that then' } },
        ],
      },
    ],
    outro: { zh: '和你聊天好开心！下次再来找我呀~', en: 'So fun chatting! Come back anytime~' },
    outroExpr: 'happy',
  },

  algram: {
    intro: { zh: 'Yo！来聊聊，别客气！', en: 'Yo! Let\'s talk, don\'t be shy!' },
    questions: [
      {
        askExpr: 'happy',
        text: { zh: '你喜欢什么音乐？', en: 'What music do you like?' },
        options: [
          { text: { zh: '摇滚/独立', en: 'Rock/Indie' }, reaction: 'happy', reactionText: { zh: '兄弟！', en: 'My man!' } },
          { text: { zh: '流行', en: 'Pop' }, reaction: 'thinking', reactionText: { zh: '也行吧', en: 'Fair enough' } },
          { text: { zh: '古典', en: 'Classical' }, reaction: 'surprised', reactionText: { zh: '哇，有品位', en: 'Wow, classy' } },
          { text: { zh: '什么都听', en: 'Everything' }, reaction: 'happy', reactionText: { zh: '这才对！', en: 'That\'s the way!' } },
        ],
      },
      {
        askExpr: 'thinking',
        text: { zh: '周末更想做什么？', en: 'Ideal weekend activity?' },
        options: [
          { text: { zh: '出去冒险', en: 'Go adventuring' }, reaction: 'happy', reactionText: { zh: '走！我也去！', en: 'Let\'s go! I\'m in!' } },
          { text: { zh: '宅在家', en: 'Stay home' }, reaction: 'sad', reactionText: { zh: '这也太无聊了...', en: 'That\'s so boring...' } },
          { text: { zh: '运动', en: 'Sports' }, reaction: 'surprised', reactionText: { zh: '来比一场！', en: 'Let\'s compete!' } },
          { text: { zh: '和朋友聚会', en: 'Hang with friends' }, reaction: 'happy', reactionText: { zh: '我来带吉他！', en: 'I\'ll bring my guitar!' } },
        ],
      },
      {
        askExpr: 'happy',
        text: { zh: '你觉得我帅不帅？', en: 'Think I\'m cool?' },
        options: [
          { text: { zh: '帅啊！', en: 'Totally!' }, reaction: 'happy', reactionText: { zh: '哈哈我知道', en: 'Haha I know' } },
          { text: { zh: '还行吧', en: 'I guess' }, reaction: 'angry', reactionText: { zh: '什么叫还行！', en: 'What do you mean "I guess"!' } },
          { text: { zh: '笑起来更帅', en: 'Better when you smile' }, reaction: 'shy', reactionText: { zh: '...那我多笑笑', en: '...I\'ll smile more then' } },
          { text: { zh: '背吉他那样最帅', en: 'Coolest with your guitar' }, reaction: 'happy', reactionText: { zh: '懂行！', en: 'You get it!' } },
        ],
      },
      {
        askExpr: 'thinking',
        text: { zh: '如果组乐队，你想当什么？', en: 'In a band, what would you be?' },
        options: [
          { text: { zh: '主唱', en: 'Lead singer' }, reaction: 'surprised', reactionText: { zh: '那我弹吉他给你伴奏', en: 'I\'ll play guitar for you' } },
          { text: { zh: '吉他手', en: 'Guitarist' }, reaction: 'angry', reactionText: { zh: '那是我的位置！', en: 'That\'s MY spot!' } },
          { text: { zh: '鼓手', en: 'Drummer' }, reaction: 'happy', reactionText: { zh: '酷！我们配合', en: 'Cool! We\'ll jam!' } },
          { text: { zh: '观众就好', en: 'Just the audience' }, reaction: 'sad', reactionText: { zh: '不行，你必须上台', en: 'No way, you\'re getting on stage' } },
        ],
      },
    ],
    outro: { zh: '哈哈聊得爽！下次一起去冒险！', en: 'Haha great chat! Let\'s adventure next time!' },
    outroExpr: 'happy',
  },

  isabel: {
    intro: { zh: '嗯？你来了。坐吧。', en: 'Hmm? There you are. Have a seat.' },
    questions: [
      {
        askExpr: 'thinking',
        text: { zh: '你更喜欢日出还是日落？', en: 'Sunrise or sunset?' },
        options: [
          { text: { zh: '日落', en: 'Sunset' }, reaction: 'happy', reactionText: { zh: '品味不错', en: 'Good taste' } },
          { text: { zh: '日出', en: 'Sunrise' }, reaction: 'surprised', reactionText: { zh: '你居然起得来？', en: 'You actually wake up for those?' } },
          { text: { zh: '都喜欢', en: 'Both' }, reaction: 'thinking', reactionText: { zh: '贪心呢', en: 'Greedy, aren\'t you' } },
          { text: { zh: '无所谓', en: 'Don\'t care' }, reaction: 'angry', reactionText: { zh: '无趣的回答', en: 'Boring answer' } },
        ],
      },
      {
        askExpr: 'neutral',
        text: { zh: '觉得我是什么样的人？', en: 'What kind of person do you think I am?' },
        options: [
          { text: { zh: '很优雅', en: 'Elegant' }, reaction: 'happy', reactionText: { zh: '看得出来', en: 'Obviously' } },
          { text: { zh: '有点神秘', en: 'A bit mysterious' }, reaction: 'shy', reactionText: { zh: '...是吗', en: '...Am I' } },
          { text: { zh: '很有主见', en: 'Opinionated' }, reaction: 'thinking', reactionText: { zh: '算你说对了', en: 'You got that right' } },
          { text: { zh: '看不透', en: 'Hard to read' }, reaction: 'happy', reactionText: { zh: '那就对了', en: 'Good' } },
        ],
      },
      {
        askExpr: 'thinking',
        text: { zh: '送我花的话，你会选...', en: 'If you\'d give me flowers...' },
        options: [
          { text: { zh: '玫瑰', en: 'Roses' }, reaction: 'thinking', reactionText: { zh: '有点俗...但我收下', en: 'A bit cliché...but I\'ll take them' } },
          { text: { zh: '野花', en: 'Wildflowers' }, reaction: 'surprised', reactionText: { zh: '意想不到...我喜欢', en: 'Unexpected...I like it' } },
          { text: { zh: '不送花', en: 'No flowers' }, reaction: 'angry', reactionText: { zh: '哼', en: 'Hmph' } },
          { text: { zh: '你喜欢什么我送什么', en: 'Whatever you want' }, reaction: 'shy', reactionText: { zh: '...还算有诚意', en: '...At least you\'re sincere' } },
        ],
      },
      {
        askExpr: 'happy',
        text: { zh: '最后一个问题：还会再来找我吗？', en: 'Last question: will you visit again?' },
        options: [
          { text: { zh: '一定会', en: 'Definitely' }, reaction: 'happy', reactionText: { zh: '...那我等你', en: '...I\'ll be waiting' } },
          { text: { zh: '看心情', en: 'Depends on my mood' }, reaction: 'thinking', reactionText: { zh: '和我很像呢', en: 'You\'re like me' } },
          { text: { zh: '你会想我吗', en: 'Would you miss me?' }, reaction: 'shy', reactionText: { zh: '...不告诉你', en: '...Not telling' } },
          { text: { zh: '当然，带花来', en: 'Yes, with flowers' }, reaction: 'happy', reactionText: { zh: '哼，记住了', en: 'Hmph, I\'ll remember that' } },
        ],
      },
    ],
    outro: { zh: '...还不错。下次见。', en: '...Not bad. See you.' },
    outroExpr: 'shy',
  },
};
