const arr=[6,8,3,10,9,15,12]
const x=15

function lSearch(arr,x){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===x){
            return true
        }
    }
    return false
}
console.log(lSearch(arr,x))