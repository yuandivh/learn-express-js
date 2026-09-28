const express = require('express')
const { attachUser, checkApiKey } = require('../middleware/auth.middleware')
const { getProfile, getHome, getUserDetail, createUser } = require('../controllers/user.controller')
const { getTickets, getTicketsDetail, createTickets } = require('../controllers/ticket.controller')
const { getProduct } = require('../controllers/product.controller')

const router = express.Router()

router.get("/profile",attachUser, getProfile)

router.get("/",getHome)

router.get("/tickets",getTickets)
router.get("/tickets/:id",getTicketsDetail)
router.post("/tickets",createTickets)

router.get("/users/:id", getUserDetail)
router.post("/users", createUser)

router.get("/products",checkApiKey, getProduct)

module.exports = router