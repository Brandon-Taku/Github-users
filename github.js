class GitHub {
    
    constructor(){
        this.client_id = '7332f65a005b35086e7e';
        this.client_secret = 'f142710936f356371d502147bce26afc097908ae';
        this.repos_count = 6;
        this.repos_sort = 'created: asc';//sorting 

    }

    async getUser(user){
        //get user
        const profileResponse = await fetch
        (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        //getRepos
        const repositoryResponse = await fetch
        (`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}$sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repositoryResponse.json();

        return {
            profile, //calls the profile
            repos
        }
    }
}

