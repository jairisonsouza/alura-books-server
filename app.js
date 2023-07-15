const express = require("express")
const rotaLivro = require('./rotas/livros')
const rotaFavorito = require('./rotas/favoritos')
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors({origin:"*"}))

const port = 8000

app.use('/livros', rotaLivro)
app.use('/favoritos', rotaFavorito)

app.listen(port, () => {
    console.log(`Escutando na porta ${port}`)
})