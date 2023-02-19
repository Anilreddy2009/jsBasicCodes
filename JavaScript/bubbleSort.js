let arr=[130,26,32,100,35]

function bubbleSort(arr){
    for(let i=arr.length;i>0;i--){
        for(let j=1;j<i;j++){
            if(arr[j]<arr[j-1]){
                let temp=arr[j]
                arr[j]=arr[j-1]
                arr[j-1]=temp
            }
        }
    }
    console.log(arr)
}
bubbleSort(arr)