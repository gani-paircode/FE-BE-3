
const isEmptyObj = obj => Object.keys(obj).length === 0;

const getOrder = (prcs) => {
    const obj = {};

    prcs.forEach((ar) => {
        const [firstId, ...rest] = ar;
        if (obj[firstId] === undefined) {
            obj[firstId] = {};
        }

        rest.forEach(id => {
            obj[firstId][id] = id;
            if (obj[id] === undefined) {
                obj[id] = {};
            }
        })
    });

    // console.log(obj);

    function getIndependentProcess() {
        for (const key in obj) {
            if (isEmptyObj(obj[key])) {
                return key;
            }
        }
    }

    function deleteDependency(pid) {
        for (const key in obj) {
            const dependencies = obj[key];
            delete dependencies[pid];
        }
    }
    const order = [];
    
    function process() {
        const processId = getIndependentProcess();
        if (processId) {
            order.push(processId);
            delete obj[processId];
            deleteDependency(processId);
            process();
        }
    }
    process();
    if (isEmptyObj(obj)) {
        return order;
    }
    return "Circular dependency !!";
}
const ex1 = [
    ['p1', 'p5', 'p3'],
    ['p5', 'p3'],
    ['p3']
]

/*
{
    p1: { p5: p5, p3:p3 }
    p3: { },
    p5: { p3: p3 }
}
*/
console.log(getOrder(ex1));


const ex2 = [
    ['p9', 'p4', 'p12'],
    ['p6', 'p12'],
]
/*
{
    p9: { p4:p4, p12: p12 }
    p12: { },
    p4: { },
    p6: { p12: p12 }
}
*/
console.log(getOrder(ex2));

const ex3  = [
    ['p1', 'p2', 'p3'],
    ['p3', 'p1']
];
console.log(getOrder(ex3));




function getFrequency(ar, ele) {
    const index = ar.indexOf(ele);
    return index === -1 ? 0 : (1 + getFrequency(ar.slice(index + 1), ele));
}

const x = [10, 5, 35, 5, 6, 10, 5, 35, 10, 10, 10, 10, 6];
console.log(' 5 => ', getFrequency(x, 5));
console.log(' 6 => ', getFrequency(x, 6));
console.log(' 10 => ', getFrequency(x, 10));
console.log(' 35 => ', getFrequency(x, 35));

/*
 5 =>  3
 6 =>  2
 10 =>  6
 35 =>  2
*/
