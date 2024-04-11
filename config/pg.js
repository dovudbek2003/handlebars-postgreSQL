const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'sql36883235',
    database: 'user_list',
    host: 'localhost',
    port: 5432
})

module.exports = pool;
