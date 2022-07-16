const display=document.querySelector(".calculator-input");
const keys=document.querySelector(".calculator-keys");

let displayvalue=0;
uptadedisplay();
function uptadedisplay(){
    display.value=displayvalue;
}

keys.addEventListener('click',function(e){
const element=e.target;

if(!element.matches('button')) return;

if(element.classList.contains('operator')){
    console.log('operator',element.value);
    return;
}
if(element.classList.contains('decimal')){
    //console.log('decimal',element.value);
inputdecimal();
uptadedisplay();

    return;
}
if(element.classList.contains('clear')){
    //console.log('clear',element.value);
    clear();
    uptadedisplay();
    return;
}
//console.log('number',element.value);
inputnumber(element.value);
uptadedisplay();

});

function inputnumber(num){
    displayvalue= displayvalue === '0'? num: displayvalue + num ;
}
function inputdecimal(){
    if(!displayvalue.includes('.')){
        displayvalue +='.';
    }
}
function clear(){
    displayvalue='0';
}