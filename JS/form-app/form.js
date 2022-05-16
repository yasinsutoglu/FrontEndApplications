
const userForm = document.querySelector('#userForm')
const userName= document.querySelector('#userName')
const userSurname = document.querySelector('#userSurname')
const userAge = document.querySelector('#userAge')
const subContainer = document.querySelector('.sub-container')

const submitHandler = (e) => {
    e.preventDefault()

    if(userName.value && userSurname.value && userAge.value >=18){
        showInfos(userName.value, userSurname.value, userAge.value)
        userName.value = ""
        userSurname.value = ""
        userAge.value = null
    }else {
        alert('Invalid input, please try again!')
    }
}



const showInfos = (userName, userSurname, userAge) =>{
    const liDom = document.createElement("li")
    liDom.innerHTML = `Your information: ${userName} ${userSurname} - ${userAge} `
    liDom.classList.add("user-info")
    subContainer.append(liDom)

    if (subContainer.firstChild){
        subContainer.style.display = "flex"
    }
}

userForm.addEventListener("submit", submitHandler)