# GIVEN 2 ARRAYS, CREATE A FUNCTION THAT LETS A USER KNOW (TRUE/FALSE) WHETHER THESE TWO ARRAYS CONTAIN ANY COMMON ITEMS

> EXAMPLE:
``` javascript
const array1=['a','b','c','x'];
const array2=['z','y','i'];
//SHOULD RETURN FALSE.
const array1=['a','b','c','x'];
const array2=['z','y','x'];
//SHOULD RETURN TRUE

```

## Solution [Approching from an interview perspective]

#### ASSUMPTIONS
--------
> * Assuming all elements in both array are ordered <br>
> * Assuming both arrays have the same data types <br>
> * Assuming our elements will always be in array <br>
> * No size limit[ Array could get larger ]
#### QUESTIONS TO ASK
--------
> * How large is the array <br>
> * Are we looking for an effecient function? <br>
> * Assuming our elements will always be in array <br>




## APPROACH
-------
#### BRUTE FORCE APPROACH
 The normal approach to this will be to use a nested loop to move through array 1 and 2 and compare element i there is a match we return true or false. [Big O(n^2)]. We want to avoid this.

#### BEST SOLUTION
we can loop through array 1 and create an object of it <br>
then we just loop thtiugh array2 and compare it to the properties of array 1
Big O(n)



