import { randomUUID } from 'node:crypto';
import { Database } from "../db/database.js";
import { regexFunction } from '../utils/regex_function.js';

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
            const { name, email } = request.body

            const user = {
                 id: randomUUID(),
                 name,
                 email
                }

            database.insert('users', user)
            return response.writeHead(201).end(user.id)
        }
    },
    {
        method:'DELETE',
        path: '/users/:userId',
        handler: (request, response) => {
            const { id } = request.params

            database.delete('users', id)

            return response.writeHead(204).end()
        }
    },
]