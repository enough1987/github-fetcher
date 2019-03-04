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
