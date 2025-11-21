import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: '10.18.9.166',
    port: 3306,
    user: 'usr_usuario',
    password: 'Ucc2025*',
    database: 'tasksdb'
})


