import dotenv from "dotenv";
dotenv.config();

// ✅ FIX: NodeNext এর নিয়ম অনুযায়ী লোকাল ইম্পোর্টে .js এক্সটেনশন যুক্ত করা হয়েছে
import app from "./app.js";
import { connectDB, client } from "./config/db.js";
import { Request, Response } from "express"; 
import { error } from "node:console";
import { ObjectId } from "mongodb";

const PORT = process.env.PORT || 5000;


const startServer = async () => {
  await connectDB();

  const db = client.db(process.env.DATABASE_NAME);

  const userCollection = db.collection("user");
 const aipostCollection = db.collection("aipost");


  app.get("/user", async (req: Request, res: Response) => {    
    const result = await userCollection.find().toArray();      
    res.json(result);
  });

// app.post("/aipost", async (req: Request, res: Response) => {
//    console.log("POST /aipost HIT");
//   const requestData = req.body;
//   const result = await aipostCollection.insertOne(requestData);
//   res.json(result);
// });

app.post("/aipost", async (req, res) => {
  const body = req.body;

  const result = await aipostCollection.insertOne(body);

  res.send(result);
});




 app.get("/aipost/email/:email", async (req: Request, res: Response) => {
    const { email } = req.params;
    const result = await aipostCollection.find({ email }).toArray();
    res.json(result);
  });

   app.delete("/aipost/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await aipostCollection.deleteOne({ _id: new ObjectId(id as string) });
    res.json(result);
  });



 app.get("/aipost/published/four", async (req: Request, res: Response) => {
    const result = await aipostCollection.find({ status: "published" }).limit(4).toArray();
    res.json(result);
  });

    app.get("/aipost/published", async (req: Request, res: Response) => {
    const { page = 1, limit = 8 } = req.query;

    const pageNumber = Number(page);
    const limitNumber = Number(limit);
    const skip = (pageNumber - 1) * limitNumber;

    const result = await aipostCollection
      .find({ status: "published" })
      .skip(skip)
      .limit(limitNumber)
      .toArray();

    const total = await aipostCollection.countDocuments({
      status: "published",
    });

    const totalPage = Math.ceil(total / limitNumber);

    console.log({
      data: result,
      page: pageNumber,
      totalPage,
      total,
    });

    res.json({
      total,
      totalPage,
      page: pageNumber,
      limit: limitNumber,
      
      data: result,
    });
  });


  app.get("/aipost/published/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await aipostCollection.findOne({
      _id: new ObjectId(id as string),
      status: "published",
    });
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