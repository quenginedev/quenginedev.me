import {Schema, model} from "mongoose";

const PageHitSchema = new Schema({
    domain: String,
    page: String,
    referredBy: String,
    ip: String,
    userAgent: String,
    version: String,
}, {
    timestamps: true,
})

PageHitSchema.index({createdAt: 1}, {expireAfterSeconds: 2160000})

export const pageHitModel = model('PageHit', PageHitSchema)
