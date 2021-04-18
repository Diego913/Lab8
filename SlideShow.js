var images = ["images/RL1.jpg", "images/RL2.jpg", "images/RL3.jpg", "images/RL4.png", "images/RL5.jpg"]          
var index = 0

document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#next").addEventListener("click", () => {

    index++

    index %= 5
    
    document.querySelector("#slides").src = images[index]
       
    })

    document.querySelector("#previous").addEventListener("click", () => {

        index--
    
        if(index < 0)
        {
            index += 5
        }
        else
        {
            index %= 5
        }
        
        document.querySelector("#slides").src = images[index]
           
        })
})