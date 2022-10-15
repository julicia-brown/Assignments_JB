// Function to check Whether both passwords is same or not.
function checkPassword(form) {
  password1 = form.password1.value;
  password2 = form.password2.value;

  // If password not entered
  if (password1 != password2) {
      alert ("Password did not match: Please try again...")
      return false;
  }

  // If same return True.
  else{
      return true;
  }
}
// List of User Names
//const usernames = ["Ashley", "Elizabeth", "Harry", "Mary", "Shana" ];

function userName(){
  let user = document.getElementById('username');
  let listNames = ["Ashley", "Elizabeth", "Harry", "Mary", "Shana"]

    if (listNames === user.value) {
      alert('The name already exist')
  }
  else{
  return false;
}
}