Shamir's Secret Sharing Polynomial Solver
This JavaScript project calculates the constant term c of a polynomial using Lagrange Interpolation. The input consists of points in various numeric bases, provided in a JSON format.

How to Run
Modify Input: Update the data object in the script with your own input values:

javascript
Copy code
const data = {
    "keys": {
        "n": 9,
        "k": 6
    },
    "1": {
        "base": "10",
        "value": "28735619723837"
    },
    // Add more points here
};
Run the Code: Open a terminal and run:

bash
Copy code
node <filename>.js
Replace <filename> with your file name.

Output: The terminal will print the calculated constant term c.
