/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    function findRules (string) {
        const anagramObj = {};

        for (let i = 0; i < string.length; i++) {
            if (Object.keys(anagramObj).indexOf(string[i]) === -1) {
                anagramObj[string[i]] = 1;
            } else {
                anagramObj[string[i]] = anagramObj[string[i]] + 1;
            }
        }
        
        return anagramObj;
    }
    
    const sList = findRules(s);
    const tList = findRules(t);

    for (let i = 0; i < s.length; i ++) {
        if (Object.values(sList).length !== Object.values(tList).length || sList[s[i]] !== tList[s[i]]) {
            return false;
        }
    }
    
    return true;
};