import axios from "axios";
import { Groq_API_Key } from "../Config/ServerConfig.js";

async function SendPrompt(prompt, model){

    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Groq_API_Key}`
    };

    const url = "https://api.groq.com/openai/v1/chat/completions";

    const selectedModel = model || "llama3-8b-8192";

    console.log("Selected model:", selectedModel);

    const data = {
        model: selectedModel,
        messages: [
            {role : "system", content: "You are an expert code and technology assistant."},
            {role : "user", content: prompt}
        ],
        temperature: 0.4,
    };

    try {
        const res = await axios.post(url, data, { headers });
        return res.data.choices[0].message.content;
    } catch (error) {
        console.error("Error sending prompt:", error);
        throw new Error("Failed to send prompt to Groq API");
    }
}

export default SendPrompt;