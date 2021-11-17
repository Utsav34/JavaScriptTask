var nestedarry = [10,20,[30,40,50],[60,70,80],[90,20,40,30,20],[10,15]];
console.log("nested array is ",nestedarry);
function change(arr){
    var result = [];
    arr.forEach(flatten)
    function flatten(element){
        if(Array.isArray(element)){
            return element.forEach(flatten);
        }
        return result.push(element);
    }
    return result;
}
let arr= change(nestedarry);
console.log("Final array is ",arr);