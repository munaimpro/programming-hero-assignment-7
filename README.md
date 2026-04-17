# 🚀 KeenKeeper

A modern **Friendship Management & Interaction Tracking Web App** built with React.

KeenKeeper helps users keep track of meaningful relationships by logging interactions like calls, texts, and video chats. It provides a visual timeline, analytics dashboard, and friend management system to help maintain strong social connections.

The project focuses on  **component-based architecture, state management with Context API, interactive UI, and data visualization using charts**.

---

# 🌐 Live Website

🔗 Live Site: [https://keen-keeper-munaimpro.netlify.app/](https://keen-keeper-munaimpro.netlify.app/)

---

# 🛠 Technologies Used

* React.js
* React Router DOM
* Tailwind CSS
* DaisyUI
* JavaScript (ES6+)
* React Toastify
* Recharts
* Context API
* JSON (for mock friend data)

---

# ✨ Features

## 👥 Friend Management System

Users can view a list of friends loaded from a JSON dataset with:

* Profile picture
* Name
* Email
* Tags
* Relationship status
* Contact history info

Clicking a friend opens a  **detailed profile page**.

---

## 📞 Quick Interaction Logging

Users can log interactions instantly:

* Call 📞
* Text 💬
* Video 🎥

Each action:

* Adds a new timeline entry automatically
* Stores interaction type, date, and friend name
* Shows toast notification feedback

---

## 📜 Timeline System

A dedicated timeline page shows:

* All recorded interactions
* Type-based icons (Call/Text/Video)
* Date formatting
* Filter system (Call, Text, Video, All)

---

## 📊 Friendship Analytics Dashboard

A visual analytics page built with Recharts:

* Pie chart showing interaction distribution
* Call vs Text vs Video breakdown
* Real-time updates from interaction data

---

## 👤 Friend Details Page

Each friend has a dedicated profile page including:

* Personal information card
* Relationship bio
* Status badge (Overdue / Almost Due / On Track)
* Stats (Days since contact, goal, next due date)
* Relationship goal tracker
* Quick check-in buttons

---

## 🔔 Smart Notifications

Toast notifications are used for:

* Interaction logging (Call/Text/Video)
* User feedback actions

---

## 📱 Fully Responsive Design

The application is fully optimized for:

* Desktop 💻
* Tablet 📱
* Mobile 📱

---

## 🧭 Navigation System

Built with React Router:

* Home
* Timeline
* Stats
* Friend Details Page
* 404 Not Found Page

---

## 📦 Data System

* Friend data stored in `friends.json`
* Context API used for global timeline state
* Dynamic filtering and rendering

---

## 🎯 Future Improvements

* Persistent database (MongoDB / Firebase)
* User authentication system
* Friend reminder notifications
* Advanced analytics (weekly/monthly trends)
* Search & sorting in timeline
* Edit/Delete interaction logs
