/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let i = l1, j = l2, k = 0;
  let c = 0;
  let ans = new ListNode(0);
  let head = ans;

  while (i !== null || j !== null) {
    let val1 = i !== null ? i.val : 0;
    let val2 = j !== null ? j.val : 0;

    let sum = val1 + val2 + c;
    let rem5 = sum % 10;
    c = Math.trunc(sum / 10);

    ans.next = new ListNode(rem5);
    ans = ans.next;

    if (i !== null) i = i.next;
    if (j !== null) j = j.next;
    k++;
  }

  if (c > 0) {
    ans.next = new ListNode(c);
  }

  return head.next;
};