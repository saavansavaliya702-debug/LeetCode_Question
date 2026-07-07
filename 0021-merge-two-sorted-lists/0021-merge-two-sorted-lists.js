/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
let merge = new ListNode(0)
let i = list1, j = list2, k = merge

while(i !== null && j !== null){
    if(i.val < j.val){
        k.next = i
        i = i.next
    }else{
        k.next = j
        j = j.next
    }
    k = k.next
}
while(j !== null){
    k.next = j
    j = j.next
    k = k.next
}
while(i !== null){
    k.next = i
    i = i.next
    k = k.next
}
return merge.next
};