const num=6

const fiboOf=(num)=>{
    if(num===0){
        return 0
    }
    if(num===1){
        return 1
    }
    else{
        return fiboOf(num-1)+fiboOf(num-2)
    }
}
console.log(fiboOf(num))

const arr=[]
function fiboSeries(num){
    for(let i=0;i<=num;i++){
        if(i===0 || i===1){
            arr.push(i)
        }else{
            arr.push(arr[i-1]+arr[i-2])
        }
    }
    console.log("fibo series is : "+arr)
}
fiboSeries(num)