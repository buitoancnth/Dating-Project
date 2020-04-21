'use strict'

// User
module.exports = function(sequelize, Datatypes){
    let User = sequelize.define('User', {
        name: {
            type: Datatypes.STRING
        },
        email: {
            type: Datatypes.TEXT
        },
        password: {
            type: Datatypes.TEXT
        },
        role: {
            type: Datatypes.TEXT
        }
    })

    return User
}
