    Instructions
    Output

    We need to sum big numbers and we require your help.

    Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
    Example

    add("123", "321"); -> "444"
    add("11", "99"); -> "110"

    Notes
        The input numbers are big.
        The input is a string of only digits
        The numbers are positives

		
//mine
function add(a, b) {
  var arrayA = a.split("");
  var arrayB = b.split("");
  
  var arrayBig = arrayA.length > arrayB.length ? arrayA : arrayB;//array have length longer
  var arraySmall = arrayA.length <= arrayB.length ? arrayA : arrayB;
  
  var arraySum = [];
  
  var rememberShift = 0;
  for (var index = 0; index < arrayBig.length; index++)
  {
    let i = arrayBig.length - index - 1;
    let j = arraySmall.length - index - 1;
    let sum = (Number(j >= 0 ? arraySmall[j] : 0) + Number(arrayBig[i]) + Number(rememberShift)).toString();
    let sumArray = sum.split("");
    if (sumArray.length > 1)
    {
      rememberShift = sumArray[0];
      arraySum.unshift(sumArray[1]);
      if (i == 0)
      {
        arraySum.unshift(rememberShift);
      }
    }
    else
    {
      rememberShift = 0;
      arraySum.unshift(sumArray[0]);
    }
  }
  return arraySum.join("");
}
//end mine

//best
function add (a, b) {
  var res = '', c = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop()
    res = c % 10 + res
    c = c > 9
  }
  return res
}
//end best