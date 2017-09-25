const Sequelize = require('sequelize')
const db = require('../db')

const Yogi = db.define('yogi', {
  name:{
    type: Sequelize.STRING
  },
  quote:{
    type: Sequelize.TEXT
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING
  },
  difficulty: {
    type: Sequelize.ENUM,
    values: ['beginner', 'beginner-intermediate', 'intermediate', 'advanced'],
    defaultValue: 'beginner'
  },
  costPerClass: {
    type: Sequelize.INTEGER
  },
  imageUrl: {
    type: Sequelize.STRING
  },
  clarifaiId: {
    type: Sequelize.STRING
  }
})

module.exports = Yogi

