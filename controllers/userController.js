class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async check(req, res) {
        const {id} = req.query
        res.json(id)
    }
}

//Экспортируем новый экземпляр объекта
module.exports = new UserController()