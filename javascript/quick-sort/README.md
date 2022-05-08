# Quick Sort

create a sorting algorithm that uses comparison-based sorting.

## Whiteboard Process

![Whiteboard](./assets/merge-sort.jpg)

## Approach & Efficiency

Insertion Sort: The basic operation of this algorithm is recursion and looping. This will happen n^2 number of times in the worst case such as the pivot being the last element and being also the bigger one, concluding the algorithm to be n^2 squared. Additional space is being created in each recusrion. We'll be creating new arrays so the space complexity will be O(n).

## Solution

Insertion Sort: we need to choose a random pivot to start sorting from it we'll take the last element in this case.
we need two arrays that contains all the values on the left of the pivot and the right of it. we'll loop through the array and push the values bigger than the pivot to right array and to the left if smaller. now we'll check the length of both left and right arrays if they are bigger that zero we'll return a destructred array that contains a recursive call to the fuction passing the left + the pivot + aother recursive call to the right. there is two other cases if the lengths are not equal to zero the first one is only the left is bigger in this case we'll return a recusrive call of the left array + pivot, the other case we'll return the pivot + call the function on the right array.
