const { getTodosLivros, getLivrosPorId } = require("../servicos/livros")

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id
        const livro = getLivrosPorId(id)
        res.send(livro)
    } catch {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros, getLivro
}