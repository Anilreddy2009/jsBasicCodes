const arr=[2,8,6,7,4,3]

function thirdLowNum(arr){
    for(let i=0;i<arr.length;i++){
        let count=0
        for(let j=0;j<arr.length;j++){
            if(arr[i]>arr[j]){
                count +=1
            }
        }
        if(count===2){
            console.log("third lowest num in an arr is : "+ arr[i])
        }
    }
}
thirdLowNum(arr)