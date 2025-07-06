import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../Config/ServerConfig.js";
import { AuthServ, DeleteUserAccountServ } from "../Service/AuthService.js";
import User from "../Schema/UserSchema.js";

async function AuthUserController(req, res){
    console.log("AuthUserController called with body:", req.user);

    const { isNewUser, user, tempUser } = req.user;    

    try {
        if(!isNewUser){
            const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

            res.cookie("token", token, {
                httpOnly: true,
                sameSite: "None",
                secure: true, // Set to true in production with HTTPS
            });

            return res.redirect("http://localhost:5173/");
        }
        else{
            // new user -> create one in DB and then sign in it
            const newUserLogin = await AuthServ(tempUser);

            const token = jwt.sign({ id: newUserLogin._id }, JWT_SECRET, { expiresIn: "7d" });

            res.cookie("token", token, {
                httpOnly: true,
                sameSite: "None",
                secure: true, // Set to true in production with HTTPS
            });

            return res.redirect("http://localhost:5173/");
        }

    } catch (error) {
        console.error("Error in AuthUserController:", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error."
        });
    }
}

async function validateUser(req,res){
    console.log("validateUser called with body:");

    const token = req.cookies.token;

    try {
        if(!token){
            return res.status(401).json({
                success: false,
                error: "Unauthorized"
            });
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findById(decoded.id);
        if(!user){
            return res.status(401).json({
                success: false,
                error: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "User validated successfully",
            user: user
        });
    } catch (error) {
        console.error("Error during authentication:", error);
        return res.status(500).json({ 
            success: false,
            message: "Internal server error" 
        });
    }

}

async function logoutUser(req, res) {
    console.log("Logout user called");
    try {
        res.clearCookie("token");
        return res.status(200).json({
            success: true,
            message: "User logged out successfully"
        })
    } catch (error) {
        console.error("Error during logout:", error);
        return res.status(500).json({ 
            success: false,
            message: "Internal server error" 
        });
    }     
}

async function deleteUserAccountController(req, res) {
    console.log("Delete user account controller called with body:", req.params.userId);

    try {
        const result = await DeleteUserAccountServ(req.params.userId);
        return res.status(200).json({
            success: true,
            message: "User account deleted successfully",
            data: result
        });
    } catch (error) {
        console.error("Error in DeleteUserAccountController:", error);
        return res.status(500).json({
            success: false,
            error: "Internal server error."
        });
    }
}

export {
    AuthUserController,
    validateUser,
    logoutUser,
    deleteUserAccountController
}