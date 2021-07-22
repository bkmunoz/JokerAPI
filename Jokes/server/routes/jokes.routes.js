const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
    //CREATE
    app.post("/api/jokes/new", JokeController.createJoke);
    //FIND ONE
    app.get("/api/jokes/:_id", JokeController.findOne);
    //FIND ALL
    app.get("/api/jokes", JokeController.findAll);
    //UPDATE
    app.put("/api/jokes/update/:_id", JokeController.updateJoke);
    //DELETE
    app.delete("/api/jokes/delete/:_id", JokeController.deleteJoke);
}