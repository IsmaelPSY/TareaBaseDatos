import express from "express";
import router from "./routes/routes";
import morgan from 'morgan';
const app = express();


app.use(morgan('dev'));

app.use(express.json())
app.use(express.urlencoded({ extended: false}));
app.use(router)

export default app;
