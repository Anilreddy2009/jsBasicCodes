const str='anilkumarreddy'
const vols="aeiou"
let strVol=''
let strCon=''

const volAndCon=(str)=>{
    if(!str){
        console.log("vowels are : "+strVol+","+"consonants are : "+strCon)
    }else{
        if(vols.includes(str.charAt(0)) && !strVol.includes(str.charAt(0))){
             strVol=strVol+""+str.charAt(0)
        }
        if(!vols.includes(str.charAt(0)) && !strCon.includes(str.charAt(0))){
             strCon=strCon+""+str.charAt(0)
        }
        volAndCon(str.substring(1))
    }
}
volAndCon(str)