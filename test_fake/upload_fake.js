import { Readable, } from "node:stream";




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

fetch('http://localhost:8000',
    {
        method: 'POST',
        body: new ReadableStream(),
    }
)