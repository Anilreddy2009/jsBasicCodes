const arr=[6,3,9,2,11,4]

function sortNums(arr){
    let arr1=[]
    for(let i=0;i<arr.length;i++){
        let count=0
        for(let j=0;j<arr.length;j++){
            if(arr[i]>arr[j]){
                count +=1
            }
        }
        arr1[count]=arr[i]
    }
    console.log(arr1)
}
sortNums(arr)

const str="anil"

function sortWords(str){
    const arr=str.split('')
    console.log(arr.sort().toString())
}
sortWords(str)