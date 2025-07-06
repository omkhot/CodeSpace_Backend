import mongoose from "mongoose";

const InteractionSchema = new mongoose.Schema({
    actionType: {
        type: String,
        enum: ['explain', 'find_bugs', 'autocomplete', 'improve'],
        required: true
    },
    inputCode: {
        type: String,
        required: true,
        trim: true
    },
    aiResponse: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


const ChatSchema = new mongoose.Schema({
    title:{
        type: String, 
        trim: true
    },
    interactions :[InteractionSchema],    
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }, 

},{
    timestamps: true
});

const Chat = mongoose.model("Chat", ChatSchema);

export default Chat;