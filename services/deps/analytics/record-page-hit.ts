import connect from "../../db";
import {pageHitModel} from "../../db/schema/page-hit";

type RecordPageHit = (options: {
    domain: string,
    page: string,
    referredBy?: string,
    ip: string,
    userAgent?: string,
    version?: string,
}) => Promise<{
    data?: any,
    error?: any,
}>

export const recordPageHit: RecordPageHit = async (payload) => {
    await connect();
    await pageHitModel.create(payload)
    return {data: true}
}