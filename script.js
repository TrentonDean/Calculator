var displayDiv = document.querySelector("#display");
displayDiv.innerText = 0;
var play = document.querySelector("audio");

function press(e){ 

    play.play();

    if(e == "&" && displayDiv.innerText > 0){
        displayDiv.innerText = "-" + displayDiv.innerText;
    }else if(e == "&" && displayDiv.innerText < 0){
        displayDiv.innerText = displayDiv.innerText * -1;
    }else if(e == "percent"){
        displayDiv.innerText = displayDiv.innerText / 100;
    }else if(displayDiv.innerText == 0){
        displayDiv.innerText = e;
    }else if(displayDiv.innerText != 0 && num1 == ""){
        displayDiv.innerText += e;
    }else if(operator != "" && displayDiv.innerText == num1){
        displayDiv.innerText = e;
    }else if(operator != "" && displayDiv.innerText != num1){
        displayDiv.innerText += e;
    }
}

function clr(){
    displayDiv.innerText = 0;
    operator = "";
    num1 = "";
    play.play();
}

var num1 = "";
var num2 = "";
var operator = "";

function setOP(o){
    num1 = displayDiv.innerText;
    operator = o;
    console.log(num1);
    play.play();
}

var total = 0;

function calculate(){
    num2 = displayDiv.innerText;

    play.play();
    
    switch (operator){
        case '+':
            total = num1 + num2;
            displayDiv.innerText = total;
            break;
        case '-':
            total = num1 - num2; 
            displayDiv.innerText = total;
            break;
        case '*':
            total = num1 * num2;
            displayDiv.innerText = total;
            break;
        case '/':
            total = num1 / num2;
            displayDiv.innerText = total;
    }
}