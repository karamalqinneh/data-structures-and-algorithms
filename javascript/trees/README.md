# Trees

Create a binary tree class with reqiured methods.

## Challenge

Create a binary tree class that can traversed through the three methods of the depth first approach. Also extend a binary search tree that should have a method for adding new nodes nad checking if the node exits in the tree.

## Approach & Efficiency

- Pre-Order: This method have time and space complexity of O(n) as you'll have to get through the whole tree to append the values.

- In-Order: This method have time and space complexity of O(n) as you'll have to get through the whole tree to append the values.

- Post-Order: This method have time and space complexity of O(n) as you'll have to get through the whole tree to append the values.

- Add: This method have time complexity of O(log(n)) and space complexity of O(1).

- Contains: This method have time complexity of O(n^2) as you'll have to loop through the array to find the value while also iterating recursevily through the tree to add the values and space complexity of O(1)

## API

- Depth first methods: We'll be using a recusrsice approach with these methods, they all follow the same approach of traversing but the sequence is the only thing that's changing. Fisrt we'll check if the root is empty if not we'll call the method again with the left node and again with the right node while also pushing the current root value to the array, you only need to change the sequence of the code for different approaches.

- Add: We'll check if the root is empty and if it's we'll make the value as the new root. If the root is not emtpy we'll check for two main things, if the value is less than or bigger than the root value to determine if it's a left or a right node. Lets say it's a left node we'll then check if the left value is null then if ain't we'll call the function again until we reach the null value.

- Contains: After traversing the array we'll use the indexOf method on the resulting array.
