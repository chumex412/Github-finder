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
              <a href="${user.url}" class="btn btn-primary mb-2">View Profile</a>
            </div>
            <div class="col-4">
              <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
              <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
              <span class="badge badge-success">Followers: ${user.followers}</span>
              <span class="badge badge-info">Following: ${user.following}</span>

              <ul class="unordered-list list-unstyled parag mt-2">
                <li class="list-item">Company: ${user.company}</li>
                <li class="list-item">Website/blog: ${user.blog}</li>
                <li class="list-item">Location: ${user.location}</li>
                <li class="list-item">Member since: ${user.created_at}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  }


}