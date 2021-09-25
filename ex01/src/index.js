// Only change code below this line
function MyRecursion(arr, n) {
    if(n <= 0) {
        return 0;
    } else {
        return MyRecursion(arr, n - 1) + arr[n - 1] 
    }
    
}
// Only change code above this line

console.log(MyRecursion([1], 0)); // Change this line
console.log(MyRecursion([1, 2, 3, 4], 2)); // Change this line
console.log(MyRecursion([1, 2, 3, 4], 3)); // Change this line
console.log(MyRecursion([1, 2, 3, 4, 5, 6], 5)); // Change this line
module.exports = MyRecursion;