const str="level" //if it is number then conver to strint using toString

function palindrome(str){
    let str1=""
    for(let i=str.length-1;i>=0;i--){
        str1=str1+str.charAt(i)
    }
    if(str===str1){
        return true
    }else{
        return false
    }
}
console.log(palindrome(str))