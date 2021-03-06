# Group-Array-Elements

Grouping Array Elements into chunks of size N

# Assignment

Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N
equally sized arrays.
Where the size of the original array cannot be divided equally by N, the final part should have a length equal
to the remainder.

Example pseudo-code:

```
groupArrayElements([1, 2, 3, 4, 5], 3);
// [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
```

# Solution

A simple javascript function `groupArrayElements()` that can run on any node.js environment

To run it on browser, follow these steps -
1. Open a browser
2. Right click from mouse in the center of the browser and open 'Inspect' options
3. Open console tab in the inspect window
4. Copy all code from index.js and paste it there
5. Hit 'Enter' and you will see the results

To run it on backend, follow these steps - 
1. Install Node.js on your computer
2. Download the code
3. Open any command prompt and point to the `Group-Array-Elements` folder
4. Run `npm start` or `node index.js` and you will see the results

# Explanation

What we are doing here is -
1. We are running a loop over the input array
2. We are creating a temporary array by pushing elements from the input array into it.
3. As soon as the temporary array becomes equal to the chunk size we want, we will push it into the output array and reset the temporary array.
4. A special case, when the input array reaches end and the temporary array has not reached the chunk size, we consider it as last chunk and still push onto the output array.
