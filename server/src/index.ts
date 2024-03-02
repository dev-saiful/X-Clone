import { initServer } from "./app";
import dotenv from "dotenv";
dotenv.config();
async function startServer()
{
const PORT = process.env.PORT || 8001;
const app = await initServer();
app.listen(PORT,()=>{
    console.log(`localhost:${PORT}`);
})
}

startServer();