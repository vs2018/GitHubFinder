class Github {
  constructor(){
    this.client_id = '2083946415a606cfb59b'
    this.client_secret = '827b73b2c32fd31149eec8cb07196e0b1555ea5d'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json()
    const repos = await repoResponse.json()


    return {
      profile,
      repos
    }
  }
}