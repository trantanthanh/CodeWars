function findLowestInt(k) {
    // your code here
    var lowestInt;
    
    var n = 1;
    
    while (true)
    {
      var result = n*k +"";
      result1 = [...(n*(k+1) +"")];
      
      if (result.length != result1.length)
      {
        n++;
        continue;
      }
      
      var match = true;
      while (result.length !=0)
      {
        for (var i = 0; i < result1.length; i++)
        {
          if (!result.includes(result1[i]))
          {
            match = false;
            break;
          }
          else
          {
            result = result.replace(result1[i], "");
            result1.splice(i, 1);
            break;
          }
        }
        if (!match) break;
      }
      if (match)
      {
        lowestInt = n;
        break;
      }
      n++;
    }
    
    return lowestInt;
}

function findLowestInt(k) {
    // your code here
    for (var i = 1;;i++)
    {
      var result = (i*k).toString();
      var result1 = (i*(k+1)).toString();
      if ([...result].sort().join('') === [...result1].sort().join(''))
      {
        return i;
      }
    }
}