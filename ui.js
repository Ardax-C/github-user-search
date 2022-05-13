class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }
  // Display profile in UI
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body border-primary mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}" style=" border-radius: 5px;">
          <a href="${user.html_url}" target="_blank" class="btn btn-outline-secondary btn-block text-success mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge bg-primary text-light">Public Repos: <span class="text-success">${user.public_repos}</span></span>
          <span class="badge bg-secondary text-light">Public Gists: <span class="text-success">${user.public_gists}</span></span>
          <span class="badge bg-success text-info">Followers: <span class="text-primary">${user.public_followers}</span></span>
          <span class="badge bg-info text-primary">Following: <span class="text-success">${user.public_following}</span></span>
          <br><br>
          <ul class="list-group card border-primary text-primary mb-3">
            <li class="list-group-item text-info">Company: <span class="text-success">${user.company}</span></li>
            <li class="list-group-item text-info">Website/Blog: <span class="text-success">${user.blog}</span></li>
            <li class="list-group-item text-info">Location: <span class="text-success">${user.location}</span></li>
            <li class="list-group-item text-info">Member Since: <span class="text-success">${user.created_at}</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="card border-info mb-3" style="padding: 10px 10px 0;">
      <h3 class="card-header text-primary bg-success mb-3" style="border-radius: 5px;"><strong>Latest Repos</strong></h3>
      <div id="repos"></div>
    </div>
    
    `;
  }

  // Display repos in UI
  showRepos(repos) {
    let output = '';
    repos.forEach(function (repos) {
      output += `
        <div class="card border-light mb-3" style="padding: 10px;">
          <div class="row">
            <div class="col-md-6">
              <a href="${repos.html_url}" target="_blank"><span class="text-secondary">${repos.name}</span></a>
            </div>
            <div class="col-md-6">
              <span class="badge bg-primary text-light">Stars: <span class="text-success">${repos.stargazers_count}</span></span>
              <span class="badge bg-secondary text-primary">Watchers: <span class="text-light">${repos.watchers_count}</span></span>
              <span class="badge bg-success text-primary">Forks : <span class="text-sprimary">${repos.fork_count}</span></span>
            </div>
          </div>
        </div>
      `;
    });

    // Output repos
    document.getElementById('repos').innerHTML = output;
  }

  // Show alert message
  showAlert(message, className) {
    // Clear any remaining alerts
    this.clearAlert();
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = className;
    // Add Text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.searchContainer');
    // Get search box
    const search = document.querySelector('.search');
    // Insert alert
    container.insertBefore(div, search);

    // Timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear display
  clearProfile() {
    this.profile.innerHTML = '';
  }
}
