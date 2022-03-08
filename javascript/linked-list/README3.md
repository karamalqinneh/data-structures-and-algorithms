# Singly Linked List

## Challenge

Implement an algorithim that get the value at specified index but start the counting from the end.

## Approach & Efficiency

The time complexity is O(n) as we'll have to loop through the list to find the length of the list, The space complexity is O(1).

## Solution

We'll loop throug the list until we reach the null value while keeping count of the count of the list in the loop. Since we have the loop we can substract the given index from the length of the list, then implement a normal algorithim that gets the value and provide what we found to it.

## Whiteboard Process

![Linked List-kth](./assets/Linked%20List-kth.jpg)
