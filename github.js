class Github {
  constructor() {
    this.config = {
      headers: {
        Authorization: `token ${githubToken}`, // comes from token.js
      },
    };
    // Limit number of repos displayed
    this.repos_count = 5;
    // Sort repos by most recent
    this.repos_sort = 'created: asc';
  }

  // Get user profile
  async getUser(user) {
    // Get user profile
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      this.config
    );

    // Get repos associated with user profile
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      this.config
    );

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
