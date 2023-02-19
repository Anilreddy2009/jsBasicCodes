const arr=[4,7,2,9,15,13]

function missNum(arr){
    let arr1=[]
    const min=Math.min(...arr)
    const max=Math.max(...arr)
    for(let i=min;i<max;i++){
        if(!arr.includes(i)){
            arr1.push(i)
        }
    }
    console.log("missing num in an arr are : "+arr1)
}
missNum(arr)