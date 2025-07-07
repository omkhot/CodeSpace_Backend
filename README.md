# 🌐 CodeSpace – Backend

**CodeSpace** is a full stack **MERN based AI code assistant web application**, mainly designed to reduce the prompt time of developers when they paste their code on various AI models like ChatGPT, deepSeek, Gemini etc.

Whether you want to understand, debug, complete, or improve your code — CodeSpace does it all with just one click.

---


## ✨ Key Highlights of Web Application

- 🔐 Google OAuth Authentication

- ⚡️ One-click AI Actions:
- - Code Explanation
- - Bug Fixing
- - Auto Completion
- - Code Improvement

- 💡 Multiple AI Model Support (switch between models)

- 💾 Prompt History Tracking (chat saving)

- 🌓 Dark/Light Theme Toggle

- 🎯 Personalized Editor Settings

---

## 🚀 Features

- 📁 Scalable MVC + Service + Repository structure
- 🔐 Google OAuth	          Fast and secure login using Google
- 🧠 AI Integration	          Integration with Groq to facilitate AI API requests
- 🧠 Secure and RESTful endpoint architecture
- 💬 Code Analysis	          Get code explanation, logic understanding, or suggestions instantly
- 🐞 Bug Detection & Fixing	  Detect common bugs and get AI-generated fixes
- 🔧 Auto Completion	      Complete partial or unfinished code snippets smartly
- ✨ Code Improvement	     Optimize and enhance code formatting, logic, and syntax
- 🧾 Prompt History	          Save and revisit previous prompts and AI responses

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **JWT** for authentication
- **Bcrypt.js** for password hashing
- **CORS** for cross-origin resource sharing
- **dotenv** for environment configuration
- **Groq + OpenAI** for AI model integration

---

## 🗂️ Folder Stucture

```php
CodeSpace_Backend/
├── src/
│   ├── controllers/        # Business logic for routes
│   ├── routes/             # API endpoint definitions
│   ├── schema/             # Mongoose schemas and data models
│   ├── services/           # APIs for AI, OAuth, DB operations
│   ├── utils/              # Helpers (logger, response formatting)
│   ├── index.js              # Express app setup
│   └── repository/      # MongoDB connection 
|   ├── config/                 # Configurational setups
├── .env                    # environment variables
├── package.json            # NPM scripts and dependencies
└── README.md               # This file

```
---

## ⚙️ Installation

### 🔧 Prerequisites

- Node.js & npm installed
- MongoDB Atlas or local MongoDB setup
- Groq Account and API secret key
### 📦 Setup

```bash
# Clone the repo
git clone https://github.com/omkhot/CodeSpace_Backend.git
cd CodeSpace_Backend

# Install dependencies
npm install

# Start the server (development mode)
npm start

---
### Environment variables
- create the .env file in project root directory with- 
PORT=your_port_number
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
MONGO_URI=your_mongodb_connection_uri
JWT_SECRET=your_jwt_secret
Groq_API_Key=your_groq_api_key
FRONTEND_URL=http://localhost:5173 or deployed frontend URL

---

##📦 Deployment

-This project is deployed on Render platform
-Deployed Link: https://codespace-backend-n9n6.onrender.com





