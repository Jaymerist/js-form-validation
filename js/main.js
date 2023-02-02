let newUsersList = document.querySelector(".new-users-list")

// READ THE PDF BEFORE STARTING
// Step 1-5 is read the pdf.

let form = document.querySelector(".new-user-form")

form.addEventListener("submit", (event)=>{
    event.preventDefault()

    //elements
    let usernameElement = event.target.elements["username"]
    let cityElement = event.target.elements["city"]
    let provinceElement = event.target.elements["province"]

    //values

    let username = usernameElement.value
    let city = cityElement.value
    let province = provinceElement.value

    //validation
    
    let isFormValid = true;

    //username validation
    let isUsernameValid = isValueNotEmpty(username) && !hasWhiteSpace(username)
    if(isUsernameValid){
        usernameElement.classList.remove("is-invalid")
    }
    else{
        usernameElement.classList.add("is-invalid")
        isFormValid = false;
    }

    //city validation
    let isCityValid = isValueNotEmpty(city) && !hasWhiteSpace(city)
    if(isCityValid){
        cityElement.classList.remove("is-invalid")
    }
    else{
        cityElement.classList.add("is-invalid")
        isFormValid = false;
    }

    //province validation
    isProvinceValid = isValueNotEmpty(province)
    if(isProvinceValid){
        provinceElement.classList.remove("is-invalid")
    }
    else{
        provinceElement.classList.add("is-invalid")
        isFormValid = false;
    }

    //return if form is invalid
    if (!isFormValid) {
        console.log("form is not valid")
        return
    }else

    addUser(username, city, province)

})


// the isValueNotEmpty function: 
// returns true if value not empty
// returns false if the value is empty
const isValueNotEmpty = (value) => {
    if (value !== "") {
        return true
    }
    return false
}

// the hasWhiteSpace function
// returns true if it has whitespace
// returns false if it does not has whitespace
function hasWhiteSpace(s) {
    return (/\s/).test(s);
}

// adds user to the page.
const addUser = (username, city, province) => {
    let newUser = `<li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
        <div class="fw-bold">${username}</div>
        ${city}, ${province}
    </div>
    </li>`
    newUsersList.innerHTML = newUsersList.innerHTML + newUser
}

