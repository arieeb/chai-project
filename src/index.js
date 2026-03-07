import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./.env"
});

connectDB()
.then(() => {
    const server=app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
    server.on("error",(error)=>{
      console.log("error:",error);
      throw error
    })
})
.catch((error) => {
  console.error("Error connecting to the database:", error);
  
})
