import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import ItemsRouter from './routes/items.routes';
import PayRoutes from './routes/pay.routes';
import StripeRoutes from './routes/stripe.routes';
const app = express();
const port = 5002;


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
mongoose.connect('mongodb://localhost:27017/learning',{
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('MongoDB connected successfully');
})
.catch((err)=>{
    console.error(err);
});


app.use(ItemsRouter);
app.use('/pay',PayRoutes);
app.use('/stripe',StripeRoutes);

app.listen(port,()=>{
    console.log(`Server running on port:${port}`);
});
