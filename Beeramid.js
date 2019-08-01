Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

1) your referral bonus, and

2) the price of a beer can

For example:

beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16

//mine
var level = 0;

// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
  level = 0;
  var numBeerCan = Math.floor(bonus / price);
  countLevel(numBeerCan, level);
  
  return level;
}

function countLevel(BeerCans, currentLevel)
{
  var nextLevelCans = numCansNeedToBuildLevel(currentLevel + 1);
  if (nextLevelCans <= BeerCans)
  {
    level++;
    countLevel(BeerCans - nextLevelCans, level);
  }
}

function numCansNeedToBuildLevel(nextLevel)
{
  if (nextLevel == 1)
  {
    return 1;
  }
  
  var currentLevel = 1;
  var currentCans = 1;
  while (currentLevel < nextLevel)
  {
    currentCans += 1 + currentLevel * 2;
    currentLevel++;
  }
  return currentCans;
}
//end mine

//best
// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
  var beers = Math.floor(bonus / price), levels = 0;
  while(beers >= ++levels * levels) {
    beers -= levels * levels;
  }
  return levels - 1;
}
//end best