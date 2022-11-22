import sequelize from "sequelize";
import db from "../db/db.js";

const {DataTypes} = sequelize
const Inscription = db.define("Inscription", {
    id_inscription: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    Nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Tel: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    }

});

export default Inscription;
