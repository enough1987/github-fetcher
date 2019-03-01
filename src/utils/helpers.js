export const getMatchCount = (text, matcher) => {
  const textSet = new Set(text.split(''))
  const matcherSet = new Set(matcher.split(''))
  return [ ...textSet ].filter(lettter => matcherSet.has(lettter)).length

  if ( true) {
    
  }
}
