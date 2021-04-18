document.addEventListener("DOMContentLoaded", () => {

    document.querySelector("#validate").addEventListener("click", () => {

        var password1 = document.querySelector("#input1").value
        var password2 = document.querySelector("#input2").value

        if(!comparePasswords(password1, password2))
        {
            document.querySelector("#error").innerHTML = "The passwords entered don't match!"   
        }
        else
        {
            if(password1.length < 8)
            {
                document.querySelector("#error").innerHTML = "The passwords are not at least 8 characters long!"  
            }
        }
    })
})

function comparePasswords(p1, p2)
{
    if(p1 === p2)
    {
        return true
    }
    else
    {
        return false
    }
}