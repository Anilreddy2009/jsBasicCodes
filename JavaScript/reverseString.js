const str="aneel"
let str1=""

const revStr=(str)=>{
    for(let i=str.length-1;i>=0;i--){
        str1=str1+""+str.charAt(i)
    }
    console.log("reverse string is : "+str1)
}
revStr(str)