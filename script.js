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
        document.getElementById("userTableBody").innerHTML += `
            <tr>
                <td>
                    <span class="user-name" data-bs-toggle="modal" data-bs-target="#userDetailModal">
                        ${user.name}
                    </span>
                </td>
                <td>${user.email}</td>
                <td>${user.age}</td>
                <td>
                    <button class="btn btn-sm btn-danger w-100" Userid="${user.id}">Supprimer</button>
                </td>
            </tr>
        `
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
        
    users.push(userInfo)
    localStorage.setItem("users", JSON.stringify(users))
    displayUsersInTable()
})

document.querySelector(".user-name").addEventListener("click", ()=>{
    let form = document.forms["userForm"]
    let usersList = JSON.parse(localStorage.getItem("users"))
    usersList.forEach(user => {
        form.userName.value = `${user.name}`
        form.userEmail.value = `${user.email}`
        form.userAge.value = `${user.age}`
    })      
})

document.querySelectorAll(".btn-danger").forEach(deleteBtn =>{
    let usersList = JSON.parse(localStorage.getItem("users"))
    let userId = deleteBtn.getAttribute("Userid")
    let foundUser = usersList.find(userTemp => userTemp.id === userId)
    
})