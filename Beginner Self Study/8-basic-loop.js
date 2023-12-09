/*Loops
        - Let us run some code over and over
      */

      // While Loop
      // - Non-standard loop
      // - If the coditon is true the code will continue in running, if false the code is going to stop running.
      // - Increment step, make sure that the loop ends at some point, without this increment step the loop will keep running forever.
let i = 1;
    while (1 <= 5) {
    console.log(i);
    i++;
}

      //For Loop
      // - Standard loop
      // - Shorter version of while loop
      // - Inside the bracket  we're going to type 3 pieces of cede.
          // first, the loop variable
          // second, the loop condition
          // third, the increment step
for (let i = 1; i <= 5; 1++) {
    console.log(i);
}

      //Example - Generate random numbers until one that's at least 0.5
      //This code is Non-Standard Loop, so we use while loop
          // - Because it doesn't really have a loop variable that we increase every time.
          // - Also doesn't not have increment step
let ranNum = 0;
while (ranNum < 0.5) {
    ranNum = Math.random();
}
console.log(ranNum);