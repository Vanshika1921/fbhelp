# 📩 Facebook Helpdesk Clone – Richpanel Assignment

A full-stack Helpdesk simulation web app inspired by Richpanel. Agents can connect a (simulated) Facebook page, view and reply to customer messages using a clean three-panel UI. Built with React, Node.js, Firebase, and Meta Developer tools.

---

## 🔧 Tech Stack

### 💻 Frontend
- ReactJS (Vite)
- Tailwind CSS
- Component-based architecture

### 🖥️ Backend
- Node.js
- Express.js
- Firebase Admin SDK
- Ngrok (for testing webhooks with Meta)

### ☁️ Firebase
- Firebase Authentication (Email-based)
- Firebase Firestore (for chat, user data, metadata)

---

## 🌐 Meta Developer Integration

- ✅ Created a Meta for Developers **student account**
- ✅ Built an app named **RichHelpdesk**
- ✅ Enabled permissions:
  - `pages_messaging`
  - `pages_manage_metadata`
- ✅ Added Webhooks (callback URL using **Ngrok**)
- ⚠️ **Note**: Meta restricts real message access in dev mode, so the app simulates all chat logic using Firebase

---

## ✨ Features

- ✅ Email-based login (via Firebase Auth)
- ✅ Three-panel dashboard UI:
  - **Sidebar**: List of conversations
  - **Center**: Chat thread view with messages
  - **Right Panel**: Customer profile info
- ✅ Simulated Facebook Page connection
- ✅ Send and view replies (Firestore-based)
- ✅ Webhook simulation using Meta + Ngrok
- ✅ Clean and responsive UI

---

## 🔥 Firebase Structure

### Firestore Collections:
- `users/` → Agent/customer profiles
- `conversations/` → Chat session metadata
- `messages/` → Threaded message data

### Auth:
- Email/password login for support agents

---

## 🛠️ Local Setup Instructions

### 🔹 Frontend

```bash
cd fb-helpdesk-frontend
npm install
npm run dev

🔹 Backend
bash
Copy
Edit
cd fbhelpdesk-backend
npm install
node index.js
Expose the backend for Meta webhook testing:

bash
Copy
Edit
ngrok http 5000
Copy the HTTPS URL provided by Ngrok and paste it as the Webhook callback URL in your Meta Developer App settings.

📝 Notes
Meta Developer Mode does not allow actual message delivery, so conversations are simulated using Firebase.

Despite this, the full stack architecture reflects a real-world helpdesk integration.

📬 Contact
Built with ❤️ by Vanshika Mavi
For queries or collaborations, feel free to reach out.
