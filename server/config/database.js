import mongoose from "mongoose";
export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://dondeysunil:OpenSource@cluster0.solshcr.mongodb.net/?retryWrites=true&w=majority", {
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