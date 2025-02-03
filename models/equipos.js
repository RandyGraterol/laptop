const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexion.js');

const Equipos = sequelize.define('equipos', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    marca:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    modelo:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    catalogo:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    descripcion:{
        type: DataTypes.STRING(20),
        allowNull: false
    },
    cantidad:{
        type:DataTypes.STRING(10),
        allowNull:false
    }
},{timestamps:true});

module.exports = Equipos;