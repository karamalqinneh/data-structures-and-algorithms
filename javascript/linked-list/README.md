# Singly Linked List

Create a Singly Linked List class with some specs

## Challenge

1. Insert a node at the start.
2. Check if the value exists in the linked list.
3. Render all the node data.

## Approach & Efficiency

- insert method: time and space complexity are O(1) as that's the added value of using linked lists. If this was an array the complexity would be O(n) as you'll have to loop over the array to shift the values.

- include method: The time complexity is O(n) as we'll have to loop through the list to check all the values, this will also mean that the space complexity is O(n).

- toString method: The time complexity is O(n) as we'll have to loop through the list to check all the values and add them to the output, this will also mean that the space complexity is O(n).

## API

- insert method: The added value of using linked lists is that you don't have to shift the elements you'll only need to change the head to the newly added node and let the next node point to the previous head.

- include method: We'll have to loop through the list to check all the values.

- toString method: We'll have to loop through the list to check all the values and add them to the output after the iterations are done log the output to the console.
