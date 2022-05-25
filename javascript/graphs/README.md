# Graphs

Create a graph class with some specs

## Challenge

1. add node: This method should add a node to the graph.
2. add edge: This method should adds a new edge between two nodes in the graph.
3. get nodes: This method should return all of the nodes in the graph as a collection.
4. get neighbors: This method should return a collection of edges connected to the given node.
5. size: This method should return the total number of nodes in the graph.

## Approach & Efficiency

- add node method: time and space complexity are O(1) as they don't create anything new in the memory more than once nor they have to itertate over anything.
- add edge method: time and space complexity are O(1) as they don't create anything new in the memory more than once nor they have to itertate over anything.
- get neighbors method: time and space complexity are O(1) as they don't create anything new in the memory more than once nor they have to itertate over anything.
- size method: time and space complexity are O(1) as they don't create anything new in the memory more than once nor they have to itertate over anything.
- get nodes method: The time complexity is O(n^2) as we'll have to loop through the queue while also looping through all the vertex edges, the space complexity is O(n) as we'll be creating a queue to store the vertices in.
