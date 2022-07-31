import {ANALYTICS_API_URL} from '../config'
import axios from 'axios'

const http = axios.create({
    baseURL: ANALYTICS_API_URL,
})

export type PageHitPayload = {
    domain: string,
    page: string,
    version: string,
}

export const postPageHit = async (page: PageHitPayload) => {
    try {
        const {data} = await http.post('/', page)
        return {data}
    } catch (e) {
        if (e.response) return {error: e.response.data}
        return {error: e}
    }
}