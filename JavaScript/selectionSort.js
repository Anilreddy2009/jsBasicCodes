function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        let minIndex=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        const temp=arr[i]
        arr[i]=arr[minIndex]
        arr[minIndex]=temp
    }
    return arr
}
console.log(selectionSort([63,2,53,658,12,567,2,1]))