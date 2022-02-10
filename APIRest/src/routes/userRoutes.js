import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, userController.index);
router.get('/:id', loginRequired, userController.show);
router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index --> lista todos os usuário - GET
store/create --> cria um novo usuário - POST
delete --> apaga um usuário - DELETE
show --> mostra um usuário - GET
update --> altera um usuário - PATCH ou PUT
*/
