import express from 'express';
import stripe_controller from '../controllers/stripe.controller';

const StripeRoutes = express.Router();


StripeRoutes
.post('/stripe_pay',stripe_controller.Payment)
.post('/stripe_get_token',stripe_controller.GetToken)













export default StripeRoutes;

