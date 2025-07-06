import { ImproveCodeRepo } from "../Repository/ImproveCodeRepo.js";

async function ImproveCodeServ(code, model, details) {

    const prompt = `Improve the given code by improving logic or identation for visual appelaing and directly gives the final code without any
        explantion. If there are any errors may be syntax or logical, fix them and provide the final code. For indentation purpose only there will not need any 
        explantion but for other improvements please provide the explantion first and then provide fixed code.`
    + `\n\nCode:\n${code}`;

    try {
        const res = await ImproveCodeRepo(prompt, model, details);
        return res;
    } catch (error) {
        console.error("Error in ImproveCodeServ:", error);
        throw error;
    }
}

export {
    ImproveCodeServ
}