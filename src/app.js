import express from "express";
import productRoutes from "./Product/product.routes.js";
import morgan from 'morgan';
import './database/database.js'
import {config} from './config.js';



const app = express();


app.use(morgan('dev'));

app.use(express.json())
app.use(express.urlencoded({ extended: true}));
app.use('/api/v1', productRoutes)

app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})

