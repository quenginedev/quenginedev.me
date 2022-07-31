import {StackContext} from "@serverless-stack/resources";
import portfolioSiteService from "./services/portfolio-site-service";
import analyticsService from "./services/analytics-service";

export default ({stack}: StackContext) => {
    const analyticsApi = analyticsService({stack})
    const portfolioSite = portfolioSiteService({stack}, {
        VITE_ANALYTICS_API_URL: analyticsApi.api.url,
    })
    stack.addOutputs({
        analyticsService: analyticsApi.api.url,
        siteEndpoint: portfolioSite.url
    })
}
