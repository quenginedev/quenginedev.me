import { Stack, StackContext, ViteStaticSite } from "@serverless-stack/resources";

const HOSTED_ZONE = 'quenginedev.me'

export default ({ stack }: { stack: Stack }) => {
  const domainName = stack.stage === 'production' ? HOSTED_ZONE : `${stack.stage}.${HOSTED_ZONE}`
  return new ViteStaticSite(stack, "site", {
    path: 'portfolio',
    customDomain: {
      hostedZone: HOSTED_ZONE,
      domainName,
    },
  })
}