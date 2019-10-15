'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('episodes', [
      {
        title: 'Webtoon 1',
        description: 'lorem ipsum dkfjdsofdsjfosdjfodsf',
        favorite_count: 42,
        webtoon_id: 1
      },
      {
        title: 'Webtoon 2',
        description: '1 dosdp orem ipsum dkfjdsofdsjfosdjfodsf',
        favorite_count: 22,
        webtoon_id: 1
      },
      {
        title: 'Webtoon 3',
        description: '1 dosdp orem ipsum dkfjdsofdsjfosdjfodsf',
        favorite_count: 22,
        webtoon_id: 1
      },
      {
        title: 'Webtoon 4',
        description: '1 dosdp orem ipsum dkfjdsofdsjfosdjfodsf',
        favorite_count: 22,
        webtoon_id: 2
      },
      {
        title: 'Webtoon 5',
        description: '1 dosdp orem ipsum dkfjdsofdsjfosdjfodsf',
        favorite_count: 22,
        webtoon_id: 2
      },
      {
        title: 'Webtoon 6',
        description: '1 dosdp orem ipsum dkfjdsofdsjfosdjfodsf',
        favorite_count: 22,
        webtoon_id: 2
      },
      {
        title: 'Webtoon 4',
        description: '1 dosdp orem ipsum dkfjdsofdsjfosdjfodsf',
        favorite_count: 22,
        webtoon_id: 1
      },
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episodes', null, {});
  }
};
