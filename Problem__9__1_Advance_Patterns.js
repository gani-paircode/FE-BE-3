/* Problem 9.1 - Advance patterns - 1st and 2nd patterns */
function pattern1(n) {
    let s = 1, e =1;
    const fnX = {
        0: printAsc,
        1: printDesc,
    }
    for (let i = 1; i <= n; i++) {
        if (i > 1) {
            e = e + i;
            s = e - (i - 1);
        }
        fnX[i%2](s, e);
    }
}
pattern1(7);
/*
1 
2 3 
6 5 4 
7 8 9 10 
15 14 13 12 11 
16 17 18 19 20 21 
28 27 26 25 24 23 22
*/

function pattern2(n) {
    let s = 1, e =1, k = 1;
    const fnX = {
        1: printAsc,
        2: printAsc,
        3: printDesc,
        4: printDesc,
    }
    for (let i = 1; i <= n; i++) {
        if (i > 1) {
            e = e + i;
            s = e - (i - 1);
        }
        fnX[k](s, e);
        k++;
        if (k === 5){
            k = 1;
        }
    }
}
console.log("\n----------------------\n");
pattern2(7);
/*
1 
2 3 
6 5 4 
10 9 8 7 
11 12 13 14 15 
16 17 18 19 20 21 
28 27 26 25 24 23 22 
*/
function printAsc(s, e) {
    let str = '';
    for (let i = s; i <= e; i++) {
        str =  str + i + ' ';
    }
    console.log(str);
}

function printDesc(s, e) {
    let str = '';
    for (let i = s; i <= e; i++) {
        str =  i + ' ' +str;
    }
    console.log(str);
}

