export const getMatchCount = (text, matcher) => {
  const textSet = new Set(text.split(''));
  const matcherSet = new Set(matcher.split(''));
  return [ ...textSet ].filter(lettter => matcherSet.has(lettter)).length;
};

export const matchWords = (a, b) => {
  const left = new Set(a);
  const right = new Set(b);
  const union = new Set();

  right.forEach((r) => {
    left.forEach((l) => {
      if (l === r) {
        union.add(l);
      }
    });
  });

  return union.size;
};
