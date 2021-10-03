const GITHUB_API_URI = "https://api.github.com";
const GITHUB_ACCEPT_HEADER = "application/vnd.github.v3+json";
const METHOD = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
};

const githubOptions = (method, body) => {
    let options = {
        method: method,
        header: {
            'Accept': GITHUB_ACCEPT_HEADER
        },
    }

    if (body) {
        options.body = JSON.stringify(body);
    }

    return options;
}

const GithubAPI = {
    async searchRepos(query, page = 1) {
        const queryString = 'q=' + encodeURIComponent(query) + `&page=${page}`;
        const response = await fetch(`${GITHUB_API_URI}/search/repositories?${queryString}`, githubOptions(METHOD.GET));
        const json = await response.json();
        return {
            totalCounts: json.total_count,
            items: json.items
        };
    },

    async getIssues(owner, name, page) {
        const queryString = `state=all&per_page=10&page=${page}`;
        const response = await fetch(`${GITHUB_API_URI}/repos/${owner}/${name}/issues?${queryString}`);
        const json = await response.json();
        return json.map((issue) => ({...issue, repo: name}));
    }
}

export default GithubAPI;