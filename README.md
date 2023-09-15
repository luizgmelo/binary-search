# Binary Search And Selection Sort

# What is Binary Search?
- Is an Algorithm for finding the position of a number (target) in an array
- Complexity: O(logn)
- Binary Search needs an array sorted and the number it will find the position, this takes the
middle element and compares it with the target, if the middle element is lower than the target
the left part of array is ignore (left = middle + 1), else if middle element is greater than the 
target the right part of array is ignore (right = middle - 1), until find the element,
if this element isn't find, the left position in the array is greater than right (because left = middle + 1), so this 
function returns -1, otherwise it finds the position of the element and returns.

# What is a Selection Sort?
- Is a Algorithm for sort a list.
- Complexity: O(n²)
- Selection sort consists in read a list and create another
list to add elements in order.

## Be freedom to contribute and made your own binary search with your favorite language programming 
- Fork this and send a pull request
