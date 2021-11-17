let majorMin = {
    age: function(age){
        if(age>=18){
            console.log("age is major");
        }else{
            console.log("age is minor");
        }
    }
}
console.log(majorMin.age(20));