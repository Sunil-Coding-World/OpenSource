import mongoose from "mongoose";
MONGO_URI ="mongodb+srv://dondeysunil:OpenSource@cluster0.solshcr.mongodb.net/?retryWrites=true&w=majority"
export const connectDB = async () => {
    await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
}