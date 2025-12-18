const mongoose = require('mongoose');

const connectDatabase = async () => {
     const connect = await mongoose.connect(process.env.DB_URL);
     console.log(`MongoDB is connected : ${connect.connection.host}`);
};

module.exports = connectDatabase;