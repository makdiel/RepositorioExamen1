const express = require('express')
const Usuario= require('./Modelos/Usuario')
const Evento= require('./Modelos/Evento')
const cors= require('cors')

const app = express()

app.use(express.json())

app.use(cors()) 

/** metodos de consulta */
app.get('/usuario',async (req,res) =>{
    try {
        const usuario = await Usuario.findAll();
        res.status(200).json(usuario)
    } catch(error){
        res.status(500).json({'Error':'Ocurrio un error en la peticion'})
    }
})

app.get('/evento',async (req,res) =>{
    try {
        const evento = await Evento.findAll();
        res.status(200).json(evento)
    } catch(error){
        res.status(500).json({'Error':'Ocurrio un error en la peticion'})
    }
})


/** metodos de insertar registros */
app.post('/usuario', async (req, res) =>{
    try {
        console.log(req.body);
        const usuario = await Usuario.create(req.body);
        res.status(200).json(usuario)
    } catch(error) {
        res.status(500).json({'Error':'Ocurrio un error en la peticion'})
    }
})

app.post('/evento', async (req, res) =>{
    try {
        console.log(req.body);
        const evento = await Evento.create(req.body);
        res.status(200).json(evento)
    } catch(error) {
        res.status(500).json({'Error':'Ocurrio un error en la peticion'})
    }
})

/** metodos de actualizar registros */

app.put('/usuario/:id', async (req,res) => {
    try {
        const [updated] = await Usuario.update(req.body,{
            where : {id: req.params.id}
        })
        if (updated){
            res.status(200).json({'mensaje':'Registro actualizado'})
        }else {
            res.status(500).json({'Error':'Registro no Encontrado'})
        }
    } catch (error) {
        res.status(500).json({'Error':'Ocurrio un error en la peticion'})
    }
})

app.put('/evento/:id', async (req,res) => {
    try {
        const [updated] = await Evento.update(req.body,{
            where : {id: req.params.id}
        })
        if (updated){
            res.status(200).json({'mensaje':'Registro actualizado'})
        }else {
            res.status(500).json({'Error':'Registro no Encontrado'})
        }
    } catch (error) {
        res.status(500).json({'Error':'Ocurrio un error en la peticion'})
    }
})

/** metodos de eliminar registros */

app.delete('/usuario/:id', async(req,res)=>{
    try {
        const deleted = await Usuario.destroy({
            where: {id: req.params.id}
        })
        res.status(200).json({'mensaje':'eliminado correctamente'})
    } catch (error) {
        res.status(500).json({'mensaje':'Ocurrio un error'})
    }
})

app.delete('/evento/:id', async(req,res)=>{
    try {
        const deleted = await Evento.destroy({
            where: {id: req.params.id}
        })
        res.status(200).json({'mensaje':'eliminado correctamente'})
    } catch (error) {
        res.status(500).json({'mensaje':'Ocurrio un error'})
    }
})


app.listen(5000, ()=>{
    console.log('Aplicacion ejecutando en el puerto 5000')
})