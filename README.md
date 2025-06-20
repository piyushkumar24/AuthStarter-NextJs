# AuthStarter-NextJs

## 🚀 Features

- **Modern Authentication** - Complete authentication system using Next.js 14 and Auth.js v5
- **Email & OAuth** - Support for both credential-based login and OAuth with Google
- **Two-Factor Authentication (2FA)** - Enhanced security with optional two-factor authentication
- **Email Verification** - Secure account verification flow via email
- **Password Reset** - Secure password recovery workflow
- **Role-Based Access Control** - Granular control over user permissions
- **Protected Routes** - Server-side and client-side protection for routes
- **Protected API Routes** - Secure API endpoints with role-based access
- **Responsive UI** - Beautiful and responsive UI with dark/light mode support
- **Database Integration** - Prisma ORM with PostgreSQL database support

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Authentication**: Auth.js v5 (NextAuth)
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Email**: Resend API
- **Form Handling**: React Hook Form + Zod
- **State Management**: React Context API
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (or use a service like Neon.tech)
- Google OAuth credentials (optional, for OAuth)
- Resend API key (for email functionality)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/piyushkumar24/AuthStarter-NextJs.git
cd AuthStarter-NextJs
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add the following variables:

```env
# Database (Required)
DATABASE_URL="postgresql://username:password@localhost:5432/authkit"
DIRECT_URL="postgresql://username:password@localhost:5432/authkit"

# Auth (Required)
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key" 

# Email (Required for verification & password reset)
RESEND_API_KEY="your-resend-api-key"
EMAIL_FROM="your-email@example.com"

# OAuth (Optional - for social login)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Two-Factor Authentication (Optional)
# These are used for generating and sending 2FA tokens
TWO_FACTOR_ENABLED=true # Set to false to disable 2FA functionality
```

#### Environment Variables Explanation

- **DATABASE_URL**: Your PostgreSQL connection string. Required for Prisma to connect to your database.
- **DIRECT_URL**: Direct connection to PostgreSQL (needed for Prisma with connection pooling services like PgBouncer).
- **NEXTAUTH_URL**: The base URL of your website. In production, this should be your deployed URL.
- **NEXTAUTH_SECRET**: A secret key used to encrypt cookies and tokens. Should be kept private.
- **RESEND_API_KEY**: API key from [Resend](https://resend.com) for sending emails.
- **EMAIL_FROM**: The email address that will appear as the sender of verification emails.
- **GOOGLE_CLIENT_ID/SECRET**: Credentials for Google OAuth. Get these from the [Google Cloud Console](https://console.cloud.google.com/).
- **TWO_FACTOR_ENABLED**: Toggle to enable/disable the two-factor authentication feature.

### 4. Set up the database

```bash
npx prisma generate
npx prisma db push
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🔒 Authentication Flow

1. **Registration**: Users can register with email and password
2. **Email Verification**: Verification link is sent to the user's email
3. **Login**: Users can log in with email/password or OAuth providers
4. **Two-Factor Authentication**: Optional 2FA for enhanced security
5. **Password Reset**: Users can reset their password via email
6. **Role-Based Access**: Different access levels for users and admins

## 📁 Project Structure

```
/
├── actions/           # Server actions for auth operations
├── app/               # App router pages and layouts
├── components/        # UI components
├── data/              # Database schema and models
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── prisma/            # Prisma schema and migrations
├── public/            # Static assets
└── schemas/           # Zod validation schemas
```

## 🔐 Protected Routes

- **Client Routes**: Protected using client-side middleware
- **Server Routes**: Protected using server-side session validation
- **API Routes**: Protected using API route handlers

## 🎨 UI Customization

The UI is built with Tailwind CSS and shadcn/ui components, making it easy to customize:

- Modify the theme in `tailwind.config.ts`
- Customize components in the `components/ui` directory
- Adjust layouts in the `app` directory

## 📱 Responsive Design

The application is fully responsive and works on all devices:

- Mobile-first design approach
- Adaptive layouts for different screen sizes
- Optimized UI components for touch interactions

## 🚀 Deployment

This project can be easily deployed to Vercel:

1. Push your code to GitHub
2. Import the repository to Vercel
3. Set up the environment variables
4. Deploy!


## 👨‍💻 Created By

**Piyush Kumar**

- GitHub: [https://github.com/piyushkumar24](https://github.com/piyushkumar24)
- LinkedIn: [https://www.linkedin.com/in/piyush-kumar-7a7242225/](https://www.linkedin.com/in/piyush-kumar-7a7242225/)

---

<div align="center">
  <p>If you found this project helpful, please consider giving it a ⭐</p>
</div>
