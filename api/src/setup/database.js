// Import
import { Sequelize } from 'sequelize'

// App import
import { NODE_ENV } from '../config/env'
import databaseConfig from '../config/database.json'

// Load database config
const databaseConfigENV = databaseConfig[NODE_ENV]

// Create new database connection
const connection = new Sequelize(databaseConfigENV.database, databaseConfigENV.username, databaseConfigENV.password, {
    host: databaseConfigENV.host,
    dialect: databaseConfigENV.dialect,
    logging: false
})

// Test connection
console.info('SETUP --- connectiing database...')

connection
.authenticate()
.then(() => {
    console.info('INFO - Database connected....')
})
.catch(err => {
    console.error('ERROR - Unable connect to database', err)
})

export default connection
