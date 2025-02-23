const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(
    'gestioneventos',
    'root',
    'ServerAcceso.1',
    {
        host:'localhost',
        port:3306,
        dialect:'mysql'
    }
)

sequelize.authenticate()
    .then(()=> console.log('Conexion Exitosa'))
    .catch(err=> console.log('Ocurrio un error'+err))

module.exports= sequelize