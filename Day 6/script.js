
const a =[4, 4, 5, 7, 7, 4, 8, 3, 6, 3, 4, 3, 3,6]
function count_duplicate(a) {
   let counts = {}
   for (i = 0; i<a.length; i++) {
      if (counts[a[i]]) {
         counts[a[i]] += 1
      }
      else
       {
         counts[a[i]] = 1
      }
   }
   console.log(counts)
}
count_duplicate(a)




