import mongoose from 'mongoose'

let conn
const uri = 'mongodb://localhost:27017'

const createConnect = () => async () => {
  if (conn === null) {
    conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000
    })
  }

  return conn
}

export default createConnect