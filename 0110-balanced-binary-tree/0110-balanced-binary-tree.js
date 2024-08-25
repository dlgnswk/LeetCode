/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) return true;

  function checkDepth(node, depth = 0) {
    if (!node) return depth;

    return Math.max(checkDepth(node.right,depth+1), checkDepth(node.left,depth+1));
  };
	
  return isBalanced(root.right) && isBalanced(root.left) && Math.abs(checkDepth(root.right) - checkDepth(root.left)) <= 1
};