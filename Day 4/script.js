
const users = [
    { name: 'Utsav', age: 23 },
    { name: 'Madhur', age: 24 },
    { name: 'Dheeraj', age: 22 },
    { name: 'Mohit', age: 27 },
    { name: 'Ravi', age: 32 },
 ];
 function groups(Array, cal) {
    return Array.reduce((a,b) => {
       const key = b[cal];
       if (!a[key]) {
          a[key] = [];
       }
      
       a[key].push(b);
       return a;
    }, {});
 }
 const groupedusers = groups(users, 'age');
 console.log(groupedusers);

