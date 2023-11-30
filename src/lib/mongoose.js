import mongoose from "mongoose"
//Creating connection to the db in order to push 
export function mongooseConnect() {
    //Checking if is already a connection made. If so we do not connect again and again to the db
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise();
    }else {
        const uri = process.env.MONGODB_URI;
        return mongoose.connect(uri)
    }
}