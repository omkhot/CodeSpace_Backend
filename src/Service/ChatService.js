import { 
    deleteAllChatsOfUserRepo,
    deleteChatRepo,
    getAllChatsOfUserRepo, 
    getChatByIdRepo, 
    renameChatRepo } from "../Repository/ChatRepo.js";

async function getChatByIdServ(chatId) {
    try {
        const chat = await getChatByIdRepo(chatId);
        return chat;
    } catch (error) {
        console.error("Error in getChatByIdServ:", error);
        throw error;
    }
}

async function getAllChatsOfUserServ(userId) {
    try {
        const chats = await getAllChatsOfUserRepo(userId);
        return chats;
    } catch (error) {
        console.error("Error in getAllChatsOfUserServ:", error);
        throw error;
    }
}

async function renameChatServ(chatId, newTitle) {
    try {
        const chat = await renameChatRepo(chatId, newTitle);
        return chat;
    } catch (error) {
        console.error("Error in renameChatServ:", error);
        throw error;
    }
}

async function deleteChatServ(chatId) {
    try {
        const chat = await deleteChatRepo(chatId);
        return chat;
    } catch (error) {
        console.error("Error in deleteChat:", error);
        throw error;
    }
}

async function deleteAllChatsOfUserServ(userId) {
    try {
        const chats = await deleteAllChatsOfUserRepo(userId);
        return chats;
    } catch (error) {
        console.error("Error in deleteAllChatsOfUserServ:", error);
        throw error;
    }
}

export {
    getChatByIdServ,
    getAllChatsOfUserServ,
    renameChatServ,
    deleteChatServ,
    deleteAllChatsOfUserServ
}