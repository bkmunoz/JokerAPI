const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/joker_api", {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(() => console.log("I have found the mongoose."))
    .catch(err => console.log("Oh no, lost the mongoose.", err))