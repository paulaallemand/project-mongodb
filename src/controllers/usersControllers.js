const UserSchema = require("../models/userSchema");

const getAll = async (req, res) => {
    const allUsers = await UserSchema.find();

    res.status(200).send(allUsers);
};

module.exports = {
    getAll
};