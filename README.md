# Accommodation Booking Web App

A **full-stack accommodation booking platform** designed to simplify the process of finding and booking stays.  
The application features **user authentication, secure payment integration, and an intuitive admin dashboard** — making it easy for both guests and property managers to interact seamlessly.

---

## 🚀 Features

- **User Authentication** – Secure signup/login with password hashing
- **Responsive UI** – Works across desktop, tablet, and mobile
- **Property Listings** – Add, view, search, and filter accommodations
- **Payment Integration** – Supports online booking payments
- **Admin Dashboard** – Manage bookings, users, and property listings
- **Booking Management** – Real-time availability tracking

---

## 🛠️ Tech Stack

**Frontend:**
- HTML, CSS, JavaScript  
- TailwindCSS / Material UI (optional customization)  

**Backend:**
- Node.js, Express.js  
- MongoDB (Mongoose ORM)  

**Other Tools:**
- Git & GitHub for version control  
- Stripe/PayPal API for payment processing  
- JWT for authentication

---

## 📂 Folder Structure
accommodation-booking-web-app/
│-- public/ # Static assets
│-- src/ # Main source code
│ ├── components/ # UI components
│ ├── pages/ # Page layouts
│ ├── routes/ # API routes
│ ├── models/ # Database schemas
│ └── utils/ # Helper functions
│-- package.json # Project dependencies
│-- README.md # Project documentation


---

## ⚡ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/altrahilll/accommodation-booking-web-app.git
cd accommodation-booking-web-app

Install dependencies
npm install

Set up environment variables
Create a .env file in the root and add:

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PAYMENT_API_KEY=your_payment_gateway_key

Run the app
npm start

👨‍💻 Author
Rahil Khan


📜 License
This project is open-source and available under the MIT License.

