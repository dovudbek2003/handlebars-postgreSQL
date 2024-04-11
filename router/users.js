// Third-party Modules
const express = require('express')
const {
    getAddUsersPage,
    addNewUser,
    getUserPageById,
    deleteUserById,
    getUpdateUserById,
    updateUserById
} = require('../controller/users')

const router = express.Router()

router.get('/add-users', getAddUsersPage)
router.get('/:id', getUserPageById)
router.get('/delete-user/:id', deleteUserById)
router.get('/update-user/:id', getUpdateUserById)
router.post('/users', addNewUser)
router.post('/update-user/:id', updateUserById)


module.exports = router
