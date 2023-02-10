const Sequelize = require('sequelize')
const sequelize = new Sequelize('postapp', 'root', 'XX2020xx', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}