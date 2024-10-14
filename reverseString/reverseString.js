/*Create a function to reverse a string
for ex. hello should become "olleh" */

function reverseString(str) {
    
    //Use split method to convert string to array 
    var strArray=str.split(""); //["h", "e", "l", "l", "o"]
    
    //Then use reverse method to reverse an array
    var revArray=strArray.reverse();//["o", "l", "l", "e", "h"]
    
    //Join method to convert Array to String
    var revStr=revArray.join("");//olleh
    
    return revStr;
}

var answer=reverseString("hello");
console.log(answer);//olleh