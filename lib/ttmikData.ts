export type Lesson = {
  id: string;
  title: string;
  grammarPoint: string;
  description: string;
};

export type Level = {
  id: string;
  name: string;
  lessons: Lesson[];
};

export const ttmikLevels: Level[] = [
  {
    id: '1',
    name: 'Level 1',
    lessons: [
      {
        id: '1-1',
        title: 'Level 1 Lesson 1 – 은/는',
        grammarPoint:
          'Topic/contrast particle 은/는',
        description:
          'Use 은/는 to mark the topic of the sentence or to contrast it with other things.',
      },
      {
        id: '1-2',
        title: 'Level 1 Lesson 2 – 이에요/예요',
        grammarPoint:
          "Copula 'to be' in polite form",
        description:
          'Use 이에요/예요 to say that something is something (X is Y) in polite speech.',
      },
    ],
  },
  {
    id: '2',
    name: 'Level 2',
    lessons: [
      {
        id: '2-1',
        title: 'Level 2 Lesson 1 – -고 싶어요',
        grammarPoint: 'Expressing wants',
        description:
          'Use -고 싶어요 to express that the subject wants to do something.',
      },
    ],
  },
  {
    id: '3',
    name: 'Level 3',
    lessons: [
      {
        id: '3-1',
        title: 'Lesson 1. Too much, Very / 너무',
        grammarPoint:
          'Expressing Too much, Very / 너무',
        description:
          '너무 too much; very; really. Used to express something being excessive or very intense.',
      },
      {
        id: '3-2',
        title: 'Lesson 2. Linking Verbs / -고',
        grammarPoint: '',
        description: '',
      },
      {
        id: '3-3',
        title:
          'Lesson 3. In front of, Behind, On top of, Under, Next to / 앞에, 뒤에, 위에, 밑에, 옆에',
        grammarPoint:
          'Basic location words: 앞에, 뒤에, 위에, 밑에, 옆에',
        description:
          'Use 앞에, 뒤에, 위에, 밑에, 옆에 with a noun to describe where something is located in relation to something else. Example: 책상 위에 있어요., 의자 옆에 있어요.',
      },
      {
        id: '3-4',
        title:
          'Lesson 4. Shall we…?, I wonder… / -(으)ㄹ까요?',
        grammarPoint:
          'Suggestion and wondering with -(으)ㄹ까요?',
        description:
          'Attach -(으)ㄹ까요? to a verb stem to suggest doing something together (“Shall we…?”) or softly wonder about something (“I wonder if…”).',
      },
      {
        id: '3-5',
        title:
          'Lesson 5. Approximately, About / -쯤, 정도, 약',
        grammarPoint:
          'Expressing approximation with -쯤, 정도, 약',
        description:
          'Use -쯤 or 정도 after numbers to mean “about/around”, and 약 before numbers. Example: 열 시쯤, 약 삼십 분.',
      },
      {
        id: '3-6',
        title:
          'Lesson 6. Future Tense / -(으)ㄹ 거예요 vs -(으)ㄹ게요',
        grammarPoint:
          'Future plans and promises: -(으)ㄹ 거예요 vs -(으)ㄹ게요',
        description:
          'Use -(으)ㄹ 거예요 for general future plans or predictions and -(으)ㄹ게요 mainly to promise or respond to someone’s words (“Okay, I will…”).',
      },
      {
        id: '3-7',
        title:
          'Lesson 7. Linking Verbs / -아/어/여서',
        grammarPoint:
          'Cause, reason, and sequence with -아/어/여서',
        description:
          'Attach -아/어/여서 to a verb to show a reason (“because”) or to link actions in sequence. Example: 너무 피곤해서 집에 갔어요.',
      },
      {
        id: '3-8',
        title:
          'Lesson 8. To look like, To seem like (nouns) / 같다',
        grammarPoint:
          'Noun + 같다 for similarity/appearance',
        description:
          'When used with nouns, 같다 expresses that something seems like or is similar to that noun. Example: 학생 같아요. 한국 사람 같아요.',
      },
      {
        id: '3-9',
        title:
          'Lesson 9. To look like, To seem like (verbs) / -(으)ㄴ/는/(으)ㄹ 것 같아요',
        grammarPoint:
          'Verb + 것 같아요 for guessing and impressions',
        description:
          'Use -(으)ㄴ 것 같아요 (past), -는 것 같아요 (present), -(으)ㄹ 것 같아요 (future) after verbs to express that something seems or appears a certain way.',
      },
      {
        id: '3-10',
        title:
          'Lesson 10. Before -ing / -기 전에',
        grammarPoint:
          'Expressing “before doing” with -기 전에',
        description:
          'Attach -기 전에 to a verb stem to say “before doing ~”. Example: 자기 전에 책을 읽어요.',
      },
      {
        id: '3-11',
        title:
          'Lesson 11. Irregulars: ㅂ / ㅂ 불규칙',
        grammarPoint:
          'ㅂ irregular verbs (ㅂ 불규칙)',
        description:
          'Some verbs ending in ㅂ drop ㅂ and add 우 or 오 before certain endings. Example: 덥다 → 더워요, 쉽다 → 쉬워요.',
      },
      {
        id: '3-12',
        title:
          'Lesson 12. But still, Nevertheless / 그래도',
        grammarPoint: 'Contrasting with 그래도',
        description:
          'Use 그래도 to mean “but still” or “even so” when you acknowledge something but show a contrasting result or opinion.',
      },
      {
        id: '3-13',
        title:
          'Lesson 13. Making Adjectives (Part 1) / adjectives + -(으)ㄴ + 명사',
        grammarPoint:
          'Descriptive verbs + -(으)ㄴ + noun',
        description:
          'Attach -(으)ㄴ to adjective stems to describe a noun. Example: 예쁜 꽃, 작은 방, 긴 이야기.',
      },
      {
        id: '3-14',
        title:
          'Lesson 14. Making Adjectives (Part 2) / action verbs + -는 + 명사',
        grammarPoint: 'Action verbs + -는 + noun',
        description:
          'Attach -는 to action verbs to describe a noun with an ongoing or habitual action. Example: 공부하는 학생, 일하는 사람.',
      },
      {
        id: '3-15',
        title:
          'Lesson 15. Well then, In that case, If so / 그러면, 그럼',
        grammarPoint:
          'Connecting ideas with 그러면, 그럼',
        description:
          'Use 그러면 or its shortened form 그럼 to mean “then”, “in that case”, or “if so” when responding to previous information.',
      },
      {
        id: '3-16',
        title:
          'Lesson 16. Let’s / -아/어/여요 (청유형)',
        grammarPoint:
          'Making polite suggestions with -아/어/여요',
        description:
          'Use -아/어/여요 in a suggestion tone (청유형) to say “Let’s do ~”. Example: 같이 가요., 밥 먹어요.',
      },
      {
        id: '3-17',
        title:
          'Lesson 17. In order to, For the sake of / 위해, 위해서',
        grammarPoint:
          'Expressing purpose with 위해/위해서',
        description:
          'Use 위해 or 위해서 after nouns or verbs to mean “for”, “for the sake of”, or “in order to”. Example: 가족을 위해 열심히 일해요.',
      },
      {
        id: '3-18',
        title:
          'Lesson 18. Nothing but, Only / -밖에 + 부정형',
        grammarPoint:
          'Limited quantity with -밖에 + negative',
        description:
          'Use -밖에 with a negative verb to mean “only” or “nothing but” in a limiting way. Example: 물 한 잔밖에 없어요.',
      },
      {
        id: '3-19',
        title:
          'Lesson 19. After -ing / 다음에, 후에, 뒤에',
        grammarPoint:
          'Expressing “after doing” with 다음에/후에/뒤에',
        description:
          'Use 다음에, 후에, or 뒤에 after a time or action to mean “after”. Example: 수업 후에 만나요., 밥 먹은 다음에 공부할 거예요.',
      },
      {
        id: '3-20',
        title:
          'Lesson 20. Even if, Even though / -아/어/여도',
        grammarPoint:
          'Expressing concession with -아/어/여도',
        description:
          'Attach -아/어/여도 to a verb to mean “even if/even though”. Example: 비가 와도 갈 거예요.',
      },
      {
        id: '3-21',
        title:
          'Lesson 21. Linking Verbs / -(으)ㄴ/는데',
        grammarPoint:
          'Background, contrast, and softening with -(으)ㄴ/는데',
        description:
          'Use -(으)ㄴ데 (past/descriptive) or -는데 (present/action) to give background, show contrast, or soften a statement. Example: 지금 바쁜데 나중에 전화할게요.',
      },
      {
        id: '3-22',
        title:
          'Lesson 22. Maybe I might… / -(으)ㄹ 수도 있어요',
        grammarPoint:
          'Expressing possibility with -(으)ㄹ 수도 있어요',
        description:
          'Attach -(으)ㄹ 수도 있어요 to a verb to say something is possible or might happen. Example: 늦을 수도 있어요.',
      },
      {
        id: '3-23',
        title:
          'Lesson 23. Word Builder 1 / 학(學)',
        grammarPoint:
          'Building vocabulary with 학(學)',
        description:
          '학(學) is a Sino-Korean root related to learning and studying. It appears in words like 학교, 학생, and 과학.',
      },
      {
        id: '3-24',
        title:
          'Lesson 24. Irregulars: 르 / 르 불규칙',
        grammarPoint:
          '르 irregular verbs (르 불규칙)',
        description:
          'In 르 irregular verbs, an extra ㄹ is added and the vowel changes with certain endings. Example: 모르다 → 몰라요, 다르다 → 달라요.',
      },
      {
        id: '3-25',
        title: 'Lesson 25. Verb Ending / -네요',
        grammarPoint:
          'Expressing surprise or realization with -네요',
        description:
          'Use -네요 to show your reaction, surprise, or new realization about something. Example: 날씨가 좋네요.',
      },
      {
        id: '3-26',
        title:
          'Lesson 26. Irregulars: ㄷ / ㄷ 불규칙',
        grammarPoint:
          'ㄷ irregular verbs (ㄷ 불규칙)',
        description:
          'Some ㄷ-final verbs change ㄷ to ㄹ before a vowel. Example: 듣다 → 들어요, 걷다 → 걸어요.',
      },
      {
        id: '3-27',
        title:
          'Lesson 27. Politeness Levels / 반말 and 존댓말',
        grammarPoint:
          'Informal vs polite speech: 반말 and 존댓말',
        description:
          'Korean has different politeness levels. 반말 is casual speech with close friends or younger people, while 존댓말 is polite speech used in most formal or respectful situations.',
      },
      {
        id: '3-28',
        title:
          'Lesson 28. “Let’s” in Casual Language / -자 (반말, 청유형)',
        grammarPoint: 'Casual “let’s” with -자',
        description:
          'Attach -자 to a verb stem in 반말 to suggest doing something together casually. Example: 같이 가자., 밥 먹자.',
      },
      {
        id: '3-29',
        title:
          'Lesson 29. Irregulars: ㅅ / ㅅ 불규칙',
        grammarPoint:
          'ㅅ irregular verbs (ㅅ 불규칙)',
        description:
          'In some verbs, the final ㅅ disappears before a vowel ending. Example: 짓다 → 지어요, 낫다 → 나아요.',
      },
      {
        id: '3-30',
        title:
          'Lesson 30. Word Builder 2 / 실(室)',
        grammarPoint:
          'Building vocabulary with 실(室)',
        description:
          '실(室) is a Sino-Korean root meaning “room” or “chamber”. It appears in words like 교실, 사무실, and 병실.',
      },
    ],
  },
];
