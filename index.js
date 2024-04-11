// Core Modules
const express = require("express")
const path = require('path')

// Third-party Modules
const { create } = require('express-handlebars')
const { serverPort } = require('./config/config')

const userRoutes = require('./router/users')
const mainRoutes = require('./router/main')

const app = express()

// Initialize template engine (handlebars)
const hbs = create({
    defaultLayout: 'main',
    extname: 'hbs'
})
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json()) /* for parsing application/json */
app.use(express.urlencoded({ extended: false })) /* for parsing appplication/x-www-from-urlencoded */
app.use(express.static(path.join(__dirname, 'public')))

// Router
app.use('/users', userRoutes)
app.use('/', mainRoutes)

// Not Found Route
app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})

const PORT = serverPort || 3000
app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`)
})