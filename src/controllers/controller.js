module.exports = {
    async teste(request, response){
        try {
           return response.status(200).json('Deu certo.')
        } catch (error) {
            response.status(400).send(error)
        }
    }
}