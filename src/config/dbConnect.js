import mongoose from "mongoose";

async function dbConnect() {
    mongoose.connect('mongodb+srv://admin:admin123@cluster0.foopjvu.mongodb.net/livraria?retryWrites=true&w=majority');
    return mongoose.connection;
}

export default dbConnect;

