/*Write sufficient test cases and test this solution */
const winningPairs = [
 // row
 [0, 1, 2],
 [3, 4, 5],
 [6, 7, 8],

 // diagonal
 [0, 4, 8],
 [2, 4, 6],

 // column
 [0, 3, 6],
 [1, 4, 7],
 [2, 5, 8],
];

const GameStatus = {
 Start: "Yet to Start",
 Tie: "Tie",
 On: "Game is On",
 O: "O win",
 X: "X win",
 Invalid: "Invalid state of the game",
};

/* values is 1D array, it has 9 strings. each string can be one of these "" | "X" | "O" */
function getGameStatus(values) {
 const counts = {
   X: 0,
   O: 0,
   "": 0,
 };

 for (let i = 0; i < 9; i++) {
   counts[values[i]]++;
 }

 if (counts[""] === 9) {
   return GameStatus.Start;
 }
 
 if (counts.X !== counts.O) {
   /* at a given point of time count of X will be 1 more than count of O, or reverse
    if this is not the case then it's invalid state
  */
   const validCount = counts.X === counts.O + 1 || counts.O === counts.X + 1;
   if (validCount === false) {
     return GameStatus.Invalid;
   }
 }

 const winners = [];
 for (let i = 0; i < winningPairs.length; i++) {
   const [a1, a2, a3] = winningPairs[i];
   let winner =
     values[a1] === values[a2] &&
     values[a2] === values[a3] &&
     values[a1] !== ""
       ? values[a1]
       : "";
   if (winner) {
     winners.push(values[a1]);
   }
 }

 // If more than 1 player is winner then it's invalid status
 if (winners.length > 1) {
  return GameStatus.Invalid;
 }

 if (winners[0]) {
  return winners[0];
 }

 const temp = counts.X + counts.O;
 if (temp === 9) {
   return GameStatus.Tie;
 }

 return GameStatus.On;
}

const testCases = [
 {
   state: ["", "", "", "", "", "", "", "", ""],
   out: GameStatus.Start,
 },
 {
   state: ["X", "", "", "O", "X", "O", "", "", "X"],
   out: GameStatus.X,
 },
 {
   state: ["X", "X", "X", "O", "O", "", "", "", ""],
   out: GameStatus.X,
 },
 {
   state: ["X", "X", "", "O", "O", "O", "", "", "X"],
   out: GameStatus.O,
 },
 {
   state: ["X", "X", "", "O", "", "O", "", "", ""],
   out: GameStatus.On,
 },
 {
   state: ["X", "O", "X", "X", "O", "X", "O", "X", "O"],
   out: GameStatus.Tie,
 },
 {
   state: ["O", "O", "O", "X", "", "", "", "", ""],
   out: GameStatus.Invalid,
 },
 {
  state: ["O", "O", "O", "X", "X", "X", "", "", ""],
  out: GameStatus.Invalid,
},
];

function getTicTacText(values) {
 let str = "";
 for (let i = 0; i < values.length; i++) {
   str = str + (values[i] ? values[i] : "_") + ' ';
   if ([2, 5].includes(i)) {
     str = str + "\n";
   }
 }
 return str;
}

testCases.forEach(function (cass) {
 const { state, out } = cass;
 const rec = getGameStatus(state);
 console.log(
   `${getTicTacText(state)}\nexpected - ${out} - received - ${rec} - ${
     rec === out ? "PASSED" : "NOT PASSED"
   }\n\n`
 );
});
