# 🏠 **HomePro – Household Services Finder**

Live Demo: **[https://household-services24.netlify.app/](https://household-services24.netlify.app/)**

HomePro is a modern, fully responsive Household Services Finder application designed to help users browse, book, and manage home services with ease. Built with a clean UI, smooth animations, and Firebase authentication, this app ensures a seamless and interactive experience.

---

## ✨ **Features at a Glance**

* 🔐 **Firebase Authentication** (Email/Password)
* 📋 **Service Listings** with full CRUD operations
* 🧾 **Bookings System** (User ↔ Provider)
* 📱 **Fully Responsive** for all devices
* 🎨 **Modern UI** using Tailwind CSS + DaisyUI
* ✨ **Smooth Animations** using AOS
* ⚠️ **Custom Alerts/Modals** using SweetAlert2
* 🔄 **Loading State** with Spinner / Skeleton
* 🚫 **Custom 404 Error Page**

> **Note:** Email verification exists but is *not yet implemented*.

---

## 🛠️ **Tech Stack**

### **Frontend**

* React.js
* Tailwind CSS
* DaisyUI
* AOS Animation
* SweetAlert2

### **Authentication**

* Firebase Authentication

### **Hosting**

* Netlify

### **Backend / Database**

* (Depends on your setup — typically Express.js + MongoDB)

---

## 🗃️ **Database Structure**

### **Collections**

#### **Services**

| Field         | Type     | Description            |
| ------------- | -------- | ---------------------- |
| _id           | ObjectId | Unique ID              |
| service_name  | String   | Name of the service    |
| description   | String   | Details                |
| price         | Number   | Cost                   |
| category      | String   | Service category       |
| image         | String   | Image URL              |
| providerEmail | String   | Service provider email |
| rating        | Number   | Average rating         |
| createdAt     | Date     | Timestamp              |

#### **Bookings**

| Field     | Type     | Description                           |
| --------- | -------- | ------------------------------------- |
| _id       | ObjectId | Unique ID                             |
| serviceId | ObjectId | References Services._id               |
| userEmail | String   | Firebase user email                   |
| date      | Date     | Booking date                          |
| timeSlot  | String   | Selected time                         |
| status    | String   | pending/confirmed/completed/cancelled |
| createdAt | Date     | Timestamp                             |

### 🔗 **Relations**

* `Bookings.userEmail` ↔ Firebase user email
* `Bookings.serviceId` ↔ `Services._id`

---

## 📁 **Recommended Folder Structure**

```bash
/homepro
├─ public/
├─ src/
│  ├─ components/
│  ├─ pages/
│  ├─ assets/
│  ├─ App.jsx
│  └─ index.jsx
├─ package.json
└─ README.md
```

---

## 🌐 **Deploying on Netlify**

1. Push to GitHub
2. Create New Site → Import from Git
3. Build Command: `npm run build`
4. Publish Directory: `build`
5. Add environment variables in Netlify dashboard

---

## ⏳ **Loading States**

* Uses spinner or skeleton UI while fetching services/bookings
* Example: "Loading services..." with animation

---

## ❌ **404 Error Page**

Custom 404 page includes:

* Friendly error message
* "Back to Home" button
* Responsive layout

---

## 🔒 **Security Best Practices**

* Validate all booking data on backend
* Never expose sensitive keys in frontend
* Verify service existence before booking

---

## 🧩 **Future Improvements**

* Implement Email Verification
* Improve analytics & reviews system

---

## 👨‍💻 **Credits**

* **Developer:** Md. Junaid Jewel
* **UI Framework:** Tailwind CSS + DaisyUI
* **Animations:** AOS
* **Alerts:** SweetAlert2
* **Auth:** Firebase

---