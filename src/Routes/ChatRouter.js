import { 
    deleteAllChatsOfUserController,
    deleteChatController,
    getAllChatsOfUserController, 
    getChatByIdController, 
    renameChatController } from "../Controller/ChatController.js";
import express from "express";

const ChatRouter = express.Router();

ChatRouter.get('/:chatId', getChatByIdController);

ChatRouter.get('/user/:userId', getAllChatsOfUserController);
ChatRouter.put('/rename/:chatId', renameChatController);

ChatRouter.delete('/:chatId', deleteChatController);
ChatRouter.delete('/user/:userId', deleteAllChatsOfUserController);

export default ChatRouter;