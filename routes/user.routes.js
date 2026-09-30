const express = require('express')
const { attachUser, checkApiKey } = require('../middleware/auth.middleware')
const { getProfile, getHome, getUserDetail, createUser, getUsers, getUser, updateUser, deleteUser, testError } = require('../controllers/user.controller')
const { getTickets, getTicketsDetail, createTickets } = require('../controllers/ticket.controller')
const { getProduct, getProductDetail } = require('../controllers/product.controller')
const router = express.Router()

router.get("/profile",attachUser, getProfile)

router.get("/",getHome)


router.get("/users", getUsers)
router.get("/users/:id", getUser)
// router.get("/users/:id", getUserDetail)
router.post("/users", createUser)
router.put("/users/:id", updateUser)
router.delete("/users/:id", deleteUser)

router.get("/tickets",getTickets)
router.get("/tickets/:id",getTicketsDetail)
router.post("/tickets",createTickets)

router.get("/products",checkApiKey, getProduct)
router.get("/products/:id",checkApiKey, getProductDetail)

router.get("/testerror",testError)

module.exports = router