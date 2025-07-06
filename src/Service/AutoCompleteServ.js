import { AutoCompleteCodeRepo } from "../Repository/AutoCompleteRepo.js";

async function AutoCompleteCodeServ(partialCode, context, model, details) {

    const statement = `Complete the following code snippet: ${partialCode}`;
    const reference = `The code is about the ${context}.`;

    const prompt = `${statement} ${reference}`;

    try {
        const response = await AutoCompleteCodeRepo(prompt, model, details);
        return response;
    } catch (error) {
        console.error("Error in AUtoCompleteCodeServ:", error);
        throw error;
    }

}

export {
    AutoCompleteCodeServ
};