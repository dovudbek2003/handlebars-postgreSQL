const User = require('../model/users')

// Route    /
// Method   GET
// Descr    Get main page
const getMainPage = (req, res) => {
    const users = User.findAll()
    res.render('main', {
        title: 'User list',
        users
    })
}

module.exports = { getMainPage }