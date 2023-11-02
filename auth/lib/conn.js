import mongoose from "mongoose";

//const CONN_URI = "mongodb+srv://developervick:<password>@cluster0.xrmyary.mongodb.net/?retryWrites=true&w=majority"

const connectDB = mongoose.connect(process.env.MONGODB_CONN_STRING, {
}).then(()=>{

    console.log("Database Connected")
}).catch((err)=>{
    console.log("Database Connection error")
    console.log(err)
})

export default connectDB