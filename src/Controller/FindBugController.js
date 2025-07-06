import { FindTheBugServ } from "../Service/FindTheBugService.js";

async function FindTheBugController(req, res) {

    console.log("FindTheBugController called with body:", req.body);

    const { code, referenceText, model, details } = req.body;

    if (!code) {
        return res.status(400).json({ 
            success: false,
            error: "Code snippet is required." 
        });
    }

    try {
        const result = await FindTheBugServ(code, referenceText, model, details);
        return res.status(200).json({
            success: true,
            message: "Bug found successfully.",
            data: result
        });
    } catch (error) {
        console.error("Error in FindTheBugController:", error);
        return res.status(500).json({ 
            success: false,
            error: "Internal server error.",
            msg: error
        });
    }
}

export default FindTheBugController;