import { Router } from "express";
import * as http from "./product.http.js";



const router = Router()

router
  .route('/product')
  .get(
    http.listProduct
  )
  .post(
    http.postProduct
  );

export default router
  