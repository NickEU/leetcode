/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Runtime: 112 ms, faster than 79.14% of JavaScript online submissions for Add Two Numbers.

// Much better than the first version, still leaves something to be desired.
// Can probably get rid of some of the extra checks?

class LinkedList {
  append(val) {
    let head = this;
    //console.log(head);
    //console.log('inserting ' + val);
    if (head.val === undefined) {
      head.val = val;
      head.next = null;
      return;
    }
    while (head.next !== null) {
      head = head.next;
    }

    head.next = {
      val: val,
      next: null
    };
  }
}

var addTwoNumbers = function(l1, l2) {
  let resultLi = new LinkedList();
  let next = 0;
  while (l1 !== null || l2 !== null) {
    let l1CurrInt, l2CurrInt, tempSum;

    if (l1 !== null) {
      //console.log(l1.val);
      l1CurrInt = l1.val;
      l1 = l1.next;
    }

    if (l2 !== null) {
      //console.log(l2.val);
      l2CurrInt = l2.val;
      l2 = l2.next;
    }

    let getTempSum = function(tempSum) {
      if (tempSum >= 10) {
        tempSum -= 10;
        next = 1;
      }
      return tempSum;
    };

    if (l1CurrInt !== undefined) {
      if (next === 1) {
        next = 0;
        l1CurrInt++;
      }
      if (l2CurrInt !== undefined) {
        tempSum = getTempSum(l1CurrInt + l2CurrInt);
      } else {
        tempSum = getTempSum(l1CurrInt);
      }
    } else {
      if (next === 1) {
        next = 0;
        l2CurrInt++;
      }

      tempSum = getTempSum(l2CurrInt);
    }

    resultLi.append(tempSum);
  }

  if (next === 1) {
    resultLi.append(1);
  }

  //console.log(resultLi);
  return resultLi;
};
