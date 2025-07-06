import SendPrompt from "./SendPromptRepo.js";
import { savePromptsToChat } from "./ChatRepo.js";

async function ImproveCodeRepo(prompt, model, details) {

    const { userId, chatId, code } = details;
    try {
        const res = await SendPrompt(prompt, model);

        if(userId === null){
            return {
                return_chatId: null,
                response: res
            }
        }

        const return_chatId = await savePromptsToChat(userId, chatId, "improve", code, res);
        return {
            return_chatId,
            response: res
        };
    } catch (error) {
        console.error("Error in ImproveCodeRepo:", error);
        throw error;
    }
}

export {
    ImproveCodeRepo
}


