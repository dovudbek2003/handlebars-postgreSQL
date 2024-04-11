// Core Module
const path = require('path')
const fs = require('fs')
const pool = require('../config/pg')

// users.json file path
const pathToFile = path.join(__dirname, '..', 'db', 'users.json')

module.exports = class User {
    constructor(id, username, age) {
        this.username = username;
        this.age = age;
    }

    async save() {
        console.log('save');
        const text = 'INSERT INTO user_info(username, age) VALUES($1, $2)'
        const values = [this.username, this.age]
        await pool.query(text, values)
    }

    static async findAll() {
        const result = await pool.query('select * from user_info')
        // console.log('findAll result =>', result)

        return result.rows
    }

    static async findById(id) {
        const result = await pool.query('select * from user_info where id = $1', [id])
        // console.log('findById result =>', result);
        return result.rows[0]
    }

    static async remove(id) {
        await pool.query('delete from user_info where id = $1', [id])
    }

    static async update(id, dto) {
        const text = 'update user_info set username = $2, age = $3 where id = $1'
        const values = [id, dto.username, dto.age]
        await pool.query(text, values)
    }
}