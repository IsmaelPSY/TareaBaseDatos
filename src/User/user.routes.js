import { Router } from "express";
import * as http from "./user.http.js";

const router = Router()

router
  .route('/admin/user')
  .get(
    http.listUser
  )
  .post(
    http.postUser
  )
router
    .route('/admin/user/:id')
  .get(
    http.getUser
  )
  .put(
    http.updateUser
  )
  .delete(
    http.deleteUser
  );

export default router
  