// // Only change code below this line

function sumFibonacci(num) {
    var sumFibOdd = 1;
    if(num <= 0) {
        sumFibOdd = 0;
    } else {
        var arrFib = [0, 1];
        
       for(var i = 2; i < num + 1; i++) {
        arrFib.push(arrFib[i -2] + arrFib[i -1]);
        if(arrFib[i] <= num && !(arrFib[i]%2 === 0)){
           sumFibOdd = sumFibOdd + arrFib[i]
          
        }
       }
    }

    return sumFibOdd;
   
    
}
  
    //return fibs.filter(n => n % 2 !== 0).reduce((a,b) => a + b);
  
// Only change code above this line

console.log(sumFibonacci(1)); // Change this line
console.log(sumFibonacci(10)); // Change this line
console.log(sumFibonacci(20)); // Change this line
console.log(sumFibonacci(4)); // Change this line
console.log(sumFibonacci(-5)); // Change this line
module.exports = sumFibonacci;

