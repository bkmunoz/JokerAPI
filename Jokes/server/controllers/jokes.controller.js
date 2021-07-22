const Joke = require("../models/joke.model");

//CREATE
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json(newJoke))
        .catch(err => res.json({message: "Something went wrong when creating a joke.", error: err}))
}

//READ ONE
module.exports.findOne = (req, res) => {
    Joke.find({_id: req.params._id})
        .then(oneJoke => res.json(oneJoke))
        .catch(err => res.json({message: "Something went wrong when finding one joke", error: err}))
}

//FIND ALL
module.exports.findAll = (req, res) => {
    Joke.find()
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json({message: "Something went wrong when finding all jokes", error: err}))
}

//UPDATE
module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params._id}, req.body, {new: true})
        .then(updatedJoke => res.json(updatedJoke))
        .catch(err => res.json({message: "Something went wrong when updating joke.", error: err}))
}

//DELETE
module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
        .then(deletedJoke => res.json(deletedJoke))
        .catch(err => res.json({message: "Something went wrong when deleting joke.", error: err}))
}