const catchSignChange = arr => 
{
   count = 0;
   arr.map((value, index, array) => 
     {
       if (index > 0)
       {
         if ([...value.toString()][0] == "-" && [...array[index - 1].toString()][0] != "-"
         || [...value.toString()][0] != "-" && [...array[index - 1].toString()][0] == "-")
         {
           count++;
         }
       }
     }
   )
   return count;
}