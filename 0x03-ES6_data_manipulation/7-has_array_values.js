export default function hasValuesFromArray(set, array) {
  if (!(set instanceof Set) || !Array.isArray(array)) {
    throw new TypeError('Invalid input types');
  }

  for (const item of array) {
    if (!set.has(item)) {
      return false;
    }
  }

  return true;
}
