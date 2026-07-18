import dotenv from "dotenv";
dotenv.config();

// ✅ FIX: NodeNext এর নিয়ম অনুযায়ী লোকাল ইম্পোর্টে .js এক্সটেনশন যুক্ত করা হয়েছে
import app from "./app.js";
import { connectDB, client } from "./config/db.js";
import { Request, Response } from "express"; 

const PORT = process.env.PORT || 5000;


const startServer = async () => {
  await connectDB();

  const db = client.db(process.env.DATABASE_NAME);

  const userCollection = db.collection("user");



  app.get("/user", async (req: Request, res: Response) => {    
    const result = await userCollection.find().toArray();      
    res.json(result);
  });






    app.get("/", (req: Request, res: Response) => {
    res.send("Server is running fine!");
  });

  app.listen(PORT, () => {
    console.log(`Server Running ${PORT}`);
  });


}

startServer();