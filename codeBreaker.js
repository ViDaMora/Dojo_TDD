let cod = "1234"

function codeBreaker(a){
    let result=""
for (let index = 0; index < cod.length; index++) {
    const characterA = a.substr(index,1);
    const characterCod= cod.substr(index,1);
    if (characterA == characterCod) {
        result= result + "X"
    }else{
        let find = cod.indexOf(characterA)
        if (find != -1) {
            result= result + "-"
        }
    }
}
    return result

}

module.exports.codeBreaker=codeBreaker;