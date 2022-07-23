import { StackContext, Api } from "@serverless-stack/resources";
import portfolioSiteService from "./services/portfolio-site-service";

export default ({ stack }: StackContext) => {
  const portfolioSite = portfolioSiteService({ stack })
  stack.addOutputs({
    siteEndpoint: portfolioSite.url
  })
}
