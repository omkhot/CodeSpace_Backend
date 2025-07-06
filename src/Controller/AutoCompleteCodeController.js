import { AutoCompleteCodeServ } from "../Service/AutoCompleteServ.js";

async function AutoCompleteCodeController(req, res) {

    console.log("AutoCompleteCodeController called with body:", req.body);

    const { partialCode, context, model, details } = req.body;

    if (!partialCode) {
        return res.status(400).json({ 
            success: false,
            error: "Partial code is required" 
        });
    }

    try {
        const completedCode = await AutoCompleteCodeServ(partialCode, context, model, details);
        return res.status(200).json({ 
            success: true,
            data: completedCode 
        });
    } catch (error) {
        console.error("Error in AutoCompleteCodeController:", error);
        return res.status(500).json({ 
            success: false,
            error: error
        });
    }
}

export {
    AutoCompleteCodeController
}