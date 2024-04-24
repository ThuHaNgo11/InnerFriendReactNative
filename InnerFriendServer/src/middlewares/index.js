import { verify } from "jsonwebtoken"
import { findById } from "../models/user.model"

const authentication = async (req, res, next) => {
    // when logged in successfully -> backend will give the client a token
    const bearerToken = req.headers.authorization 

    if (!bearerToken) {
        return res.status(401).json({ message: "You have not logged in!" })
    }

    const token = bearerToken.split(" ")[1] // Bearer token
    try {
        const checkToken = verify(token, process.env.JWT_SECRET_KEY)
        const userId = checkToken.id
        const user = await findById(userId)
        if (!user) {
            return res.status(401).json({ message: "You have not logged in!" })
        }
        req.user = user
        req.userId = userId
        next()
    } catch (error) {
        return res.status(401).json({ message: "You have not logged in!" })
    }
}

export default {
    authentication
};