import mongoose from "mongoose";
import User from "../Schema/UserSchema.js";
import { deleteAllChatsOfUserRepo } from "./ChatRepo.js";

async function AuthRepo(userData){
    try {
        const res = await User.create(userData);
        return res;
    } catch (error) {
        console.error("Error in AuthRepo:", error);
        throw error;
    }
}

async function DeleteUserAccount(userId) {
    const session = await mongoose.startSession(); // we use session to delete user and chats together

    try {
        session.startTransaction();

        // Delete all chats also
        await deleteAllChatsOfUserRepo(userId, session);

        // Delete user
        const deletedUser = await User.findByIdAndDelete(userId, { session });

        if (!deletedUser) {
            throw new Error("User not found or already deleted.");
        }

        await session.commitTransaction();
        session.endSession();
        
        
        return { success: true, deletedUser };
    } catch (error) {
        console.error("Error in DeleteUserAccount:", error);
        throw error;
    }    
}

export {
    AuthRepo,
    DeleteUserAccount
}