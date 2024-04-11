const dotenv = require('dotenv');

// Initial env variables
dotenv.config()

module.exports = {
    serverPort: process.env.PORT
}