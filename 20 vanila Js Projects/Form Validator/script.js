const form = document.getElementById('form');
const form = document.getElementById('username');
const form = document.getElementById('email');
const form = document.getElementById('password');
const form = document.getElementById('password2');
//show input error message
function showError(input, message) {
    const formControl = in
}


//event list
form.addEventListener('submit', function(e) {

    e.preventDefault();  
    if (username.value === ""){
        showError(username, "Username is required");

    } else {
        showSuccess(username);

    }
        
    
});




