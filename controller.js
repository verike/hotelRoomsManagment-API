const data = require('./data');

class Controller {

    async getAllRooms () {
        return await Rooms.find({}, _v);
    }

    async addRooms (Rooms) {
        return await Rooms.create(Rooms);
    }

    async getRoomsById (Id) {
        return await Rooms.findOne({_Id: Id});
    }

    async editRoomsById(Id, data) {
        return await Rooms.findOneAndUpdate({_Id: Id}, data);
    }

    async deleteRoomsById(Id) {
        return await Rooms.findOneAndDelete({_Id: Id})
    }

}

// Exporting an instantiated controller
module.exports = new Controller();