import { ExplainCodeServ } from "../Service/ExplainCodeService.js";

async function ExplainCodeController(req, res) {

    console.log("ExplainCodeController called");

    const { code, model, details } = req.body;

    if (!code) {
        return res.status(400).json({ 
            success: false,
            error: "Code snippet is required" 
        });
    }

    try {
        const response = await ExplainCodeServ(code, model, details);
        return res.status(200).json({ 
            success: true, 
            explanation: response 
        });
    } catch (error) {
        console.error("Error in ExplainCodeController:", error);
        return res.status(500).json({ 
            success: false,
            message: "An error occurred while processing your request",
            error: error
        });
    }
}

export default ExplainCodeController;