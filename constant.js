const constant = {
    DataBase_URI : process.env.DataBase_URI,

    DataBases: {
        Rooms: 'Rooms',
    },

    UserTypes: {
        User: 'User',
        Agent: 'Agent',
    },

    Messages: {
        Fetched: 'Resources fetched successfully.',
        Update: 'Resource is updated.',
        Error: 'Error occured.',
        Created: 'Resource created successfully.',
        Deleted: 'Resource is deleted successfully.',

    }

}

module.exports = constant;