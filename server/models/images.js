'use strict';
module.exports = (sequelize, DataTypes) => {
  const images = sequelize.define('images', {
    images: DataTypes.STRING,
    id_episode: DataTypes.INTEGER
  }, {});
  images.associate = function(models) {
    images.belongsTo(models.episodes, {
      as:'idEpisode',
      foreignKey: 'id_episode'
    })
  };
  return images;
};