const str1="abcd"
const str2="abde"

function compTwoStrs(str1,str2){
    if(str1.length===str2.length){
        let count=0
        for(let i=0;i<str1.length;i++){
            if(str1[i]===str2[i]){
                count +=1
            }
        }
        if(count===str1.length){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
}
console.log(compTwoStrs(str1,str2))