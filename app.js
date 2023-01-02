// Init github
const github = new GitHub();
// Init UI
const ui = new UI();
// Search input
const searchUser = document.getElementById('search-user');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const inputText = e.target.value;

  if (inputText !== '') {
    // Make http call
    github.getUser(inputText).then((data) => {
      if (data.profile.message === 'Not Found') {
        // Show Alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // clear profile
    ui.clearProfile();
  }
});
