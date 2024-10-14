
function palindrome(str) {
  // Good luck!
 str = str.toLowerCase().replace(/[\W_]/g, '');
var a =str;  
var b= a.split("").reverse().join("");  
if(b==str){
  return true;
}
  else{
    return false;
  }
}



palindrome("eye");
