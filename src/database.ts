import mongoose from "mongoose";

const DBMONGO = "mongodb+srv://user:pass@cluster0.ndaa3.mongodb.net/dbintro?retryWrites=true&w=majority"; 
const DATABASE = "dbintro"; 

export async function startConnection(){
    await mongoose.connect(DBMONGO,{
        dbName:DATABASE,
    });
}