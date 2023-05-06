function backspace(theString){
    return theString.substring(0, theString.length-1);
}
var numbers = document.querySelectorAll(".number");
var historyValue = document.querySelector("#historyValue");
var result = document.querySelector("#outputValue");
var equalTo = document.querySelector(".equalTo");
numbers.forEach((number) => {
    number.addEventListener('click', (p) => {
        result.textContent += number.id;
        if(result.textContent.includes('+') || result.textContent.includes('-') || result.textContent.includes('*')){
            console.log(1);
            console.log(2);
            if(number.id != "+" && number.id != "-" && number.id != "*" && number.id != "/"){
                historyValue.innerHTML += result.textContent+"<br>"; 
                result.textContent = eval(result.textContent);  
                  
            }
            
            console.log(3);
        }
        ;
    });
});
equalTo.addEventListener('click', (p) => {
    // alert(result.textContent);
    historyValue.textContent = result.textContent;
    result.textContent = eval(result.textContent);
})