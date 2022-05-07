# Merge Sort

Merge sort is an efficient, general-purpose, and comparison-based sorting algorithm. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output.

## Pseudocode

```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

```

## Trace

Sample Array: `[8,4,23,42,16,15]`

![passes](./assets/merge-sort-passes.png)

In the first three passes the array will be split recursively until each array consists of 1 element, then we'll define a new three pointers to keep track of where we are in each iteration of the while loop, then we'll check the first array pointer with the other pointer and if it's smaller we'll edit the original array using the k pointer and update the smaller index pointer, before going to the next iteration we'll check the length of each array if the the pointer is bigger than the length that means we're finished then we'll just append the values of the non finished array to the original one.

All the other iterations will follow the same logic illustrated. After i reaches the array length you'll have been through all of the array and sorted it.

## Efficency

- Time: O(n^2)
  The basic operation of this algorithm is recursion and looping the pointer. This will happen n \* log(n) number of times…concluding the algorithm to be n \* log(n) squared.
- Space: O(n)
  Additional space is being created in each recusrion. We'll be creating new arrays so the space complexity will be O(n).
