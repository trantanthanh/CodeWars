function expandedForm(num) {
  let resultSring = "";
  let numString = [...num.toString()];
  for (let i = numString.length;i > 0; i--)
  {
    let currentIndex = numString.length - i;
    if (numString[currentIndex] != "0")
    {
      if (resultSring != "")
      {
        resultSring = resultSring + " + " + numString[currentIndex] + stringZeros(i - 1);
      }
      else
      {
        resultSring = numString[currentIndex] + stringZeros(i - 1);
      }
    }
  }
  return resultSring;
}

function stringZeros(num)
{
  let resultZeros = ""
  for (let i = 0; i < num; i++)
  {
    resultZeros = resultZeros + "0";
  }
  return resultZeros;
}