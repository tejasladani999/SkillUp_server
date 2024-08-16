import express from "express";
import {loginUser,logoutUser, activateUser, registrationUser } from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.post("/registration", registrationUser);

userRouter.post("/activation-user", activateUser);

userRouter.post("/login", loginUser);

userRouter.get("/logout", logoutUser);


export default userRouter;
