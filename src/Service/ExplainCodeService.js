import { ExplainCodeRepo } from "../Repository/ExplainCodeRepo.js";

async function ExplainCodeServ(codeSnippet, model, details) {

    const commandLine = "Explain the following code in detail";

    const prompt = `${commandLine} \n\n ${codeSnippet}`;

    try {
        const res = await ExplainCodeRepo(prompt, model, details);
        return res;
    } catch (error) {
        console.error("Error in ExplainCodeServ:", error);
        throw error;
    }
}

export {
    ExplainCodeServ
}