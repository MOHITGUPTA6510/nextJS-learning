# 🔐 Next.js Authentication System

A basic full-stack authentication system built from scratch using **Next.js**, **PostgreSQL**, **bcrypt**, **HTTP-only cookies**, and **Nodemailer**.

This project implements user registration, login, session-based authentication, logout, and a complete forgot-password flow using email OTP verification.

---

## 🚀 Features

### Authentication
- User registration
- Email validation
- Password validation
- Secure password hashing using bcrypt
- User login
- Session-based authentication
- HTTP-only authentication cookies
- Protected profile page
- User logout

### Forgot Password
- Forgot password functionality
- Email-based OTP generation
- OTP sent through Gmail SMTP
- OTP stored securely using bcrypt hashing
- OTP expiration
- OTP verification
- Secure reset token generation
- Password reset
- Reset token expiration
- Reset token invalidation after password reset

---

## 🛠️ Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- HTML
- CSS

### Backend
- Next.js API Routes
- Node.js

### Database
- PostgreSQL
- Neon PostgreSQL

### Authentication & Security
- bcrypt
- HTTP-only cookies
- Crypto-generated session IDs
- Crypto-generated reset tokens

### Email
- Nodemailer
- Gmail SMTP

---

## 📁 Project Structure

```text
auth-app/
│
├── app/
│   │
│   ├── api/
│   │   ├── register/
│   │   │   └── route.ts
│   │   │
│   │   ├── login/
│   │   │   └── route.ts
│   │   │
│   │   ├── logout/
│   │   │   └── route.ts
│   │   │
│   │   ├── me/
│   │   │   └── route.ts
│   │   │
│   │   ├── forgot-password/
│   │   │   └── route.ts
│   │   │
│   │   ├── verify-otp/
│   │   │   └── route.ts
│   │   │
│   │   ├── reset-password/
│   │   │   └── route.ts
│   │   │
│   │   └── reset-status/
│   │       └── route.ts
│   │
│   ├── login/
│   │   └── page.tsx
│   │
│   ├── forgot-password/
│   │   └── page.tsx
│   │
│   ├── verify-otp/
│   │   └── page.tsx
│   │
│   ├── profile/
│   │   └── page.tsx
│   │
│   └── test-register/
│       └── page.tsx
│
├── lib/
│   ├── db.ts
│   └── email.ts
│
├── .env.local
├── package.json
└── README.md