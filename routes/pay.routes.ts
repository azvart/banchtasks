import express from 'express';
import pay_controller from '../controllers/pay.controller';
const PayRoutes = express.Router();

PayRoutes
.get('/getToken',pay_controller.GetToken)
.post('/sandbox',pay_controller.PayMethod)





export default PayRoutes;