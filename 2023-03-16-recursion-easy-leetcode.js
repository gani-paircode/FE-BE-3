https://leetcode.com/problems/fibonacci-number/description/

// 70+ ms time taken
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n === 0) return 0;
    if (n <= 2) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
};

// 53+ ms time taken
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    const f = [0, 1];
    for (i = 2; i <= n; i++) {
        f[i] = f[i - 1] + f[i - 2];
    }

    return f[n];
};



// 53+ ms time taken
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let a = 0, b = 1, c;
    if (n <= 1) return n;
    for (i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

// 40ms + ms time taken
/**
 * @param {number} n
 * @return {number}
 */

const f = [
    0,
    1,
    1,
    2,
    3,
    5,
    8,
    13,
    21,
    34,
    55,
    89,
    144,
    233,
    377,
    610,
    987,
    1597,
    2584,
    4181,
    6765,
    10946,
    17711,
    28657,
    46368,
    75025,
    121393,
    196418,
    317811,
    514229,
    832040
];

var fib = function (n) {
    return f[n];
};
