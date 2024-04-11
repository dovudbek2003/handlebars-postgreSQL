const User = require('../model/users')

// Route    /
// Method   GET
// Descr    Get main page
const getMainPage = async (req, res) => {
    const users = await User.findAll()
    res.render('main', {
        title: 'User list',
        users
    })
}

module.exports = { getMainPage }