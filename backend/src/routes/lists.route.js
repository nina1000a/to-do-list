import express, { json } from 'express';
import * as listsController from '../controllers/lists.controller.js'
const router = express.Router();

router.get('/', listsController.getLists)
router.get('/:id',listsController.getList)
router.post('/',listsController.createList)
router.put('/',listsController.updateList)
router.delete('/:id',listsController.deleteList)
router.post('/:id/tasks',listsController.createTask)
router.delete('/:listId/tasks/:taskId',listsController.deleteTask)
router.put('/:listId/tasks',listsController.updateTask)

export default router;