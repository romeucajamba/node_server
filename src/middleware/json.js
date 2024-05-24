export async function json(request, response){

    const buufer = []
    
    for await(const chunk of request){ //Pegando cada pedaço do pacote(Vídeo, audio, arquivo, texto) que vem da minha requisição(Frontend)
        buufer.push(chunk)//Guardando no meu array
    }

    try {
        //Juntando todos os pedaços do pacote enviado e convertendo em string porque o buffer só permite string e convertendo tudo para JSON
         request.body = JSON.parse(Buffer.concat(buufer).toString())
    } catch {
        request.body = null
    }
    response.setHeader("Content-type", "application/json")
}