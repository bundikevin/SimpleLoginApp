function login(event) {
    event.preventDefault();
    let userInput = document.getElementById("name").value;
    let passInput = document.getElementById("pass").value;

    let matchedUser = usersArray.find(user => user.username == userInput && user.password == passInput);

    if(matchedUser) {
        alert("Logged In");
        window.location.href = "dashboard.html";
    } else {
        alert("wrong user/pass");
        return false;
        }
    }

function forgotPassword(event){
    event.preventDefault();
    let username = document.getElementById("email").value;
    let userToBeUpdated = usersArray.find(user => user.username == username);
    let newPassword = document.getElementById("passnew").value;

    if(userToBeUpdated){
        userToBeUpdated.password = newPassword;
        console.log("Password Changed!", newPassword);
        window.location.href = "index.html";
    }
    
    localStorage.setItem('usersArray', JSON.stringify(usersArray));
}
let usersArray = JSON.parse(localStorage.getItem('usersArray')) || [];
function addUser(event){
    event.preventDefault();

    let firstname = document.getElementById("fname").value;
    let lastname = document.getElementById("lname").value;
    let username = document.getElementById("uname").value;
    let password = document.getElementById("pass").value;
    let confirmpassword = document.getElementById("pass1").value;

    if (!firstname || !lastname || !username || !password || !confirmpassword) {
        alert("Please fill in all fields.");
        return;
    }
    
    if(password != confirmpassword){
        alert("Passwords do not match. Please try again.");
        return;
    }

    let newUser = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password,
    
    }
    
    if(newUser != ""){
        usersArray.push(newUser);
        console.log("New User Added!!:", newUser);
        window.location.href = "index.html";
    }

    localStorage.setItem('usersArray', JSON.stringify(usersArray));

}

function userProfile(event){
    event.preventDefault();
    // Retrieve user data from local storage (replace 'users' with your actual storage key)
    let storedData = JSON.parse(localStorage.getItem('usersArray')) || [];

    // Reference to the table body
    let tableBody = document.querySelector('#userTable tbody');

    // Iterate through each user and create a table row for each
    storedData.forEach(data => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${data.firstname}</td>
            <td>${data.lastname}</td>
            <td>${data.username}</td>
            <td>${data.password}</td>
        `;
        tableBody.appendChild(row);
    });
}