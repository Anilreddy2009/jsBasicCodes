const arr=[2,3,9,5,6,11,34,31]
let arr1=[]
function prime(arr){
    for(let i=0;i<arr.length;i++){
        let count=0
        for(let j=1;j<arr[i];j++){
            if(arr[i]%j===0){
                count +=1
            }
        }
        if(count===1){
            arr1.push((arr[i]))
        }
    }
    console.log("prime numbers are "+arr1)
}
prime(arr)