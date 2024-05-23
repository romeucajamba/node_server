/// Trabalhando com STREAM

//process.stdin.pipe(process.stdout)

import { Readable } from "node:stream";

class WorkWithStream extends Readable{
    
    //Método obrigatório
    //Método para retornar os dados dessa Stream
        index = 1
    _read(){
        const number = this.index++

        if(number >100)
            this.push(null)
        else{
            //Convertendo para o formato Buffor
            const buf = Buffer.from(String(number))
            this.push(buf)

        }
            
    }
}

new WorkWithStream().pipe(process.stdout)