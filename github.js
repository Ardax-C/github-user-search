class Github {
  constructor() {
    this.config = {
      headers: {
        Authorization: `token ${githubToken}`, // comes from token.js
      },
    };
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      this.config
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repo?per_page=${this.repos_count}&sort=${this.repos_sort}`,
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
