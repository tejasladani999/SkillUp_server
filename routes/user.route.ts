import express from "express";
import {loginUser,logoutUser, activateUser, registrationUser } from "../controllers/user.controller";
import {isAuthenticated } from '../middleware/auth'

const userRouter = express.Router();

userRouter.post("/registration", registrationUser);

userRouter.post("/activation-user", activateUser);

userRouter.post("/login", loginUser);

// userRouter.get("/logout", isAuthenticated, logoutUser);

userRouter.get("/logout", logoutUser);


export default userRouter;
