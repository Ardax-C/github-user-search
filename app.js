//Init Github
const github = new GitHub();
//Init UI
const ui = new UI();
// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input Event Listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  // input validation
  if (userText !== '') {
    // Make HTTP call
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User Not Found', 'alert alert-dismissible alert-warning');
      } else {
        // Show profile
        ui.showProfile(data.profile);
        // Show repos
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
