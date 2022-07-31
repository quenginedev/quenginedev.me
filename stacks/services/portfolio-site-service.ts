import {Stack, StackContext, ViteStaticSite} from "@serverless-stack/resources";
import {HOSTED_ZONE} from "../config";

export default ({stack}: { stack: Stack }, environment: { [key: string]: string }) => {
    const domainName = stack.stage === 'production' ? HOSTED_ZONE : `${stack.stage}.${HOSTED_ZONE}`
    return new ViteStaticSite(stack, "site", {
        path: 'portfolio',
        environment,
        customDomain: {
            hostedZone: HOSTED_ZONE,
            domainName,
        },
    })
}