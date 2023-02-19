const merge=(leftArr,rightArr)=>{
    const output=[]
    leftIndex=0
    rightIndex=0

    while(leftArr.length>leftIndex && rightArr.length>rightIndex){
        if(leftArr[leftIndex]>rightArr[rightIndex]){
            output.push(rightArr[rightIndex])
            rightIndex++
        }
        if(leftArr[leftIndex]<rightArr[rightIndex]){
            output.push(leftArr[leftIndex])
            leftIndex++
        }
    }
    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}
const mergeSort=arr=>{
    if(arr.length<=1){
        return arr
    }
    const middleIndex=Math.floor(arr.length/2)
    const leftArr=arr.slice(0,middleIndex)
    const rightArr=arr.slice(middleIndex)

    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    );
}

console.log(mergeSort([3,0,9,5,2]))