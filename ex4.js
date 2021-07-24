 /**
  * 4. Resolver o problema FizzBuzz em JavaScript (https://en.wikipedia.org/wiki/Fizz_buzz)
  */


var number = 0;

while (number <= 10) {
    if ((number % 3) == 0 || (number % 5) == 0) {
        if ((number % 3) == 0 && (number % 5) == 0) {
            console.log("FizzBuzz");
        }
        else if (number % 3 == 0 && (number % 5) !== 0) {
            console.log("Fizz");
        }
        else if ((number % 5) == 0 && (number % 3) !== 0) {
            console.log("Buzz");
        }
    }
    else {
        console.log(number);
    }
    number = number + 1;
}