class Solution {
  longestKSubstr(s, k) {
    //code here
    let ans = -1,
      i = 0;
    let map = new Map();
    for (let j = 0; j < s.length; j++) {
      map.set(s[j], (map.get(s[j]) ?? 0) + 1);
      if (map.size === k) {
        ans = Math.max(ans, j - i + 1);
      }
      while (map.size > k) {
        map.set(s[i], map.get(s[i]) - 1);
        if (map.get(s[i]) === 0) {
          map.delete(s[i]);
        }
        i++;
      }
    }

    return ans;
  }
}

function longestSubstringWithKUniques() {
  let obj = new Solution();
  return obj.longestKSubstr("aabacbebebe", 3);
}
longestSubstringWithKUniques.run = () => {
  longestSubstringWithKUniques();
};

module.exports = longestSubstringWithKUniques;
