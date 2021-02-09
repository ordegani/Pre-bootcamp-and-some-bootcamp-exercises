function validation(password){
    if (password.length>7){
        console.log("strong");
    }return("weak");
    
}
function validation2(password){
    if((password.length<20) && (typeof password==='string')){
        console.log("yay!");
    }
}
function validTerany(password){
    return password.length>0 && password.length<7 ? 'ok':'wrong password';
}
validation("12345678")
validation2("123456789")
console.log(validTerany("123"))