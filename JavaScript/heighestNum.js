const arr=[2,4,6,3,10,9,5]

function heigNum(arr){
    let heighest=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]>heighest){
            heighest=arr[i]
        }
    }
    console.log('heighest num is an array is : '+heighest)
}
heigNum(arr)