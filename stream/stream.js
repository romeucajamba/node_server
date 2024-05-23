/// Trabalhando com STREAM

//process.stdin.pipe(process.stdout)

import { Readable, Transform, Writable } from "node:stream";

//Trabalhando com stream de leitura
class ReadableStream extends Readable{
    
    //Método obrigatório
    //Método para retornar os dados dessa Stream
        index = 1
    _read(){
        const number = this.index++

       setTimeout(() => {
            if(number >100)
                this.push(null)
            else{
                 //Convertendo para o formato Buffor
                 //Buffer só permite String, não number
                 const buf = Buffer.from(String(number))
                this.push(buf)

             }
       }, 1000)
            
    }
}

//Stream de transformação
//Transicionando dados
//Transformando dado depois da leitura
class TransformStream extends Transform {
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString()) * -1

        callback(null,Buffer.from(String(transformed)))
    }
}
//Stream de escrita
class WriteableStream extends Writable{
    _write(chunk, encoding, callback){
        console.log(Number(chunk.toString()) * 10)
        callback()
    }
}

new ReadableStream()
.pipe(new TransformStream).pipe(new WriteableStream())