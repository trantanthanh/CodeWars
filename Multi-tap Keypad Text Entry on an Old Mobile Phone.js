let keyboarb_1 = "1adgjmptw ";
let keyboarb_2 = "0behknqux";
let keyboarb_3 = "cfilorvy";
let keyboarb_4 = "234568sz";
let keyboarb_5 = "79";

function presses(phrase) {
  // To do...
  console.log(phrase);
  return [...phrase].map(letter => { return checkNumPress(letter);
  }).reduce((a, b) => a + b)
}

function checkNumPress(letter)
{
  if (keyboarb_5.search(letter.toLowerCase()) != -1)
  {
    return 5;
  } else if (keyboarb_4.search(letter.toLowerCase()) != -1)
  {
    return 4;
  }
  else if (keyboarb_3.search(letter.toLowerCase()) != -1)
  {
    return 3;
  }
  else if (keyboarb_2.search(letter.toLowerCase()) != -1)
  {
    return 2;
  }
  else
  {
    return 1;
  }
}


-----------------------------------------------------------------------------------

let KeyBoard = ["1",    "abc2", "def3",
                "ghi4", "jkl5", "mno6",
                "pqrs7","tuv8", "wxyz9",
                "*",    " 0"  , "#"
              ];

function presses(phrase) {
  // To do...
  console.log(phrase);
  return [...phrase].map(letter => { 
      return KeyBoard.filter(button => button.search(letter.toLowerCase()) != -1)[0].search(letter.toLowerCase()) + 1;;
  }).reduce((a, b) => a + b);
}