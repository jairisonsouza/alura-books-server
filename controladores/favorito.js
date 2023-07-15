const { getTodosFavoritos, insereFavoritos, deletaFavoritoPorId } = require("../servicos/favoritos")

function getFavoritos(req, res) {
    try {
        const livros = getTodosFavoritos()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id
        insereFavoritos(id)
        res.status(201)
        res.send("Livro inserido com sucesso!")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorito(req, res) {
    try {
        if (id && Number(id)) {
            const id = req.params.id
            deletaFavoritoPorId(id)
            res.send("Favorito removido com sucesso")
        } else {
            res.status(422)
            res.send("ID Inválido!")
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito,
}