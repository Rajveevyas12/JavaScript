/* Create a function for Factorialize a Number
for ex. factorialize(5) = 5*4*3*2*1 = 120 */

function factorialize(num) {
        
    var factor =1;
        
    for (var counter=num; counter>0; counter--){
        factor=factor*counter;
    }
    
    return factor;
}

factorialize(5);// return 120