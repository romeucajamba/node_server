import http from "node:http";
import { json } from "./middleware/json.js";
import { routes } from "./routes/routes.js";




const server = http.createServer(async (request, response) => {
    const { method, url } = request

    //Middleware com a funcionalidade de 'Stream' leitura, transformação e escrita dos pacotes(Vídeo, audio)
   await json(request, response)

   const route = routes.find(route => {
        return route.method == method && route.path == url
   })

   if(route){
     const routeParams = request.url.match(route.path)
     request.params = { ...routeParams.groups}


    return route.handler(request, response)
   }

   return response.writeHead(404).end()
       
})

server.listen(3000)