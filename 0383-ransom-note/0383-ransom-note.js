/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const noteList = [...ransomNote];
  const magList = [...magazine];
  
  for (let i = 0; i < ransomNote.length; i++) {
    const val = noteList.shift();
    
    if (magList.indexOf(val) === -1) {
      return false;
    } else {
      magList.splice(magList.indexOf(val), 1);
    }
  }
  
  return true
};