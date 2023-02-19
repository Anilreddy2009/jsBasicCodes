const arr=[2,5,4,8,3]
let arr1=[]
let arr2=[]
const oddOrEven=(...arr)=>{
    for(let i=0;i<arr.length;i++){
        arr[i]%2===0?arr1.push(arr[i]):arr2.push(arr[i])
    }
    console.log("even nums in an array : "+arr1+"  "+"odd nums in an array : "+arr2)
}
oddOrEven(2,5,4,8,3)