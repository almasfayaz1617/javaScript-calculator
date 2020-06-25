function insert(num){
    document.form.result.value=
    document.form.result.value + num
}

function clean(){
    document.form.result.value=''
}
function equal(){
    var expr= document.form.result.value;
    document.form.result.value= eval(expr)
}
