// Function to update the displayed username
function updateUserDisplay() {
  const username = localStorage.getItem('username');
  const userDiv = document.getElementById('user');
  if (username) {
    userDiv.innerHTML = "hello " + username;
  } else {
    userDiv.innerHTML = "please enter your username";
  }
}

// Set up event listener for the button
document.getElementById('mySubmit').onclick = function() {
  const username = document.getElementById('myText').value;
  localStorage.setItem('username', username);
  updateUserDisplay();
};

// Update the user display when the page loads
window.onload = function() {
  updateUserDisplay();
};
