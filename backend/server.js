import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound,errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import cookieParser from 'cookie-parser';
const port = process.env.PORT || 5000;
connectDB(); //connect to mongodb
const app =express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//cookie parser middleware
app.use(cookieParser());

app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes);
app.use('/api/orders',orderRoutes);


app.get('/',(req,res) => { 
res.send('API is running....');

});

app.use(notFound);
app.use(errorHandler);
app.listen(port,() => console.log(`Server running on port ${port}`));