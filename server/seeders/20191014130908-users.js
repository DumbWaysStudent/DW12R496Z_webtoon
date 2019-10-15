'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email: 'admin@gmail.com',
        password: 'rahasia',
        name: 'Ademin'
      },
      {
        email: 'jhon.doe@gmail.com',
        password: 'secret',
        name: 'Jhon Doe'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};