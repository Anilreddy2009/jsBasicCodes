const array=[1,4,2,8]

const quickSort=(arr)=>{
    if(arr.length===1 ){
        return arr;
    }
    let pivot=arr[arr.length-1]
    let leftArr=[]
    let rightArr=[]

    for(let i=0;i<arr.lenth-1;i++){
        if(arr[i]<pivot){
            leftArr.push(arr[i])
        }else{
            rightArr.push(arr[i])
        }
    }

    if(leftArr.length>0 && rightArr.length>0){
        return [...quickSort(leftArr),pivot,...quickSort(rightArr)];
    }
    if(leftArr.length>0){
        return [...quickSort(leftArr),pivot];
    }
    if(rightArr.length>0){
        return [pivot, ...quickSort(rightArr)];
    }

}
console.log(quickSort(array))