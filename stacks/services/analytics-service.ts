import {Stack, Api} from '@serverless-stack/resources'
import {HOSTED_ZONE, VERSION} from "../config";

const {MONGO_URI} = process.env

const analyticsService = ({stack}: { stack: Stack }) => {
    const api = new Api(stack, 'analytics-api', {
        cors: true,
        defaults: {
            function: {
                environment: {MONGO_URI: MONGO_URI as string},
            }
        },
        customDomain: {
            hostedZone: HOSTED_ZONE,
            domainName: `${stack.stage}-analytics.${HOSTED_ZONE}`,
            path: VERSION
        },
        routes: {
            'POST /': 'functions/analytics.siteHits'
        },
    })
    return {api}
}

export default analyticsService