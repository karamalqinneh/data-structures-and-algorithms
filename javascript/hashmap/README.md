# Hashmap

Create a Hashmap class with some specs

## Challenge

1. set: This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
2. get: This method should return value associated with that key in the table.
3. keys: This method should return a collection of keys.
4. contains: This method should return a boolean indicating if the key exists in the table already.
5. hash: This method should return index in the collection for that key.

## Approach & Efficiency

- set method: time and space complexity are O(1) as that's the added value of using hashmaps.

- get method: The time complexity is O(n^2) as we'll have to loop through the list to check all the values, and we'll also have to loop through the object keys in case of a collision this will also mean that the space complexity is O(n).

- contains method: time and space complexity are O(1) as that's the added value of using hashmaps.

-keys method: The time complexity is O(n^3) as we'll have to loop through the list to check all the values, and we'll also have to loop through the object keys in case of a collision while also looping through the hashmap itself to get all the keys this will also mean that the space complexity is O(n).

## API

- insert method: The added value of using linked lists is that you don't have to shift the elements you'll only need to change the head to the newly added node and let the next node point to the previous head.

- include method: We'll have to loop through the list to check all the values.

- toString method: We'll have to loop through the list to check all the values and add them to the output after the iterations are done log the output to the console.

- set method: We'll check if the index(key) doesn't exist in this case we'll create a linked list and append the value but if it the key already exsists we'll apeend the value to the list directly.

- get method: We'll check if the key exsists then we'll loop through the linked list while checking where the index of the key lays in the object stored that's stored in the current node and return the value of it.

- contains method: We'll check if the key exsists and return a boolean.

-keys method: We'll create an array then map through the hashmap and if we find a linked list we'll through it and push all the values to the created array.
