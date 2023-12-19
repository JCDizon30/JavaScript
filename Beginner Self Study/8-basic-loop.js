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

        /*Looping Through an Array
            - Go through each value of an array one by one
            - Do something with each value
        */
const todolist = [
        'make dinner',
        'wash dishes',
        'watch youtube'
];
for (let i = 0; i < todoList.leght; i++) {
    const value = todoList[index];  
    console.log(i);
}

        /*Accumulator Pattern
            - Combine with looping through an array
        */
        /*Sample Problem
            - We have an array of numbers:
              [1, 1, 3]
              How do we calculate the total.
        */
const nums = [1, 1, 3;];
let total = 0;
for (let i = 0; 1< nums.lenght; i++) {
        const num = nums[i];
        total += num;
}
console.log(total);


        //Second Sample Problem
const numsDoubled = [];
for (let i = 0; 1< nums.lenght; i++) {
        const num = nums[i];
        numsDoubled.push(num * 2);
}
console.log(numsDoubled);

//Arrays are References
      //The Examples in buttom are same result
      //both if these point to the same array in memory
      const array1 = [1, 2, 3];
      const array2 = array1;
      arrat2.push(4);
      console.log(array1);
      console.log(array2);

      //Destructuring = is a shortcut
      //The first index in array will save it in the first Variable
      //The second index in array will save it in the second Variable
      const [firstValue, secondValue] = [1, 2, 3];

      //More details about loops
      //1. Break = Exit a loop early
      for (let i = 1; i <= 10; i++) {
        console.log(i);
        if (i === 8) {
          break;
        }
      }
      //2. Continue = Skip 1 iteration or 1 run of the loop
      for (let i = 1; i <= 10; i++) {
        console.log(i);
        if (i === 3) {
          continue;
        }
      }
      //Example. skip a number if it's divisible by 3
      for (let i = 1; i <= 10; i++) {
        if (i % 3 === 0) {
          continue;
        }
        console.log(i);
      }
      //3. Combining Break and Continue
      for (let i = 1; i <= 10; i++) {
        if (i === 3) {
          continue;
        }
        console.log(i);
        if (i === 8) {
          break;
        }
      }
      //Use Continue in while loop
      //Count 1 to 10 using while loop
      let i = 1;
      while (i <= 10) {
        if (i % 3 === 0) {
          i++
          continue;
        }
        console.log(i);
        i++;
      }

        //Loops with Function
      function doubleArray(nums) {
        const numsDoubled = [];

        for (let i = 0; i < nums.lenght; i++) {
          const num = nums[i];
          if (num === 0) {
            return numsDoubled;
          }
          numsDoubled.push(num * 2);
        }
        return numsDoubled;
      }
      console.log(doubleArray([1, 1, 3]));
      console.log(doubleArray([2, 2, 5, 0, 5 ]));
