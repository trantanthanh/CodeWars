Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

For example:

var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
c.encode('Codewars'); // returns 'HTIJBFWX'
c.decode('BFKKQJX'); // returns 'WAFFLES'

If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
The shift will always be in range of [1, 26].


//mine
var alphabetWords = "abcdefghijklmnopqrstuvwxyz";
var alphabetArray = alphabetWords.split("");

var CaesarCipher = function (shift) {
  // TODO: Complete the CaesarCipher object
  this.encode = function(text)
  {
    if(this.isHaveNumber(text))
    {
      return text.toUpperCase();
    }
    else
    {
      console.log("encode " + text);
      return this.shiftText(text, false);
    }
  }
  
  this.decode = function(text)
  {
    if(this.isHaveNumber(text))
    {
      return text.toUpperCase();
    }
    else
    {
      console.log("decode " + text);
      return this.shiftText(text, true);
    }
  }
  
  this.shiftText = function(text, isDecode = false)
  {
    var textArr = text.toLowerCase().split("");
      for (var i = 0; i < textArr.length; i++)
      {
        for (var j = 0; j < alphabetArray.length; j++)
        {
          if (textArr[i] == alphabetArray[j])
          {
            var shiftIndex = j + shift;
            if (isDecode)
            {
              shiftIndex = j - shift;
              while (shiftIndex < 0)
              {
                shiftIndex += alphabetArray.length;
              }
              textArr[i] = alphabetArray[shiftIndex];
              break;
            }
            else
            {
              while (shiftIndex >= alphabetArray.length)
              {
                shiftIndex -= alphabetArray.length;
              }
              textArr[i] = alphabetArray[shiftIndex];
              break;
            }
          }
        }
      }
      return textArr.join("").toUpperCase();
  }
  
  this.isHaveNumber = function(text)
  {
    return (!isNaN(parseInt(text)));
  }
};
//end mine

//best
var CaesarCipher = function (shift) {
  var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  this.encode = function(str) {
    return str.replace(/[a-z]/gi, function(s) {
      return a[(a.indexOf(s.toUpperCase()) + shift) % 26]
    })
  }
  this.decode = function(str) {
    return str.replace(/[a-z]/gi, function(s) {
      return a[(a.indexOf(s.toUpperCase()) + 26 - shift) % 26]
    })
  }
};
//end best