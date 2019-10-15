'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('images', [
      {
        images: 'https://via.placeholder.com/1080',
        id_episode: 1,

      },
      {
        images: 'https://via.placeholder.com/1020',
        id_episode: 1,

      },
      {
        images: 'https://via.placeholder.com/1020',
        id_episode: 1,

      },      
      {
        images: 'https://via.placeholder.com/1020',
        id_episode: 2,

      }, 
      {
        images: 'https://via.placeholder.com/1020',
        id_episode: 2,

      }, 
      {
        images: 'https://via.placeholder.com/1020',
        id_episode: 2,

      },                   
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('images', null, {});
  }
};
