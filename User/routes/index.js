import express from "express";

const router = express.Router();
import { loginController, registerController, userController, refreshController, logoutController } from '../controllers';
import admin from "../middlewares/admin";
import auth from "../middlewares/auth";

// Auth Routes
router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.get('/me', auth, userController.me);
router.get('/posts', auth, userController.post);
router.post('/refreshToken', refreshController.refresh);
router.post("/logout", auth, logoutController.logout);



export default router;