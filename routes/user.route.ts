import express from "express";
import { activateUser, registrationUser } from "../controllers/user.controller";
import { actionTypes } from "react-redux-firebase";

const userRouter = express.Router();

userRouter.post("/registration", registrationUser);

userRouter.post("/activation-user", activateUser);

export default userRouter;
