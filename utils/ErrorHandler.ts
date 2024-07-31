class ErrorHandler extends Error {
    statusCode: Number;
    constructor(Message, statusCode:Number){
        super(Message);
        this.statusCode = statusCode;

        Error.captureStackTrace(this,this.constructor);
    }
}

export default ErrorHandler;