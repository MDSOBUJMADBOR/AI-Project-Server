
import express from "express";
import cors from "cors";

const app = express();

// ✅ FIX: লাইভ ফ্রন্টএন্ডের CORS এবং Credentials পলিসি হ্যান্ডেল করার জন্য কনফিগারেশন
app.use(cors({
  origin: 'http://localhost:3000', // শুধুমাত্র আপনার ফ্রন্টএন্ড ডোমেইন
  credentials: true, // কুকি/টোকেন পারমিট করার জন্য
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

export default app;

