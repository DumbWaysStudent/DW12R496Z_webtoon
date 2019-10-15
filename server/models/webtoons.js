'use strict';
module.exports = (sequelize, DataTypes) => {
  const webtoons = sequelize.define('webtoons', {
    img_banner: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    favorite_count: DataTypes.INTEGER,
    create_by: DataTypes.INTEGER
  }, {});
  webtoons.associate = function(models) {
      // associations can be defined here
      webtoons.belongsTo(models.users, {
        as:'createdBy',
        foreignKey: 'create_by'
      })
  };
  return webtoons;
};