'use strict'


module.exports = {
   up: async (queryInterface, Sequelize) => {
       await queryInterface.createTable('users', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type:Sequelize.STRING,
          alowNull: false,
       },
        email: {
          type:Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: false,
        },
        admin: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
          allowNull: false,
        },
       })
   },
   
  down:async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users')
   
  },
}