import { Router } from "express";
import user from "../models/user.js";
import validator from 'validator';
import authuser from "../middlewares/auth.js";
import { createtokenforuser } from "../services/auth.js";

const userrouter = Router();

userrouter.post('/signup', async (req, res) => {
    const { name, email, password, profession } = req.body;
    if (!name || !email || !password || !profession) {
        return res.json({ success: false, message: "Invalid Creditials" })
    }

    if (!validator.isEmail(email)) {
        return res.json({ success: false, message: "Enter Valid Email" })
    }

    try {
        const existinguser = await user.findOne({ email });
        if (existinguser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const newuser = new user({ name, email, password, profession });
        await newuser.save();
        const token = createtokenforuser(newuser);
        return res.json({ success: true, token })
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
})

userrouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const curuser = await user.findOne({ email })

        if (!curuser) {
            return res.json({ success: false, message: "No User Found of this email please Register" })
        }
        const token = await user.matchPassword(email, password);
        return res.json({ success: true, token })
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'Invalid Credentials' });
    }
})

userrouter.get('/getuser', authuser, async (req, res) => {
    try {
        const { userId } = req.body

        const userData = await user.findById(userId).select('-password')

        res.json({ success: true, userData })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
})

export default userrouter;