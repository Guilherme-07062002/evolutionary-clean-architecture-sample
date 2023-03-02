const express = require('express')
const { teste } = require('../controllers/controller')
const router = express.Router()

router.route('/list').get(teste)

module.exports = router