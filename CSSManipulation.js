var borderRedValue
var borderGreenValue
var borderBlueValue
var borderWidthValue

var backgroundRedValue
var backgroundGreenValue
var backgroundBlueValue

document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#change").addEventListener("click", () => {

        borderRedValue = document.querySelector("#border-red-value").value
        borderGreenValue = document.querySelector("#border-green-value").value
        borderBlueValue = document.querySelector("#border-blue-value").value
        borderWidthValue = document.querySelector("#border-width-value").value

        backgroundRedValue = document.querySelector("#background-red-value").value
        backgroundGreenValue = document.querySelector("#background-green-value").value
        backgroundBlueValue = document.querySelector("#background-blue-value").value

        var style = document.querySelector("#paragraph").style

        style.borderColor = createRGBMethodString(borderRedValue, borderGreenValue, borderBlueValue)
        style.borderWidth = borderWidthValue+"px"
        style.backgroundColor = createRGBMethodString(backgroundRedValue, backgroundGreenValue, backgroundBlueValue)

    })
})

function createRGBMethodString(num1, num2, num3)
{
    val1 = parseInt(num1)
    val2 = parseInt(num2)
    val3 = parseInt(num3)

    return "rgb(" + val1 + "," + val2 + "," + val3 + ")"
}