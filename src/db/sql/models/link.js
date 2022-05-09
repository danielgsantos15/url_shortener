const Sequelize = require('sequelize')
const database = require('../index')

const Link = database.define('link', {
  id: {
    type: Sequelize.INTEGER,
    auroIncrement: true,
    aloowNull: false,
    primaryKey: true
  },
  code: {
    type: Sequelize.STRING,
    allowNull: false
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  hits: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: 0
  }
})

module.exports = Link
