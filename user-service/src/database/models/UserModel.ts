import mongoose, { Schema, Document } from "mongoose";
import validator from "validator";

export interface IUser extends Document{
    name:string;
    email:string;
    password:string;
    createdAt:Date;
    updatedAt:Date;
}

const UserSchema : Schema = new Schema({
    name:{
        type:String,
        trim:true,
        minlength:3,
        required:[true, "Name must be provided"],
    },
    email:{
        type:String,
        trim:true,
        lowercase:true,
        unique:true,
        required:true,
        validate:[validator.isEmail,"Please provide a valid email."]
    },
    password:{
        type:String,
        trim:true,
        required:[true, "Password must be provided"],
        minlength:8
    },
},{
    timestamps:true
})


const User = mongoose.model<IUser>("User",UserSchema)
export default User;