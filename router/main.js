const express = require('express')
const { getMainPage } = require('../controller/main')

const router = express.Router()

router.get('/', getMainPage)

module.exports = router