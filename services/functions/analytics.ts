import {APIGatewayProxyHandlerV2} from 'aws-lambda'
import {recordPageHit} from "../deps/analytics/record-page-hit";

export const siteHits: APIGatewayProxyHandlerV2 = async ({body, requestContext: {http: {sourceIp: ip, userAgent}}}) => {
    if (!body) return {statusCode: 400, body: 'No payload'}
    const payload = JSON.parse(body)
    await recordPageHit({...payload, ip, userAgent})
    return {statusCode: 200}
}