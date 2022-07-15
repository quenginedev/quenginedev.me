import { Stack, StackContext, ViteStaticSite } from "@serverless-stack/resources";

const HOSTED_ZONE = 'quenginedev.me'

export default ({ stack }: { stack: Stack }) => {
  return new ViteStaticSite(stack, "site", {
    path: 'app',
    customDomain: {
      hostedZone: HOSTED_ZONE,
      domainName: HOSTED_ZONE,
    },
  })
}