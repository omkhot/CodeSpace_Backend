import Chat from "../Schema/ChatSchema.js";

async function savePromptsToChat(userId, chatId, actionType, code, aiResponse){
    try {
        const interaction = {
            actionType: actionType,
            inputCode: code, 
            aiResponse: aiResponse
        };

        let chat;

        if(chatId){
            // means chat already exists so add interaction to it
            chat = await Chat.findByIdAndUpdate(
                chatId,
                { $push: { interactions: interaction } },
                { new: true }
            );
            return chat._id;
        }
        else{
            // means chat doesn't exist so create a new one
            const count = await Chat.countDocuments({user : userId});
            const title = `Chat ${count+1}`;

            chat = await Chat.create({
                title: title,
                user: userId,
                interactions: [interaction]
            });

            return chat._id;

        }
    } catch (error) {
        console.error("Error in savePromptsToChat:", error);
        throw error;
    }
}

async function getChatByIdRepo(chatId) {
    try {
        const chat = await Chat.findById(chatId);
        return chat;
    } catch (error) {
        console.error("Error in getChatById:", error);
        throw error;
    }
}

async function getAllChatsOfUserRepo(userId) {
    try {
        const chats = await Chat.find({ user: userId }).sort({ createdAt: -1 });
        return chats;
    } catch (error) {
        console.error("Error in getAllChats:", error);
        throw error;
    }
}

async function renameChatRepo(chatId, newTitle) {
    try {
        const chat = await Chat.findByIdAndUpdate(chatId, { title: newTitle }, { new: true });
        return chat;
    } catch (error) {
        console.error("Error in renameChat:", error);
        throw error;
    }
}

async function deleteChatRepo(chatId) {
    try {
        const chat = await Chat.findByIdAndDelete(chatId);
        return chat;
    } catch (error) {
        console.error("Error in deleteChat:", error);
        throw error;
    }
}

async function deleteAllChatsOfUserRepo(userId, session) {
    try {
        const chats = await Chat.deleteMany({ user: userId }, { session: session });
        return chats.deletedCount;
    } catch (error) {
        console.error("Error in deleteAllChatsOfUser:", error);
        throw error;
    }
}

export {
    savePromptsToChat,
    getChatByIdRepo,
    getAllChatsOfUserRepo,
    renameChatRepo,
    deleteChatRepo,
    deleteAllChatsOfUserRepo
}