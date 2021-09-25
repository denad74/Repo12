// Only change code below this line
function rangeOfNumbers(startN, endN) {
    

    if (startN > endN || startN === endN) {
        if(startN == endN ) {
            return rangeArray = [startN];
        } else if(startN > endN) {
           return rangeArray = ["The starting number will always be less than or equal to the ending number"];
            }
        } else {

        rangeArray = rangeOfNumbers(startN, endN - 1);
        rangeArray.push(endN);
        return rangeArray;

        }
    }


// Only change code above this line

console.log(rangeOfNumbers(1, 7)); // Change this line
console.log(rangeOfNumbers(3, 10)); // Change this line
console.log(rangeOfNumbers(5, 5)); // Change this line
console.log(rangeOfNumbers(7, 5)); // Change this line