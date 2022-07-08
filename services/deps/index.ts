import { asFunction, createContainer } from 'awilix'
import createConnect from '../db'

const container = createContainer<Deps>()
container.register('connect', asFunction(createConnect).scoped())

export default container