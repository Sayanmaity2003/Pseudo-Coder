# 🏥 MediVerse - Full Stack Medical Assistance Platform

**MediVerse** is a full-stack healthcare platform that connects patients to verified medical professionals and clinics. Users can access a variety of healthcare services, search nearby medical facilities using a smart map interface, and get instant AI-powered help — all in one place.

Doctors can request to list their clinics via the admin dashboard. After verification by the admin, these clinics are made available to the public.

🗺️ Built-in location intelligence powered by **Mapbox**!

---

## 🔗 Live Demo

🚧 Coming Soon...

---

## 🧩 Project Structure

This project is organized into three major components:

### 1. 🌐 Frontend
- **Tech Stack:** React + Vite, Tailwind CSS
- **Key Features:**
  - Browse medical specialties
  - View detailed clinic and doctor profiles
  - Razorpay integration for secure payments
  - 📍 **Smart Map Features:**
    - Search by location (city, locality, landmark)
    - Fetch current location automatically
    - Show nearby hospitals, clinics, and pharmacies
    - Adjustable radius to filter results (1km to 10km+)
    - Interactive and responsive design using Mapbox
  - Disease prediction using symptoms (with multi-language support)
  - Gemini-powered chatbot for instant health advice
  - Doctor handwriting recognition using a deep learning model
  - Personal health tracking assistant

### 2. 🛠 Backend
- **Tech Stack:** Node.js + Express.js
- **Core Features:**
  - RESTful APIs
  - MongoDB Atlas (via Mongoose)
  - JWT for authentication and authorization
  - Cloudinary for media upload
  - Nodemailer for communication
  - Razorpay SDK for payments
  - Admin approval system for clinic listings

### 3. 🧑‍💼 Admin Panel
- **Tech Stack:** React + Vite, Tailwind CSS
- **Functionalities:**
  - View pending doctor/clinic listing requests
  - Verify and add approved clinics to the live database
  - Manage user and clinic data

---

## 🧪 Tech Stack

| Layer        | Technologies                                                                 |
|--------------|------------------------------------------------------------------------------|
| Frontend     | React, Vite, Tailwind CSS                                                    |
| Admin Panel  | React, Vite, Tailwind CSS                                                    |
| Backend      | Node.js, Express.js, MongoDB Atlas, Mongoose                                 |
| APIs & Tools | Mapbox, Gemini (Google AI), Translation API, Razorpay, Cloudinary, Nodemailer, JWT, CORS |

---

## 📁 Environment Variables Setup

### 🔐 Frontend (`.env`)
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
VITE_CLOUDINARY_NAME=your_cloudinary_name
VITE_GEMINI_API_KEY=your_gemini_api_key
VITE_TRANSLATION_API_KEY=your_translation_api_key
VITE_MAPBOX_API_KEY=your_mapbox_api_key

### 🔐 Admin (.env)
VITE_BACKEND_URL=http://localhost:4000

### 🔐 Backend (.env)
MONGODB_URI=your_mongodb_uri
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
CURRENCY=INR
EMAIL_USER=your_email
EMAIL_PASS=your_email_app_password


⚙️ Installation Guide
1. 📦 Clone the Repository
git clone https://github.com/your-username/mediverse.git
cd mediverse

2. 🔧 Setup Backend
cd backend
npm install
# Add environment variables to .env
npm start

3. 🌐 Setup Frontend
cd frontend
npm install
# Add environment variables to .env
npm run dev

4. 👨‍💼 Setup Admin Panel
cd admin
npm install
# Add environment variables to .env
npm run dev


✨ Key Features
- ✅ Explore a wide range of doctors by specialty
- 🗺 Smart Map with:

- Location search

- Auto-detect current location

- Radius-based nearby clinic/store filtering
- 📤 Doctors can submit listing requests
- 🛡️ JWT-based secure authentication
- 📧 Email alerts via Nodemailer
- 💳 Razorpay payment gateway
- 🤖 Gemini-powered chatbot for medical assistance
- 🧠 AI disease predictor (multilingual)
- ✍️ Prescription digitization using deep learning
- 📈 Health tracking assistant
- 🌍 Map implement

🤝 Contributing
Contributions are more than welcome!
Feel free to fork the repository, raise issues, and submit PRs to improve this platform.


🙌 Team & Credits
Crafted with care by:

Sayan Maity
Soumyadip Karan
Soumyarup Das
Soumyajit Manna

Thanks for exploring MediVerse! Let’s revolutionize digital healthcare together. 🩺💡
