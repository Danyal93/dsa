//@ts-check

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
function minWindow(s, t) {
  if (t === "") return "";
  let countT = new Map();
  let windowS = new Map();
  for (let i = 0; i < t.length; i++) {
    countT.set(t[i], (countT.get(t[i]) ?? 0) + 1);
  }
  let have = 0,
    need = countT.size;
  let minLen = Infinity,
    minWindowPointers = [0, - 1];
  let i = 0;
  for (let j = 0; j < s.length; j++) {
    windowS.set(s[j], (windowS.get(s[j]) ?? 0) + 1);
    if (countT.has(s[j]) && windowS.get(s[j]) === countT.get(s[j])) {
      have++;
    }
    while (have === need) {
      if (countT.has(s[i]) && windowS.get(s[i]) === countT.get(s[i])) {
        have--;
      }
      if (j - i + 1 < minLen) {
        minLen = j - i + 1;
        minWindowPointers = [i, j];
      }
      windowS.set(s[i], windowS.get(s[i]) - 1);
      i++;
    }
  }
  return s.slice(minWindowPointers[0], minWindowPointers[1] + 1);
}

function minimumWindowSubstring() {}
minimumWindowSubstring.run = () => {
  minWindow("ADOBECODEBANC", "ABC");
};

module.exports = minimumWindowSubstring;
