# 🛠️ DataStraw Support CRM

A full-stack Customer Relationship Management & Support Ticket platform engineered to streamline issue tracking, customer queries, and support workflows. Built with a modern React frontend and a Node.js/Express REST API backed by MongoDB.

![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-blue)
![NodeJS](https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB%20Atlas-brightgreen)
![Deployment](https://img.shields.io/badge/Hosted%20On-Render-informational)

---

## 📌 Project Overview

**DataStraw Support CRM** provides support teams with a clean, centralized workspace to manage customer tickets, track ticket status transitions in real-time, and assign priority levels. The system features a responsive, dark-mode user interface designed for high efficiency and seamless API performance.

---

## 🔗 Live Application & Links

* 🌐 **Live Application:** [https://datastraw-support-crm-frontend-sit0.onrender.com](https://datastraw-support-crm-frontend-sit0.onrender.com)
* 📡 **Backend API Endpoint:** `[https://datastraw-support-crm.onrender.com](https://datastraw-support-crm-b4v3.onrender.com)`
* 📁 **GitHub Repository:** [https://github.com/karkera-saakshi/datastraw-support-crm](https://github.com/karkera-saakshi/datastraw-support-crm)

---

## 📸 Application Preview

<!-- SCREENSHOT_SECTION_START -->
### Dashboard Overview
<img width="1536" height="726" alt="image" src="https://github.com/user-attachments/assets/64db189d-2916-445d-9019-9c8dc6807606" />


### Create Ticket
<img width="1536" height="726" alt="image" src="https://github.com/user-attachments/assets/be13d18c-bb22-44de-a865-c6d94bc17d5d" />


### Detailed Ticket Page
<img width="1536" height="729" alt="image" src="https://github.com/user-attachments/assets/72ff2cf4-1177-4e64-922b-f1cb6b96c2e7" />

---

## ✨ Key Features

* **Ticket Management & Tracking:** Create, edit, search support tickets with real-time state updates.
* **Status & Priority Categorization:** Organize tickets by statuses (*Open*, *In Progress*, *Closed*) and priority levels (*Low*, *Medium*, *High*).
* **Modern UI/UX:** Optimized theme built using React component hierarchy and clean layout design.
* **RESTful API Backend:** Express server implementing operations with asynchronous MongoDB handling.

---

## 🛠️ Tech Stack

### **Frontend**
* **Framework:** React 18 with Vite
* **Routing:** React Router DOM
* **HTTP Client:** Axios 
* **Icons & Styling:** CSS3 (Flexbox/Grid)

### **Backend**
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB Atlas
* **Environment Management:** `dotenv`, `cors`

---

## 📁 Project Structure

```text
datastraw-support-crm/
├── frontend/
│   └── project-crm/            # React + Vite client app
│       ├── src/
│       │   ├── components/     # Reusable UI components
│       │   ├── pages/          # App views/routes
│       │   ├── App.jsx         # Root component & routing setup
│       │   └── main.jsx        # Entry point
│       ├── public/             # Static assets & favicon
│       ├── index.html          # HTML entry point
│       └── package.json
        └── .gitignore
│
└── backend/                    # Node.js + Express API server
    ├── models/                 # Mongoose schemas (Ticket, User)
    ├── routes/                 # Express route handlers
    ├── controllers/            # Controller logic
    ├── server.js               # Express application server
    └── package.json
    ├── .env.example/           # Contains variable names needed
    └── .gitignore
```

## ⚙️ Local Development Setup

Follow these step-by-step instructions to clone, configure, and run the project locally on your machine.

### Prerequisites

Ensure you have the following installed on your local system:
* [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
* [npm](https://www.npmjs.com/) (comes bundled with Node.js)
* [Git](https://git-scm.com/)
* A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (or a locally running MongoDB server)

---

### Step 1: Clone the Repository

Open your terminal and clone the repository to your local machine:

```bash
git clone https://github.com/karkera-saakshi/datastraw-support-crm.git
cd datastraw-support-crm
```
### Step 2: Set Up & Run the Backend API

1. Navigate to the backend directory
```bash
cd backend
```

2. Install backend dependencies
```bash
npm install
```

3. Create a .env file in the backend folder
```bash
type NUL > .env
```

4. Add your environment variables inside backend\.env
```bash
echo PORT=9000 > .env
echo MONGO_URI=your_mongodb_connection_string >> .env
echo NODE_ENV=development >> .env
```

5. Start the backend development server
```bash
node server.js
```

### Step 3: Set Up & Run the React Frontend

1. Open a new Command Prompt window and navigate to the frontend directory
```bash
cd frontend\project-crm
```

2. Install frontend dependencies
```bash
npm install
```

3. Start the Vite development server
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

