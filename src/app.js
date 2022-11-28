import express from "express";
import productRoutes from "./Product/product.routes.js";
import userRoutes from "./User/user.routes.js";
import authRoutes from "./Auth/auth.routes.js";
import morgan from 'morgan';
import './database/database.js'
import {config} from './config.js';
import cors from "cors";
const port = config.port || 8080

const app = express();


app.use(morgan('dev'));

app.use(express.json())
app.use(cors())

app.use(express.urlencoded({ extended: true}));
app.use('/api/v1', productRoutes)
app.use('/api/v1', userRoutes)
app.use('/api/v1', authRoutes)

app.listen(port, () => {
    console.log(`Server started at port ${config.port}`)
})

