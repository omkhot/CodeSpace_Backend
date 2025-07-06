import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    googleId: { 
        type: String, 
        unique: true,
        sparse: true
    },
    name: { 
        type: String, 
        trim: true, 
        lowercase: true 
    },
    email: { 
        type: String, 
        required: true, 
        trim: true, 
        lowercase: true, 
        unique: true 
    },
    password: { 
        type: String, 
        trim: true 
    },
    profileImage:{
        type: String,
        default: null
    }
},{
    timestamps: true
});

const User = mongoose.model("User", UserSchema);
export default User;