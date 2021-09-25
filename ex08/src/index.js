var contacts = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "number": "12365495208",
        "likes": ["C", "C++", "C#"]
    },
    {
        "firstName": "Jane",
        "lastName": "Doe",
        "number": "4568295761",
        "likes": ["Python", "Swift", "R"]
    },
    {
        "firstName": "Richard",
        "lastName": "Roe",
        "number": "6938257149",
        "likes": ["React", "Angular", "Vue"]
    },
    {
        "firstName": "Jane",
        "lastName": "Roe",
        "number": "unknown",
        "likes": ["JavaScript", "Node", "HTML & CSS"]
    }
];
function lookUpProfile(name, prop) {
    // Only change code below this line
   
    for(var i = 0; i < contacts.length; i++){
        for (var item in contacts[i]) {
            if(contacts[i].hasOwnProperty(item)) {
                if(name === contacts[i]["firstName"] && prop == item){
                    return contacts[i][item];
                }                
            }        
        }    
    } 
    if(prop != item){
        return "No such contact";
    }       
    // Only change code above this line
}

console.log(lookUpProfile("John", "likes")); //Change this line
console.log(lookUpProfile("Jane", "lastName")); //Change this line
console.log(lookUpProfile("Rob", "number")); //Change this line
console.log(lookUpProfile("Rob", "Javascript")); //Change this line
console.log(lookUpProfile("John", "addres")); //Change this line
module.exports = lookUpProfile;