import app from "./src/app.js"
import conexao from './infra/conexao.js'

const PORT = 3000

//Fazer a conexão
conexao.connect((erro) =>{
    if (erro) {
        console.log(erro)
    } else {
        console.log("Conexão realizada com suceesso!")
        app.listen(PORT, () => {
            console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
        })
    }
})

//Escutar a porta 3000
