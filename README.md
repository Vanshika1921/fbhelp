# 📩 Facebook Helpdesk Clone – Richpanel Assignment

This is a full-stack web application simulating a **Facebook Helpdesk System**, inspired by Richpanel. Agents can (virtually) connect a Facebook Page, view conversations, and respond to customer queries — built with React, Express, Firebase, and Meta Developer tools.

---

## 🚀 Live Preview

- **Frontend**: _Will be deployed soon on Vercel_
- **Backend**: _Run locally using Node.js and Firebase_
- **Demo Mode**: All Facebook messaging is simulated using Firebase Firestore

---

## 🧠 Summary

This project demonstrates my ability to build full-stack applications with third-party integrations. Though direct Facebook chat access isn't permitted in Meta test mode, I simulated real chat scenarios using Firebase.

---

## 📁 Folder Structure

```bash
richpanelassi/
├── fb-helpdesk-frontend/           # Frontend – React + Tailwind + Vite
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js

├── fbhelpdesk-backend/            # Backend – Node.js + Express + Firebase
│   ├── routes/
│   ├── firebaseService.js
│   ├── webhook.js
│   ├── index.js
│   ├── package.json
│   └── .gitignore
🔧 Tech Stack
💻 Frontend
ReactJS (Vite)

Tailwind CSS

Component-based architecture

🖥️ Backend
Node.js

Express.js

Firebase Admin SDK

Ngrok (for testing webhooks with Meta)

☁️ Firebase
Firebase Authentication (Email-based)

Firebase Firestore (for chat, user data, metadata)

🌐 Meta Developer Integration
✅ Created a Meta for Developers student account

✅ Built an app named RichHelpdesk

✅ Enabled permissions:

pages_messaging

pages_manage_metadata

✅ Added Webhooks (callback URL using Ngrok)

⚠️ Since Meta limits message access in test mode, all chat logic is simulated using Firebase

✨ Features
✅ Email-based login (Firebase Auth)

✅ Three-panel dashboard UI:

Sidebar: List of conversations

Center: Chat thread view with messages

Right Panel: Customer profile

✅ Simulated Facebook Page connection

✅ Send and view replies (Firestore-based)

✅ Webhook simulation for Meta app testing

✅ Clean UI with responsive layout

🔥 Firebase Structure
Firestore stores:

users/: Agent/customer profiles

conversations/: List of chats

messages/: Threaded message content

Auth:

Email/password login for support agents
