
//Basic syntax of Function
  //Shortcut for the code in the button
  /*ADVANTAGES
    - Easier to read
    - Hoisting = We can calle the funtion, before we create it in the code.
  */
  function greeting() {
    console.log("Hello");
  }
  greeting();

  //Advanced feature of functions
  //Function are values = We can save a function inside a varibale
  //Anything we can do with a values, we can also do with a function
  const num = 2;
  const function1 = function () {
    console.log("Hello2");
  };
  console.log(function1);
  console.log(typeof function1);
  //Running the function inside the variables
  function1();

  //Save a value in an object
  const object1 = {
    num: 2,
    fun: function () {
      console.log("hello3");
    },
  };
  object1.fun();

  //Passing a value into a function
  function display(param) {
    console.log(param);
  }
  display(2);

  //Passing a function into another function
  function run(param) {
    param();
  }
  run(function () {
    console.log("hello4");
  });

  //Practical Examples
  //setTimeout() = feature of javascript, allows us to run a function in the future.
