import { randomUUID } from 'node:crypto';
import { Database } from "../db/database.js";



//Meu banco de dados  
const database = new Database()

export const routes = [
    {
        method:'GET',
        path:'/users',
        handler: (request, response) => {
            const users = database.select('users')
            return response.end(JSON.stringify(users))
        }
    },

    {
        method:'POST',
        path:'/users',
        handler: (request, response) => {
            const { name, email } = body

            const user = {
                 id: randomUUID(),
                 name,
                 email
                }

            database.insert('users', user)
            return response.writeHead(201).end("Usuário criado!!")
        }
    },
    {
        method:'DELETE',
        path:'/users/:userId',
        handler: (request, response) => {
            return response.end()
        }
    },
]