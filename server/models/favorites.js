'use strict';
module.exports = (sequelize, DataTypes) => {
  const favorites = sequelize.define('favorites', {
    id_user: DataTypes.INTEGER,
    id_webtoons: DataTypes.INTEGER
  }, {});
  favorites.associate = function(models) {
    favorites.belongsTo(models.webtoons, {
      as:'webtoonId',
      foreignKey: 'id_webtoons'
    })
    favorites.belongsTo(models.users, {
      as:'userId',
      foreignKey: 'id_user'
    })
  };
  return favorites;
};