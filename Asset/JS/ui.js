class UI {
  constructor() {
    this.profile = document.querySelector('#profile');
  }

  // Display profile
  showProfile(user) {
    this.profile.innerHTML  = `
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-2">
              <img class="img-fluid mb-2" src="${user.avatar_url}">
              <a href="${user.html_url}" class="btn btn-primary mb-2">View Profile</a>
            </div>
            <div class="col-4">
              <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
              <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
              <span class="badge badge-success">Followers: ${user.followers}</span>
              <span class="badge badge-info">Following: ${user.following}</span>
              <br/><br/>
              <ul class="unordered-list list-unstyled parag">
                <li class="list-item">Company: ${user.company}</li>
                <li class="list-item">Website/blog: ${user.blog}</li>
                <li class="list-item">Location: ${user.location}</li>
                <li class="list-item">Member since: ${user.created_at}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h2 class="h3 mb-2">Latest Repos</h2>
      <div id="repos"></div>
    `;
  }

  // Display Repos
  showRepos(repos) {
    let output = '';

    repos.forEach(repo => {
      output += `
        <div class="card mb-2">
          <div class="card-body">
            <div class="row">
              <div class="col-3">
                <a href="${repo.html_url}" class="parag link" target="_blank">${repo.name}</a>
              </div>

              <div class="col-3">
                <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                <span class="badge badge-success">Watchers: ${repo.watchers_count}</span>
                <span class="badge badge-warning">Forks: ${repo.forks_count}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    });
    // Output the Repos to the DOM
    document.querySelector('#repos').innerHTML = output;
  }

  // Show alert
  showAlert(message, className) {
    // Clear alert
    this.clearAlert();
    // UI element
    const container = document.querySelector('#searchContainer');
    const card = document.querySelector('.search');
    // Create div
    const div = document.createElement('div');
    div.className = className;
    div.append(document.createTextNode(message));
    container.insertBefore(div, card);

    // Clear alert after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  // Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if(currentAlert) {
      currentAlert.remove();
    }
  } 

  // Clear profile
  clearProfile() {
    this.profile.innerHTML = "";
  }

}