const form=document.getElementById("registerForm")

const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex=/^0[0-9]{9}$/
const nameRegex=/^[a-zA-ZÀ-ỹ\s]+$/

function showError(id,msg){

document.getElementById(id+"Error").textContent=msg

}

function clearError(id){

document.getElementById(id+"Error").textContent=""

}

function validateFullname(){

let value=fullname.value.trim()

if(value.length<3 || !nameRegex.test(value)){

showError("fullname","Tên không hợp lệ")

return false

}

clearError("fullname")

return true

}

function validateEmail(){

let value=email.value

if(!emailRegex.test(value)){

showError("email","Email sai")

return false

}

clearError("email")

return true

}

form.addEventListener("submit",function(e){

e.preventDefault()

let valid=

validateFullname() &
validateEmail()

if(valid){

document.getElementById("success").textContent="Đăng ký thành công 🎉"

form.style.display="none"

}

})