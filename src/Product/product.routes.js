import { Router } from "express";
import * as http from "./product.http.js";
import passport from "passport";
import { passports } from "../utils/auth.js";

passports(passport)

const router = Router()

router
  .route('/product')
  .get(
    passport.authenticate('jwt', { session: false }),
    http.listProduct
  )
  .post(
    http.postProduct
  );

router
  .route('/product/:id')
  .get(
    passport.authenticate('jwt', { session: false }),
    http.getProduct
  )
  .put(
    http.updateProduct
  )
  .delete(
    http.deleteProduct
  );

export default router
  