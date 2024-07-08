"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Article extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.Category, { foreignKey: "category_id" });
            this.belongsTo(models.User, { foreignKey: "user_id" });
        }
    }
    Article.init(
        {
            title: DataTypes.TEXT,
            price: DataTypes.INTEGER,
            desc: DataTypes.TEXT,
            category_id: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Article",
        }
    );
    return Article;
};
