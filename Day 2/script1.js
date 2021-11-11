function computEbmi(height , weight)
{
  let bmi = weight/(height*height)
  return bmi
}
var get =computEbmi(15 ,50);
console.log(get);

