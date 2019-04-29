function isPalindromes(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
    if (str[i] !== str.slice(str.length - i - 1, str.length - i)) return false;
  }
  return true;
}

module.exports = isPalindromes;
