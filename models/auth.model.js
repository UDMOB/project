import mongoose from "mongoose";

const newUser = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
})

const User = mongoose.model("valueUser", newUser);
export default User;