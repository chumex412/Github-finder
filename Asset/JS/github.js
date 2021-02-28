
class GitHub {
  constructor() {
    this.clientId = '4a80f4bc139952a71c7d';
    this.clientSecret = '466d3f8087cf7359deb2af8b0696aaa86b283a6a';
    this.repoCount = 10;
    this.repoSort = 'created: asc';
  }

  // Fetch user profile and repos
  async get(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repoCount}&sort=${this.repoSort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}

