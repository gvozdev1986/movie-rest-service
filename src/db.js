const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("movie", "webadmin", "CPVcgr42126",
  {
    dialect: "postgres",
    host: "node59841-movie-rest-service.mycloud.by",
    logging: console.log,
    define: {
      timestamps: false
    }
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
