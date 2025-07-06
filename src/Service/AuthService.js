import { AuthRepo, DeleteUserAccount } from "../Repository/AuthRepo.js";
import User from "../Schema/UserSchema.js";

async function AuthServ(userData){
    console.log("AuthServ called with userData:", userData);

    // check if user already exists or not
    const userExists = await User.findOne({ email: userData.email });
    if (userExists) {
        throw new Error("User already exists");
    }

    try {
        const res = await AuthRepo({
            googleId: userData.googleId,
            email: userData.email,
            name: userData.firstName,
            profileImage: userData.profileImage,
        });
        return res;
    } catch (error) {
        console.error("Error in AuthServ:", error);
        throw error;
    }
}

async function DeleteUserAccountServ(userId) {
    try {
        const res = await DeleteUserAccount(userId);
        return res;
    } catch (error) {
        console.error("Error in DeleteUserAccountServ:", error);
        throw error;
    }
}

export {
    AuthServ,
    DeleteUserAccountServ
}