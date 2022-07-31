import mongoose from 'mongoose'
import type {Mongoose} from 'mongoose'
import {MONGO_URI} from '../config'


let conn: Mongoose | null = null
const uri = MONGO_URI || 'mongodb://localhost:27017'

const connect = async () => {
    if (conn === null) {
        conn = await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 5000
        })
    }
    return conn
}

export default connect