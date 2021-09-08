const {Router} = require ('express')
const {check} = require ('express-validator')
const {validarCampos} = require("../middlewares/validar-campos")
const {pizzaExiste} = require("../helpers/db-validatos")


const router = Router();
const {

  pizzasGet,
  pizzasPost,
  pizzasPut,
  pizzasDelete,

}= require('../controllers/pizzas')



//GET pizzas
router.get("/", pizzasGet);

//POST pizzas
router.post('/',
[check("nombre", "El Nombre es obligatorio").not().isEmpty().trim(),
check("nombre").custom(pizzaExiste),
check("precio", "El precio es obligatorio").not().isEmpty(),
check("detalle", "El detalle es obligatorio").not().isEmpty(),
check("categoria", "No es una categoria válida").isIn(["Normal", "Light"]),
validarCampos


],
 pizzasPost);

//PUT pizzas
router.put('/:id',
[check("nombre").custom(pizzaExiste),
check("categoria", "No es una categoria válida").isIn(["Normal", "Light"]),
validarCampos


],

pizzasPut);

//DELETE pizzas
router.delete('/:id', pizzasDelete);


module.exports = router