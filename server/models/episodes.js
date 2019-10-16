'use strict';
module.exports = (sequelize, DataTypes) => {
  const episodes = sequelize.define('episodes', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    favorite_count: DataTypes.INTEGER,
    webtoon_id: DataTypes.INTEGER,
  }, {});
  episodes.associate = function(models) {
    episodes.belongsTo(models.webtoons, {
      as:'webtoonData',
      foreignKey: 'webtoon_id'
    })
  };
  return episodes;
};