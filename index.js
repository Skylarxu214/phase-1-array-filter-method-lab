function findMatching(arr , name){
   const newarr = arr.filter(x => x.toLowerCase() === name.toLowerCase());
   return newarr 
 }

    // Code your solution here
function fuzzyMatch(arr ,str){
    const newarr = arr.filter(x => x.slice(0,str.length) === str);
     return newarr;
}

function matchName(arr , str){
    const newarr = arr.filter(x => x.name === str );
    return newarr ;
}