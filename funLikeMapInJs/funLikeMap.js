const arr = [1, 2, 3, 4, 5];

const  mapLikeFun = (arr , callback)=>{
    let res = [];
    for(let i =0 ;i<arr.length ;i++){
        const updated = callback(arr[i]);
        res.push(updated)
    }
    return res;
}
 
const performMapLikeFun = mapLikeFun(arr , function(num){
    if(num === 2){
        return num*10
    }else
    return num*5;
})

console.log(performMapLikeFun);
