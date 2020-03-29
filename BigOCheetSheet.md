# Big O Cheat Sheet 
-----------------------------
## BIG 0s
>Constant no loops
- O(log N) Logarithmic
>usually searching algorithms have log n if they are sorted (Binary Search)
- O(n) Linear
>for loops, while loops through n items
- O(n log(n)) Log Liniear
>usually sorting operations
- O(n^2) Quadratic
>every element in a collection needs to be compared to ever other element. Two nested loops
- O(2^n) Exponential
>recursive algorithms that solves a problem of size N
-O(n!) Factorial
>you are adding a loop for every element <br>

**Iterating through half a collection is still O(n)<br>
Two separate collections: O(a * b)** <br>

## What can cause time in a function?
Operations (+, -, *, /) <br>
Comparisons (<, >, ==) <br>
Looping (for, while) <br>
Outside Function call (function()) <br>

## Rule BookRule <br>
**Rule 1** Always worst Case<br>
**Rule 2** Remove Constants <br>
**Rule 3** Different inputs should have different variables. O(a+b). A and B arrays nested would be
O(a*b)
``` javascript
+ for steps in order
* for nested steps 
```

**Rule 4** Drop Non-dominant terms
## WHAT CAUSES SPACES COMPLEXITIY 
- Variables
- Data Structures
- Function Call
- Allocations*

