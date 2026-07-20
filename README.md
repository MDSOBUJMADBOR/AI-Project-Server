# 🚀 SmartAI Hub Backend

Backend API for **SmartAI Hub**, built with **Node.js**, **Express.js**, **TypeScript**, and **MongoDB**. It provides RESTful APIs for managing AI tools, users, and authentication.

![Node.js](https://img.shields.io/badge/Node.js-24-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-4-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-7-green?logo=mongodb)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)

---

# 📖 Overview

The SmartAI Hub backend powers the application by handling:

- AI Tool CRUD Operations
- User Management
- Database Communication
- RESTful API
- Secure Environment Configuration

---

# 🛠 Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- CORS
- dotenv

---

# 📂 Project Structure

```
server
│
├── src
│   ├── config
│   ├── middleware
│   ├── routes
│   ├── utils
│   ├── types
│   └── server.ts
│
├── dist
├── package.json
├── tsconfig.json
└── README.md
```

---

# 📦 Installed Packages

## Dependencies

- express
- mongodb
- mongoose
- cors
- dotenv
- jose-cjs

## Dev Dependencies

- typescript
- tsx
- ts-node-dev
- @types/node
- @types/express
- @types/cors

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/smart-ai-hub-server.git
```

Go to project directory

```bash
cd smart-ai-hub-server
```

Install dependencies

```bash
npm install
```

---

# ▶️ Run Development Server

```bash
npm run dev
```

Server runs at

```
http://localhost:5000
```

---

# 🏗 Build Project

```bash
npm run build
```

---

# ▶️ Run Production

```bash
npm start
```

---

# 🔑 Environment Variables

Create a `.env` file in the project root.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

DATABASE_NAME=smart_ai_hub
```

Example

```env
PORT=5000

MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/

DATABASE_NAME=SmartAIHub
```

---

# 📡 API Endpoints

## Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Server Status |

---

## AI Tools

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /aipost | Get All AI Tools |
| GET | /aipost/:id | Get Single AI Tool |
| POST | /aipost | Create AI Tool |
| PUT | /aipost/:id | Update AI Tool |
| DELETE | /aipost/:id | Delete AI Tool |

---

## Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /user | Get Users |
| POST | /user | Create User |

---

# 📄 Sample AI Tool JSON

```json
{
  "image": "https://images.unsplash.com/photo-example",
  "title": "ChatGPT Pro",
  "description": "Advanced AI assistant for coding and productivity.",
  "price": "$20/month",
  "rating": 4.9,
  "date": "2026-07-15",
  "location": "San Francisco, USA",
  "status": "published",
  "email": "user@example.com"
}
```

---

# 📝 Available Scripts

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

---

# 🔒 Security

- Environment Variables
- CORS Enabled
- MongoDB Connection Protection
- TypeScript Type Safety

---

# 🚀 Deployment

You can deploy this backend to:

- Render
- Railway
- Vercel Serverless
- DigitalOcean
- VPS

---

# 👨‍💻 Author

**MD SOBUJ MADBOR**

📧 Email

```
sobujmadbor660@gmail.com
```

🌐 GitHub

```
https://github.com/MDSOBUJMADBOR
```

💼 LinkedIn

```
https://www.linkedin.com/in/md-sobuj-madbor/
```

🌍 Portfolio

```
https://sobuj-madbor-portflio.vercel.app
```

---

# 📄 License

This project is licensed under the **MIT License**.

---

⭐ If you found this project useful, please give it a **Star** on GitHub!
