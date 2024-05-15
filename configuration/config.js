const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(process.env.dataBaseConnection)
        .then(() => {
            console.log("dbConnected");
        })
        .catch((errors) => {
            console.log(errors.message);
        })
}