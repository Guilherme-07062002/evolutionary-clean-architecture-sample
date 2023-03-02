const express = require('express')
const { teste, adicionarTarefa, removerTarefa } = require('../controllers/controller')
const router = express.Router()

// Testar conexão
//router.route('/test').get(teste)

router.route('/add_task').post(adicionarTarefa)
router.route('/del_task/:id').delete(removerTarefa)

module.exports = router