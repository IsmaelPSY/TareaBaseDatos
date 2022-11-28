import { Router } from "express";
import * as http from "./auth.http.js";



const router = Router()

router
  .route('/login')
  .post(
    http.loginUser
  );
router
.route('/register')
.post(
  http.registerUser
);

export default router
  