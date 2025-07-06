import { FindTheBugRepo } from "../Repository/FindTheBugRepo.js";

async function FindTheBugServ(codeSnippet, reference, model, details) {

    const commandLine = "Find the bug in the following code snippet and explain it in detail and give the solution to fix it";
    const referenceText = "The code is related to " + reference;

    const prompt = `${commandLine} and ${referenceText} \n\n ${codeSnippet}`;
    try {
        const res = await FindTheBugRepo(prompt, model, details);
        return res;
    } catch (error) {
        console.error("Error in FindTheBugServ:", error);
        throw error;
    }    
}

export {
    FindTheBugServ
}