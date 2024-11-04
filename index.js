const hexaDecimalNumberSystem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
let button = document.getElementById("button")
let firstColorBox = document.getElementById("first-color-box")
let firstCodeText = document.getElementById("first-code-text")
let secondColorBox = document.getElementById("second-color-box")
let secondCodeText = document.getElementById("second-code-text")
let thirdBoxColor = document.getElementById("third-box-color")
let thirdCodeText = document.getElementById("third-code-text")

function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * hexaDecimalNumberSystem.length)
    return randomNumber
}


button.addEventListener("click", function(evt){
    let hexCodeForFirstBox = "#"
    for(let myFirstLoop = 0; myFirstLoop < 6; myFirstLoop++){
        hexCodeForFirstBox += hexaDecimalNumberSystem[generateRandomNumber()]
    }
    firstColorBox.style.backgroundColor = hexCodeForFirstBox
    firstCodeText.textContent = hexCodeForFirstBox

    let hexCodeForSecondBox = "#"
    for(let mySecondLoop = 0; mySecondLoop < 6; mySecondLoop++){
        hexCodeForSecondBox += hexaDecimalNumberSystem[generateRandomNumber()]
    }
    secondColorBox.style.backgroundColor = hexCodeForSecondBox
    secondCodeText.textContent = hexCodeForSecondBox

    let hexCodeForThirdBox = "#"
    for(let myThirdLoop = 0; myThirdLoop < 6; myThirdLoop++){
        hexCodeForThirdBox += hexaDecimalNumberSystem[generateRandomNumber()]
    }
    thirdBoxColor.style.backgroundColor = hexCodeForThirdBox
    thirdCodeText.textContent = hexCodeForThirdBox
})