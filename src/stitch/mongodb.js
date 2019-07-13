import { RemoteMongoClient } from 'mongodb-stitch-browser-sdk'
import { app } from './app'

const mongoClient = app.getServiceClient(
  RemoteMongoClient.factory,
  'mongodb-atlas'
)

const items = mongoClient.db(process.env.VUE_APP_STITCH_DB).collection('wvalues')

export { items }
