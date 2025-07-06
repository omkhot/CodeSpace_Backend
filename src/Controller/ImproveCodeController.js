async function ImproveCodeController(req, res) {

    console.log("ImproveCodeController called with body:", req.body);

    const { code, model, details } = req.body;

    if (!code) {
        return res.status(400).json({ 
            success: false,
            error: "Code is required" 
        });
    }

    try {
        const { ImproveCodeServ } = await import("../Service/ImproveCodeService.js");
        const improvedCode = await ImproveCodeServ(code, model, details);
        return res.status(200).json({ 
            success: true,
            data: improvedCode 
        });
    } catch (error) {
        console.error("Error in ImproveCodeController:", error);
        return res.status(500).json({ 
            success: false,
            error: error
        });
    }
}

export default ImproveCodeController;