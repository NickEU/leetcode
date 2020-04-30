'use strict';
// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */

// REALLY bad solution

const addTwoNumbers = function(l1, l2) {
  function traverseList(list) {
    const result = [];
    while (list !== null) {
      result.push(list.val);
      list = list.next;
    }
    return result;
  }

  const firstNumberArr = traverseList(l1);
  const secondNumberArr = traverseList(l2);
  const resultArr = [];
  let lead, lesser;

  if (firstNumberArr.length < secondNumberArr.length) {
    lead = secondNumberArr;
    lesser = firstNumberArr;
  } else {
    lead = firstNumberArr;
    lesser = secondNumberArr;
  }
  console.log(lead, lesser);
  for (let i = 0; ; i++) {
    while (lesser[i] !== undefined) {
      let nbr = lead[i] + lesser[i];
      if (nbr >= 10) {
        if (lead[i + 1] === undefined) {
          lead[i + 1] = 1;
        } else {
          lead[i + 1] += 1;
        }
        nbr -= 10;
      }
      resultArr.push(nbr);
      i++;
    }

    if (i >= lead.length) {
      break;
    }
    if (lead[i] >= 10) {
      if (lead[i + 1] === undefined) {
        lead[i + 1] = 1;
      } else {
        lead[i + 1] += 1;
      }
      lead[i] -= 10;
    }
    resultArr.push(lead[i]);
  }

  class LinkedList {
    constructor(value) {
      this.val = value;
      this.next = null;
    }

    append(value) {
      let head = this;
      while (head.next !== null) {
        head = head.next;
      }

      const newNode = {
        val: value,
        next: null
      };

      head.next = newNode;
    }
  }

  const myLinkedList = new LinkedList(resultArr[0]);

  for (let i = 1; i < resultArr.length; i++) {
    myLinkedList.append(resultArr[i]);
  }

  return myLinkedList;
};
