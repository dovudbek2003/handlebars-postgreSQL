// Core Module
const path = require('path')
const fs = require('fs')

// users.json file path
const pathToFile = path.join(__dirname, '..', 'db', 'users.json')

module.exports = class User {
    constructor(id, username, age) {
        this.id = id;
        this.username = username;
        this.age = age;
    }

    save() {
        fs.readFile(pathToFile, 'utf8', (err, data) => {
            if (err) throw err;
            const users = JSON.parse(data) || [];
            users.push(this);

            fs.writeFile(pathToFile, JSON.stringify(users), (err) => {
                if (err) throw err
            })
        })
    }

    static findAll() {
        const data = fs.readFileSync(pathToFile, 'utf8')
        return JSON.parse(data) || []
    }

    static findById(id) {
        const users = this.findAll()
        const user = users.find(item => item.id === id)
        return user
    }

    static remove(id) {
        let users = this.findAll()
        users = users.filter(item => item.id !== id)
        fs.writeFileSync(pathToFile, JSON.stringify(users))
    }

    static update(id, dto) {
        const user = this.findById(id)
        user.username = dto.username;
        user.age = dto.age;

        this.remove(id)
        const users = this.findAll()
        users.push(user)
        fs.writeFileSync(pathToFile, JSON.stringify(users))
    }
}