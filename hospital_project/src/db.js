const mongoose = require('mongoose');

module.export = async function  connection () {
    try{
        const connectionParams = {
            useNewUrlParse: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }
        await mongoose.connect(process.env.Db, connectionParams)
        console.log('Connected to database.')
    }catch (erre) {
        console.log(error);
        console.log('Could not connect to database.');
    }
};