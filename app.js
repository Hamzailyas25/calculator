var result = document.getElementById("result");

function display(number){
    result.value += number;
}
function calculator(){
    var final_number = result.value;
    var final_number = eval(final_number);
    result.value = final_number;
}

function clears() {
    result.value = '';
}
function delet(){
    result.value = result.value.slice(0,-1);
}