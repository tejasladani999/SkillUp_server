import { Request,Response, NextFunction } from "express";
import userModel from "../models/user.model";
import ErrorHandler from "../utils/ErrorHandler";
import { CatchAsyncError } from "../middleware/catchAsyncError";


// Register User
interface IRegistrationBody{
    name: string;
    email: string;
    password:string;
    avatar?:string;
}

export const registrationUser = CatchAsyncError(async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {name,email,password} = req.body;

        const isEmailExist = await userModel.findOne({email});
        if(isEmailExist) {
            return next(new ErrorHandler("Email already exist",400));
        };
        const user:IRegistrationBody ={
            name,
            email,
            password,
        }
    } catch (error:any) {
        return next(new ErrorHandler(error.message,400))
    }
});