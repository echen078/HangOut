# HangOut — Social Planning Web App
A lightweight web app that helps friends coordinate hangouts, find common availability, and plan outings effortlessly.

> **Tech Stack:** React • TypeScript • Firebase (Auth, Firestore) • Tailwind CSS • Figma (Design)

---

## 🚀 Overview
**HangOut** makes group planning simple.  
Instead of endless messaging back-and-forth, HangOut provides a clean interface where users can:

- Create events
- Invite friends
- Vote on time/location options
- See a visual summary of the best choices
- Track final decisions in one place

Built with React and Firebase, the app focuses on speed, simplicity, and a smooth user experience.

---

## ✨ Features
- 👤 **User authentication** (Firebase Auth)  
- 📅 **Create & manage events**  
- 🗳️ **Voting system** for time and location options  
- 🔗 **Shareable event links**  
- 📊 **Real-time updates** via Firestore  
- 🎨 **Responsive UI** designed in Figma and implemented with Tailwind  

---

## 🖼️ Screenshots
*(Replace placeholders once you upload images)*

| Home | Event View | Voting |
|------|-------------|---------|
| ![](./screenshots/home.png) | ![](./screenshots/event.png) | ![](./screenshots/vote.png) |

---

## 🛠️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/hangout.git
cd hangout
```
### 2. Install dependencies
```bash
npm install
```
### 3. Configure Firebase

Create a .env.local file:
```ini
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```
### 4. Run the development server
```bash
npm run dev
```

---

## 📁 Project Structure
```lua
hangout/
│── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── context/
│   ├── utils/
│   └── main.tsx
│── public/
│── .env.local
│── package.json
│── tailwind.config.js
└── README.md
```

---

## 🎨 Design Process
* Low-fidelity wireframes in Figma
* High-fidelity prototypes focusing on simplicity
* Clean, rounded UI with friendly colors
* Component-driven design for modularity

---

## 🧩 Future Improvements
* 📍 Location recommendations (Maps API)
* 🧠 Smart time suggestions
* 🔔 Notifications for updates & deadlines
* 👥 Friend groups / recurring events
* 📱 Mobile app version (React Native)
