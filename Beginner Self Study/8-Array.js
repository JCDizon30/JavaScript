/*Arrays
        - Another type of value
        - Represents a list of values
        - List of value
       */
const myArray = [10, 20, 30];
console.log(myArray);

        /*
        - To get specific value in array
        - Access the value in array
        - Index 0 means the first value
        */
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);

        // Change The Value in array
myArray[0] = 99;
console.log(myArray);

        /*
        - We can put any value inside the array like: int, float, string, boolean, obeject, array
        - Array itself is also value, that means we can save as a varibales or even save it in a array
        - Array is an a special object
        */
[1, "hello", true, { name: "sock" }, [1, 2]];
console.log(typeof [1, 2]);
console.log(Array.isArray([1, 2]));

        // Array have properties and methods we can use
        // Useful property in Array the (.leght)
console.log(myArray.length);
        // Useful method in Array
        // .push = Adds a value to the end of the array
myArray.push(100);
console.log(myArray);
        // .splice = Remove a value from an array
myArray.splice(0, 2);
console.log(myArray);
