// Insta github
const github = new GitHub;

// Inst UI
const ui = new UI;

// Search input 
const gitHubUser = document.querySelector('#github-user');

// Event listener for input
gitHubUser.addEventListener('keyup', function(e) {
  const userText = e.target.value;

  if(userText !== '') {

    // Make http call to github
    github.get(userText)
    .then(data => {
      if(data.profile.message === "Not Found") {
        //Show alert
        ui.showAlert('User Not Found', 'alert');
      } else {

        // Show profile
        ui.showProfile(data.profile);
        // Display Repos
        ui.showRepos(data.repos);
      }
    }); 
  } else {

    // Clear Profile
    ui.clearProfile();
  }
});