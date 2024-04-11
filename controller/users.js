const User = require('../model/users')
const generatedId = require('../lib/generated-id')

// Route     /add-users
// Method    GET
// Descr     Get add-users page
const getAddUsersPage = (req, res) => {
    res.render('add-users', {
        title: 'Add new user'
    })
}

// Route     /users
// Method    POST
// Descr     Add new user
const addNewUser = (req, res) => {
    const id = generatedId()
    const body = req.body
    const users = new User(id, body.username, body.age)
    users.save()

    res.redirect('/')
}

// Route     /:id
// Method    GET
// Descr     Get user page by id
const getUserPageById = (req, res) => {
    const id = req.params.id
    const user = User.findById(id)
    res.render('user-page', {
        title: 'user',
        user
    })
}

// Route     /delete-user/:id
// Method    GET
// Descr     Deleted user
const deleteUserById = (req, res) => {
    const id = req.params.id
    User.remove(id)
    res.redirect('/')
}

// Route     /update-user/:id
// Method    GET
// Descr     update form page
const getUpdateUserById = (req, res) => {
    const id = req.params.id
    const user = User.findById(id)
    res.render('update-users', {
        title: 'update user',
        user
    })
}

// Route     /update-user/:id
// Method    POST
// Descr     updated user
const updateUserById = (req, res) => {
    const id = req.params.id,
        body = req.body;

    User.update(id, body)
    res.redirect('/')
}

module.exports = {
    getAddUsersPage,
    addNewUser,
    getUserPageById,
    deleteUserById,
    getUpdateUserById,
    updateUserById
}