const fs = require('fs');

const content = fs.readFile('./Day 4/input.txt', 'utf-8', (err, data) => {
    if(err){
        throw err;
    }
   processFile(data);
});
let arr;
const processFile = (input) =>{
     arr = input.split('\n');
    console.log(arr[12].search(/\:/)); 
}



