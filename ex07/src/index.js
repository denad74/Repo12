var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: [ ]
    },
    5439: {
        album: "ABBA Gold"
    }
};

// Keep a copy of the collection for tests

var oldCollection = JSON.parse(JSON.stringify(collection));

function updateRecords(object, id, prop, value) {
    // Only change code below this line
    
        for (item in object) {
          if (object.hasOwnProperty(item)) 
            if(value){
            if(prop == "artist"){
                if(item == id && !object[item]["artist"]){
                    if(value){}
                    object[item].prop = value;
                    
                }
            } else {
                if(item == id && !object[item]["tracks"]){
                    
                    object[item][prop] = [];
                    object[item][prop].push(value);
                   
                }else if (object[item]["tracks"] == []) {
    
                }else {
                    object[item]["tracks"].push(value);
                }
            }
                
                
               
            }
          
               
        }
        return object 
          // Only change code above this line
         
    }
        
        
    


console.log(updateRecords(collection, 5439, "artist", "ABBA")); // Change this line
console.log(updateRecords(collection, 5439, "tracks", "Take a Chance on Me")); // Change this line
console.log(updateRecords(collection, 2548, "artist", "")); // Change this line
console.log(updateRecords(collection, 1245, "tracks", "Addicted yo Love")); // Change this line
module.exports = updateRecords;
    