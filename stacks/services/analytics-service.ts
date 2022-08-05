import {Stack, Api} from '@serverless-stack/resources'

const {MONGO_URI} = process.env

const analyticsService = ({stack}: { stack: Stack }) => {
    const api = new Api(stack, 'analytics-api', {
        cors: true,
        defaults: {
            function: {
                environment: {MONGO_URI: MONGO_URI as string},
            }
        },
        routes: {
            'POST /': 'functions/analytics.siteHits'
        },
    })
    return {api}
}

export default analyticsService