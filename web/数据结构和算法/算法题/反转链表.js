// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

var reverseList = function(head) {
    let p1 = head;
    let p2 = null;
    while(p1){
        const temp = p1.next;
        p2 = p1;
        p1 = temp;
    }
    return p2;
}