# Singly Linked List

Create a Stack and Queue classes with some specs

## Challenge

### Stack:

1. Add a new node with that value to the top of the stack with an O(1) Time performance.
2. Returns the value from node from the top of the stack.
3. Returns the value of the node located at the top of the stack.

### Queue:

1. adds a new node with that value to the back of the queue with an O(1) Time performance.
2. Removes the node from the front of the queue
3. Returns the value of the node located at the front of the queue

## Approach & Efficiency

### Stack:

- pushItem: As the linked List already have an append method we're going to use it. If you want to have a complexity of O(1) you can simply trace the tail of the linked list and remove it, but in this case we are using a O(n) time complexity.

- Peek method: It has the space and time complexity of O(1).

- Pop method: It has the space and time complexity of O(n).

- Is Empty method: It has the space and time complexity of O(1).

### Queue:

- Enqueue method: As the linked List already have an append method we're going to use it. If you want to have a complexity of O(1) you can simply trace the tail of the linked list and remove it, but in this case we are using a O(n) time complexity.

- Dequeue method: It has the space and time complexity of O(1).

- Peek method: It has the space and time complexity of O(1).

- Is Empty method: It has the space and time complexity of O(1).

## API

### Stack:

- pushItem: As the linked List already have an append method we're going to use it.

- peek method: We'll return the top property.

- Pop method: We'll loop through the linked List until we reach the last node and simply change it to null.

- Is Empty: we'll check the head if it's empty we'll return true.

### Queue:

- Enqueue: As the linked List already have an append method we're going to use it.

- peek method: We'll return the head value or null if empty.

- Dequeue method: We'll change the head value to null and move the pointer of the linked list to the next value.

- Is Empty: we'll check the head if it's empty we'll return true.
