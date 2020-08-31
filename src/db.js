const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("movie", "postgres", "admin", {
  dialect: "postgres"
});

class Movie extends Model {
}

Movie.init(
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    text: DataTypes.STRING
  },
  {
    sequelize,
    modelName: "movies"
  }
);

sequelize.sync();

module.exports = {
  Movie
};
