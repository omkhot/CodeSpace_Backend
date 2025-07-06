import { 
    deleteAllChatsOfUserServ,
    deleteChatServ,
    getAllChatsOfUserServ, 
    getChatByIdServ, 
    renameChatServ } from "../Service/ChatService.js";

async function getChatByIdController(req,res){
    console.log("Get chat by id controller hits wiht id:", req.params.chatId);

    try {
        const response = await getChatByIdServ(req.params.chatId);
        return res.status(200).json({
            success: true,
            data: response
        })
    } catch (error) {
        console.log("Error in getChatByIdController:", error);
        return res.status(500).json({
            success: false, 
            error: error
        });
    }
}

async function getAllChatsOfUserController(req, res) {
    console.log("Get all chats of user controller hits wiht id:", req.params.userId);
    
    try {
        const response = await getAllChatsOfUserServ(req.params.userId);
        return res.status(200).json({
            success: true,
            data: response
        })
    } catch (error) {
        console.log("Error in getAllChatsOfUserController:", error);
        return res.status(500).json({
            success: false, 
            error: error
        });
    }
}

async function renameChatController(req, res) {
    console.log("Rename chat controller hits wiht id:", req.params.chatId, "and new title:", req.body.newTitle);
    
    try {
        const response = await renameChatServ(req.params.chatId, req.body.newTitle);
        return res.status(200).json({
            success: true,
            data: response
        })
    } catch (error) {
        console.log("Error in renameChatController:", error);
        return res.status(500).json({
            success: false, 
            error: error
        });
    }
}

async function deleteChatController(req, res) {
    console.log("Delete chat controller hits wiht id:", req.params.chatId);
    
    try {
        const response = await deleteChatServ(req.params.chatId);
        return res.status(200).json({
            success: true,
            data: response
        })
    } catch (error) {
        console.log("Error in deleteChatController:", error);
        return res.status(500).json({
            success: false, 
            error: error
        });
    }
}

async function deleteAllChatsOfUserController(req, res) {
    console.log("Delete all chats of user controller hits wiht id:", req.params.userId);
    
    try {
        const response = await deleteAllChatsOfUserServ(req.params.userId);
        return res.status(200).json({
            success: true,
            data: response
        })
    } catch (error) {
        console.log("Error in deleteAllChatsOfUserController:", error);
        return res.status(500).json({
            success: false, 
            error: error
        });
    }
}

export {
    getChatByIdController,
    getAllChatsOfUserController,
    renameChatController,
    deleteChatController,
    deleteAllChatsOfUserController
}