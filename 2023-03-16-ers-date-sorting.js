const hobbies = [
    { id: "HB__001", name: "Reading" },
    { id: "HB__002", name: "Music" },
    { id: "HB__003", name: "Travelling" },
    { id: "HB__004", name: "Painting" },
    { id: "HB__005", name: "Singing" },
    { id: "HB__006", name: "Botany" },
];

const cities = [
    { id: "CT__001", name: "Rajkot" },
    { id: "CT__002", name: "Surat" },
    { id: "CT__003", name: "Ahmedabad" },
    { id: "CT__004", name: "Baroda" },
    { id: "CT__005", name: "Kim" },
    { id: "CT__006", name: "Sachin" },
];

const skills = [
    { id: "SK__001", name: "PHP" },
    { id: "SK__002", name: "DS/PS" },
    { id: "SK__003", name: "React JS" },
    { id: "SK__004", name: "Flutter" },
    { id: "SK__005", name: "Swift" },
    { id: "SK__006", name: "Objective C" },
    { id: "SK__007", name: "Node JS" },
];

const ers = [
    {
        id: "EM__001",
        name: "Raj",
        city: "CT__001",
        hobbies: ["HB__003", "HB__001"],
        skills: ["SK__003", "SK__004", "SK__002"],
    },
    {
        id: "EM__002",
        name: "Mit",
        city: "CT__005",
        hobbies: ["HB__002", "HB__006", "HB__001"],
        /*    skills: [], */
    },
    {
        id: "EM__003",
        name: "Shri",
        city: "CT__006",
        hobbies: ["HB__005", "HB__003", "HB__006"],
        skills: ["SK__003", "SK__004"],
    },
    {
        id: "EM__004",
        name: "Om",
        city: "CT__003",
        /* hobbies: [], */
        skills: ["SK__001", "SK__004", "SK__006"],
    },
    {
        id: "EM__005",
        name: "Anu",
        city: "CT__001",
        hobbies: ["HB__001", "HB__004", "HB__002"],
        /*    skills: [], */
    },
    {
        id: "EM__006",
        name: "Nil",
        city: "CT__002",
        hobbies: ["HB__001", "HB__003"],
        skills: ["SK__001", "SK__006"],
    },
    {
        id: "EM__007",
        name: "Ved",
        city: "CT__001",
        /* hobbies: [], */
        skills: ["SK__005", "SK__001", "SK__002"],
    },
    {
        id: "EM__008",
        name: "Aman",
        city: "CT__006",
        /* hobbies: [], */
        skills: ["SK__003", "SK__006"],
    },
    {
        id: "EM__009",
        name: "Kunal",
        city: "CT__002",
        /* hobbies: [], */
        skills: ["SK__004"],
    },
    {
        id: "EM__010",
        name: "Namit",
        city: "CT__005",
        /* hobbies: [], */
        skills: ["SK__005", "SK__001", "SK__002"],
    },
];

/* Enhancing the scope of the problem, we have 2 more arrays like following */
const projects = [
    { id: "PR__001", name: "Jio music app" },
    { id: "PR__002", name: "RIL firewall" },
    { id: "PR__003", name: "Gana app" },
    { id: "PR__004", name: "Wakefit mobile site" },
];
const projectsEmployee = [
    { projectId: "PR__001", employees: ["EM__001", "EM__002", "EM__009"] },
    { projectId: "PR__002", employees: ["EM__004", "EM__005"] },
    { projectId: "PR__003", employees: ["EM__001", "EM__007", "EM__004"] },
    { projectId: "PR__004", employees: ["EM__007", "EM__001", "EM__010"] },
];

ers[0].joiningDate = '31-December-2021';
ers[1].joiningDate = '5-March-2021';
ers[2].joiningDate = '6-July-2022';
ers[3].joiningDate = '12-December-2021';
ers[4].joiningDate = '16-December-2021';
ers[5].joiningDate = '28-December-2021';
ers[6].joiningDate = '7-March-2021';
ers[7].joiningDate = '17-March-2023';
ers[8].joiningDate = '17-March-2021';
ers[9].joiningDate = '27-December-2021';


ers[0].birthDate = '25-December-2001';
ers[1].birthDate = '15-March-2001';
ers[2].birthDate = '16-July-2002';
ers[3].birthDate = '12-December-2003';
ers[4].birthDate = '16-December-2003';
ers[5].birthDate = '28-December-2001';
ers[6].birthDate = '7-March-2001';
ers[7].birthDate = '17-March-1990';
ers[8].birthDate = '17-March-1998';
ers[9].birthDate = '27-December-1999';

const ersDate = ers.map(function (e) {
    const { id, name, joiningDate, birthDate } = e;
    return { id, name, joiningDate, birthDate };
});

const config1 = [
    {
        key: 'joiningDate',
        order: 'DESC'
    }
];

printLine(`${config1[0].key} - ${config1[0].order}`);
console.table(ersDate.sort(getCustomDateSortFunction(config1)));

config1[0].order = 'ASC';
printLine(`${config1[0].key} - ${config1[0].order}`);
console.table(ersDate.sort(getCustomDateSortFunction(config1)));

config1[0].order = 'ASC';
config1[0].key = 'birthDate'
printLine(`${config1[0].key} - ${config1[0].order}`);
console.table(ersDate.sort(getCustomDateSortFunction(config1)));


config1[0].order = 'DESC';
printLine(`${config1[0].key} - ${config1[0].order}`);
console.table(ersDate.sort(getCustomDateSortFunction(config1)));


/* helper functions starts here */

function printLine(word) {
    console.log(`\n---------------- ${word} ----------------`);
}

/* without using Date class */
function getDateInStr(dateStr) {
    const parts = dateStr.split('-');
    const month = getM(parts[1]);
    let day = parts[0];
    day = day.length === 1 ? `0${day}` : day;
    return `${parts[2]}-${month}-${day}`;
}

function getM(str) {
    if (str === "January") {
        str = "01"
    } else if (str === "February") {
        str = "02"
    } else if (str === "March") {
        str = "03"
    } else if (str === "April") {
        str = "04"
    } else if (str === "May") {
        str = "05"
    } else if (str === "June") {
        str = "06"
    } else if (str === "July") {
        str = "07"
    } else if (str === "August") {
        str = "08"
    } else if (str === "September") {
        str = "09"
    } else if (str === "October") {
        str = "10"
    } else if (str === "November") {
        str = "11"
    } else if (str === "December") {
        str = "12"
    }
    return str
}

function getCustomDateSortFunction(sortConfig) {
    function customSort(emp1, emp2) {
        let i = 0;
        while (i < sortConfig.length && emp1[sortConfig[i].key] === emp2[sortConfig[i].key]) {
            i++;
        }
        if (i >= sortConfig.length) {
            return 0;
        }
        const { key, order } = sortConfig[i];
        /* you can sort using  getDateInStr function or using getTime function */
        // const date1 = getDateInStr(emp1[key]);
        // const date2 = getDateInStr(emp2[key]);
        const date1 = new Date(emp1[key]).getTime();
        const date2 = new Date(emp2[key]).getTime();

        if (order === 'ASC') {
            return sortPrimitiveAsc(date1, date2);
        }
        return sortPrimitiveDesc(date1, date2);
    }
    return customSort;
}


function sortPrimitiveAsc(n1, n2) {
    let temp = 0;
    if (n1 > n2) {
        temp = 1;
    } else if (n1 < n2) {
        temp = -1;
    }
    return temp;
}

function sortPrimitiveDesc(n1, n2) {
    let temp = 0;
    if (n1 > n2) {
        temp = -1;
    } else if (n1 < n2) {
        temp = 1;
    }
    return temp;
}
