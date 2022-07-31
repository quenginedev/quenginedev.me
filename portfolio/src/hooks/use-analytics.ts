import type {PageHitPayload} from "../services/analytics";
import {IS_PROD} from '../config'
import {postPageHit} from '../services/analytics'
import pkg from '../../package.json'

export const useAnalytics = () => {
    const sendPageHit = async () => {
        if (!IS_PROD) return;
        const analyticsPayload: PageHitPayload = {
            domain: window.location.hostname,
            page: window.location.pathname,
            version: pkg.version,
        }
        await postPageHit(analyticsPayload)
    }

    return {sendPageHit};
}