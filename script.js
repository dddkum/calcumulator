let screen = document.getElementById("result")
let button = document.getElementsByClassName("btn")
console.log(button)

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function(event){
        buttonText = event.target.value
        if(buttonText == "C"){
            screen.value = ""
        } else if(buttonText == "*"){
            screen.value += "*"
        } else if (buttonText == "="){
            let equalValue = eval(screen.value)
            screen.value = equalValue
        } else {
            screen.value += buttonText
        }
    })
}