class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

var Trie = function() {
  this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let current = this.root;

  for(let c of word) {
    if(!current.children[c])
      current.children[c] = new TrieNode();
    current = current.children[c];
  }

  current.endOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let current = this.root;

  for(let c of word) {
    if(!current.children[c]) return false;
    current = current.children[c];
  }

  return current.endOfWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let current = this.root;

  for(let c of prefix) {
    if(!current.children[c]) return false;
    current = current.children[c];
  }

  return true;  
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */