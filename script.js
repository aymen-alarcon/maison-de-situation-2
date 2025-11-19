let users = [];

let count = 0;
counterSpan = document.querySelector(".counter")

if (counterSpan.textContent === 0) {
    document.getElementById("tableContainer").style.display = "none"
}else if(count !== 0){
    document.getElementById("tableContainer").style.display = "block"
}

function displayUsersInTable() {
    let usersList = JSON.parse(localStorage.getItem("users"))
    usersList.forEach(user => {
        document.querySelector(".user-name").textContent = `${user.name}`
        document.querySelector(".email").textContent = `${user.email}`
        document.querySelector(".age").textContent = `${user.name}`
    });
}

document.forms["userForm"].addEventListener("submit", (event)=>{
    event.preventDefault();

    count++;

    counterSpan.textContent = count

    let form = event.target

    let userInfo = {
        id : count, 
        name : form.userName.value,
        email : form.userEmail.value,
        age : form.userAge.value,
    }

    // users.forEach(user =>{
    //     if (user.id === userInfo.id) {            
    //         users.push(userInfo)
    //     }else{
    //         let foundUser = user.find(userTemp => userTemp.id === userInfo.id)

    //     }
    // })

    localStorage.setItem("users", JSON.stringify(users))
    displayUsersInTable()
})

console.log(counterSpan.textContent)

document.querySelector(".user-name").addEventListener("click", ()=>{
    let form = document.forms["userForm"]
    let usersList = JSON.parse(localStorage.getItem("users"))
    usersList.forEach(user => {
        form.userName.value = `${user.name}`
        form.userEmail.value = `${user.email}`
        form.userAge.value = `${user.age}`
    })
        
})