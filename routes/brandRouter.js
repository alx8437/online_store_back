const Router = require('express')
const brandController = require('../controllers/brandController')

//create router object
const router = new Router()

router.post('/', brandController.create)
router.get('/', brandController.getAll)

// TODO: Delete method should be add


module.exports = router


