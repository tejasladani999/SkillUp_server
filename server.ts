import { app } from "./app";
import connectDB from "./utils/db"
require("dotenv").config();


// Create Server
app.listen(process.env.PORT, () => {
    console.log(`server is connected with port ${process.env.PORT}`);
    connectDB();
});