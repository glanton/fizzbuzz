window.onload = function () {

  // take number from alert prompt
  var number = prompt("Please enter a number. Results output to console.")

  // validate number (if not a number or less than 1 default to 1)
  number = parseInt(number);
  if (!number || number < 1) {
    number = 1;
  }

  // count from 1 to the entered number
  for (var i = 1; i <= number; i++) {

    // if a multiple of 3 but not 5 print "Fizz"
    if (i % 3 == 0 && i % 5 != 0) {
      console.log("Fizz");
    // if a multiple of 5 but not 3 print "Buzz"
    } else if (i % 3 != 0 && i % 5 == 0) {
      console.log("Buzz");
    // if a multiple of both 3 and 5 print "FizzBuzz"
    } else if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    // otherwise print the number
    } else {
      console.log(i)
    }
  }
};
