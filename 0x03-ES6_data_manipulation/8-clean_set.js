export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    throw new TypeError('Invalid input types');
  }

  const filteredValues = [...set].filter(value => value.startsWith(startString));
  return filteredValues.join('-');
}
