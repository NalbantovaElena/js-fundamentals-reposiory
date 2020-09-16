function sortAnArray(array=[]){
    let resultArray =[];
   
    console.log(array);
    let sortArray = array.sort();
    console.log(sortArray);
    for(let element of sortArray){
        
        console.log(element.length);
        
    }
//console.log(minLengthWord);
}
sortAnArray(
    ["alpha", "beta", "gamma"]
)