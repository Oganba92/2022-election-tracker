const User = require('../../models/user');
const Election = require('../../models/election');


module.exports = {
    getAll,
    create,
    deleteElections
};
async function getAll(req,res) {
    const elections = await Election.find({
        user: req.user._id
    });
    res.json(elections);
}

async function create(req,res) {
    req.body.user = req.user._id;
    const election = await Election.create(req.body);
    res.json(election);
}

async function deleteElections(req, res) {
    await Election.deleteMany({
        user: req.user._id
    });
    res.json("Deleted Elections");
};