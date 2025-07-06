import { savePromptsToChat } from "./ChatRepo.js";
import SendPrompt from "./SendPromptRepo.js";

async function AutoCompleteCodeRepo(prompt, model, details) {

    const { userId, chatId, code } = details;

    try {
        const res = await SendPrompt(prompt, model);

        if(userId === null){
            return {
                return_chatId: null,
                response: res
            }
        }

        const return_chatId = await savePromptsToChat(userId, chatId, "autocomplete", code, res);
        return {
            return_chatId,
            response: res
        };
    } catch (error) {
        console.error("Error in AutoCompleteCodeRepo:", error);
        throw new Error("Failed to auto-complete code");
    }
}

export {
    AutoCompleteCodeRepo
}