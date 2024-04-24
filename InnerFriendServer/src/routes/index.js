const userRouter = require("./user.route.js")
const router = require("express").Router()
const homeRouter = require("./home.route.js")

router.get('/', homeRouter)

router.use('/api/users', userRouter)

module.exports = router