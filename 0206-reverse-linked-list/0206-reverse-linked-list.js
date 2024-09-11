/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let reverse = null;
  let current = head;
  
  while (current !== null) {
    let next = current.next;
    current.next = reverse;
    reverse = current;
    current = next;
  }
  
  return reverse;
};