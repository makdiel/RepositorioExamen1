const { DataTypes } = require('sequelize')
const sequelize= require('../bd/Connection.js')

const Usuario = sequelize.define('usuario',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING
    },
    pass:{
        type:DataTypes.STRING
    },
    tipo:{
        type:DataTypes.STRING
    }
},
{
    tableName:'Usuario',
    timestamps:false
}
)

module.exports=Usuario;