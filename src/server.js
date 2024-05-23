import http from "node:http";

const users = []


const server = http.createServer(async (request, response) => {
    const { method, url } = request

    if(method === "GET" && url === "/users")
        
        return response.setHeader("Content-type", "application/json").end(JSON.stringify(users))

    if(method === "POST" && url === "/users"){
        const { name, email } = body

        users.push({
            id:1,
            name,
            email
         })
    }
       
        return response.writeHead().end("Usuário criado!!")
})

server.listen(3333)