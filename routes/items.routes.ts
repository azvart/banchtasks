import controller from '../controllers/items.controller';
import express from 'express';

const ItemsRouter = express.Router();

ItemsRouter
.post('/add',controller.AddItem)
.get('/all',controller.AllItem)
.get('/:id',controller.GetCurrent)
.post('/pay',controller.Payment)

export default ItemsRouter;