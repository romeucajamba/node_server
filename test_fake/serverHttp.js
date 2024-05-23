import http from 'node:https';
import { Transform } from "node:stream";

class TransformStream extends Transform {
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString()) * -1

        callback(null, Buffer.from(String(transformed)))
    }
}

const server = http.createServer((request, response) => {
    return request.pipe(new TransformStream).pipe(response)
})

server.listen(8000)