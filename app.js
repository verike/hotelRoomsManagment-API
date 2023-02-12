const express = require('express');
require('dotenv').config();
const constant = require('./constant');
const database = require('./database');
const controller = require('./controller');

// Creating app
const app = express();
const {MESSAGES} = constant;

app.use(express.json);

const PORT = process.env.PORT || 8000;

// Base API
app.get('/hotel', (req, res) => {
    res.status(200).send({Message : MESSAGES.Fetched, success : true})
});

// Fetch all the rooms by name, price and roomType
app.get('./hotel/api/v1/Rooms?search=room1&Standard&500', async (req, res) => {
    try {
        const user = await controller.getAllRooms(Rooms);
        res.status(200).send({Message : MESSAGES.Fetched, success : true, data : user})
    } catch (err) {
        res.status(404).send({Message : MESSAGES.Error, success : false})
    }
})

app.get('/hotel/api/v1/Rooms?search=room3&Premium&1500', async(req, res) => {
    try{
        const user = await controller.getAllRooms(Rooms);
        res.status(200).send({Message : MESSAGES.Fetched, success : true, data: user})
    }catch (err) {
        res.status(404).send({Message : MESSAGES.Error, success : false})
    }
})

app.get('/hotel/api/v1/Room?search=room7&Premium&1500', async(req, res) => {
    try{
        const user = await controller.getAllRooms(Rooms);
        res.status(200).send({Message : MESSAGES.Fetched, success : true, data: user});
    }catch (err) {
        res.status(404).send({Message : MESSAGES.Error, success : false});
    }
})

//editing a room by it's Id

app.patch(`/hotel/api/v1/Rooms`, async(req, res) => {
    try{
        const {Id} = req.params;
        const Room =req.Room;
        const data = await controller.editRoomsById(Id, Room);
        res.status(301).send({Message : MESSAGES.Updated, success : true, data})
    }catch(err) {
        res.status(404).send({Message : MESSAGES.Error, success : false})
    }
})

//Delete a room using it's Id

app.delete(`/hotel/api/v1/Rooms`, async(req, res) => {
    try{
        const Id = req.params;

        const data = await controller.deleteRoomsById(Id)
        res.status(200).send({Message : MESSAGES.Deleted, success : true, data})
    }catch(err) {
        res.status(404).send({Message : MESSAGES.Error, success : false})
    }
})


//Getting a room by it's Id

app.get(`/hotel/api/v1/Rooms`, async(req, res) => {
    try{
        const Id = req.params;

        const data = await controller.getRoomsbyId(Id)
        res.status(200).send({Message : MESSAGES.Fetched, success : true, data : user})
    }catch (err) {
        res.status(500).send({Message : MESSAGES, success : false})
    }
})


// Creating app listening port
app.listen(PORT,'localhost', () => {
    database();
    console.log(`server started on port ${PORT}`);
})

// module.export = app