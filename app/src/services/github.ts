import axios from 'axios'

const http = axios.create({
    baseURL: 'https://api.github.com',
})

export const getRecentRepos = async (username: string) => {
    try {
        const { data: repos } = await http.get(`/users/${username}/repos?per_page=6&sort=updated&type=all`)
        const promises = repos.map(async repo => {
            const {data: languages} = await http.get(`/repos/${username}/${repo.name}/languages`)
            repo.languages = languages
            return repo
        })
        const response = await Promise.all(promises)
        return { data: response }
    } catch (e) {
        if (e.response) return { error: e.response.data }
        return { error: e }
    }
}