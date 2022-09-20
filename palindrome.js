
let name="Ranjan"
function reverce(str){
    let bag="";
    for(let i=str.lenght-1; i>=0; i--){
        bag+=str[i]
    }
    return bag;
}
let rev_str=reverce(name);
if(name==rev_str){
    console.log("Palindrome");
}else{
    console.log("Not palindrome");
}