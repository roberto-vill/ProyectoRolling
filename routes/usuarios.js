const {Router} = require ('express')

const router = Router();
const {

  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,

}= require('../controllers/usuarios')



//GET usuarios
router.get("/", usuariosGet);

//POST usuarios
router.post('/', usuariosPost);

//PUT usuarios
router.put('/:id', usuariosPut);

//DELETE usuarios
router.delete('/:id', usuariosDelete);


module.exports = router




