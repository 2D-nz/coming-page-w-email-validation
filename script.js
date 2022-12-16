const inputEmail = document.getElementById("emailAddress")
const emailForm = document.getElementById("form_Email")
const error = document.getElementById("error")
emailForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)){
        error.classList.add("d-none")
        inputEmail.classList.remove("invalid")
        window.alert("Your subscription has been completed! Thank you!")

    } else{
        error.classList.remove("d-none")
        inputEmail.classList.add("invalid")
    }
})