const express = require('express')
const { teste, adicionarTarefa, removerTarefa, listarTarefas } = require('../controllers/controller')
const router = express.Router()

// Testar conexão
//router.route('/test').get(teste)

router.route('/add_task').post(adicionarTarefa)
router.route('/del_task/:id').delete(removerTarefa)
router.route('/list_tasks').get(listarTarefas)
module.exports = router