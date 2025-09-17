import jwt from "jsonwebtoken";
import { Types } from "mongoose";

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "No token" })

    }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        if (!Types.ObjectId.isValid(decode.id)) {
            return res.status(401).json({ message: "T" })

        }
        req.user = { id: decode.id }
        next()

    } catch (error) {
        return res.status(401).json({ message: "ERROR" })
    }
}

export default authMiddleware