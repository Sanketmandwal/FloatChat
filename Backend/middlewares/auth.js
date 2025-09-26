import { validatetoken } from '../services/auth.js';

const authuser = async (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) {
            return res.status(401).json({ success: false, message: "Not Authorized Login Again" })
        }
        const token_decode = await validatetoken(token);

        if (!token_decode) {
            return res.status(401).json({ success: false, message: "Invalid token" })
        }

        req.user = token_decode;
        req.body = req.body || {};
        req.body.userId = token_decode._id

        next()
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: error.message })
    }
}

export default authuser