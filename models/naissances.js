import sequelize from "sequelize";
import db from "../db/db.js";

const {DataTypes} = sequelize
const Naissance = db.define("naissances", {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }

});

export default Naissance;
