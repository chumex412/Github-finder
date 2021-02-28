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
      } else {
        ui.showProfile(data.profile);
      }
    }); 
  }
});