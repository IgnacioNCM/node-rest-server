const { response } = require('express');

const userGet = (req, res = response) => {

    const query = req.query;

    res.json({
        msg: 'get API - controller',
        query
    });
}

const userPost = (req, res = response) => {

    //const body = req.body; -> se puede realizar de esta manera, pero es mejor desestructurando
    const { nombre, edad } = req.body; //desestructuracion
    res.json({
        msg: 'get API - post-controller',
        //bodyNom: body.nombre, -> se puede desestructurar
        nombre,
        edad

    });
}

const userPut = (req, res = response) => {
    const id = req.params.id;

    res.json({
        msg: 'get API - controller',
        id
    });
}

const userPatch = (req, res = response) => {
    res.json({
        msg: 'get API - controller'
    });
}

const userDelete = (req, res = response) => {
    res.json({
        msg: 'get API - controller'
    });
}


module.exports = {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete
}