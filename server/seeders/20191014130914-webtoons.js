'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('webtoons', [
      {
        img_banner: 'https://via.placeholder.com/1080',
        title: 'Webtoon 1',
        description: 'lorem ipsum dkfjdsofdsjfosdjfodsf',
        favorite_count: 42,
        create_by:1
      },
      {
        img_banner: 'https://via.placeholder.com/1020',
        title: 'Webtoon 2',
        description: '1 dosdp orem ipsum dkfjdsofdsjfosdjfodsf',
        favorite_count: 22,
        create_by:1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('webtoons', null, {});
  }
};
