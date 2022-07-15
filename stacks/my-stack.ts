import { StackContext, Api } from "@serverless-stack/resources";
import siteService from "./services/site-service";

export default ({ stack }: StackContext) => {
  const site = siteService({ stack })
  stack.addOutputs({
    siteEndpoint: site.url
  })
}
