const arr=[20,30,50,90,100]
const x=20

function bSearch(arr,x,start,end){
    if(start>end) return false
    let mid=Math.floor((start+end)/2)
    if(arr[mid]===x) return true
    if(arr[mid]>x){
        return bSearch(arr,x,start,mid-1)
    }
    if(arr[mid]<x){
        return bSearch(arr,x,mid+1,end)
    }
}
console.log(bSearch(arr,x,0,arr.length-1))