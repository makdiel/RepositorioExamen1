const { DataTypes } = require('sequelize')
const sequelize= require('../bd/Connection.js')

const Eventos = sequelize.define('eventos',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING
    },
    direccion:{
        type:DataTypes.STRING
    } ,
    fechaInicio:{
        type:DataTypes.DATE
    },
    fechaFinal:{
        type:DataTypes.DATE
    },
    estado:{
        type:DataTypes.INTEGER
    },
    comentario:{
        type:DataTypes.STRING
    }
    
},

{
    tableName:'eventos',
    timestamps:false
}
)

module.exports=Eventos;