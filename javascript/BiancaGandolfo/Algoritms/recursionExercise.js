// looping with for
function loopNumber(number) {
  while (number) {
    console.log(number);
    number = number - 1;
  }
}

//loopNumber(10);

//Recursion version

function recursionLoopNubmer(number) {
  if (number === 0) {
    return "done";
  }
  console.log(number);
  return recursionLoopNubmer(number - 1);
}

// console.log(recursionLoopNubmer(10));

// Exponent loop version

function exponentLoop(base, expo) {
  var result = base;
  while (expo - 1) {
    result = result * base;
    expo = expo - 1;
  }
  return result;
}

//console.log(exponentLoop(2, 5));

function recursionExponent(base, exp) {
  var result = base;
  if (exp === 1) {
    return base;
  } else {
    return result * recursionExponent(base, exp - 1);
  }
}

// console.log(recursionExponent(2, 1));

// Recursive multiplier

function recursionMultiplier(arr, num) {
  if (arr.length === 0) {
    return arr;
  } else {
    var last = arr.pop();
    recursionMultiplier(arr, num);
  }
  arr.push(last * num);
  return arr;
}

console.log(recursionMultiplier([1, 2, 3], 2));
