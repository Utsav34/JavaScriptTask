let color = {
  red : "#FF0000",
  green : "#00FF00",
  white : "#FFFFFF"
}
let clone = {}
for(let key in color){
  clone[key] = color[key] 
}
console.log(clone)



