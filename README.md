# Chatwise Mindscape Platform

Welcome to your **Chatwise Mindscape Platform** – a full-stack, credit-based AI application leveraging the power of Local Ollama and ImageKit. This project delivers a robust chatbot experience with seamless user authentication, payment integration, and advanced analytics, all built on the modern MERN stack.

---

## 🚀 Key Features

### 1. **Text Generation (Ollama Models)**
- Multi-model support for versatile AI text generation
- Powered by Local Ollama for fast, private inference
- Integrated into user dashboard with support for prompts, conversation history, and model switching

### 2. **Image Generation (ImageKit)**
- Generate AI images from text with ImageKit integration
- Custom styling and output formats
- Usage history tracked for each user

### 3. **Credit System & Payments**
- Credits required for accessing AI features
- Payment integration:
  - **ABA PayWay** for card payments
  - **QR Code** for local transactions
- Credit logs and transaction history stored in MongoDB

### 4. **Secure Authentication**
- JWT-based signup/login flows
- Account management with password reset and session control
- Built with security best practices

### 5. **Usage Analytics**
- Track credits spent, model usage, and image generation statistics
- Admin dashboard for analytics overview

### 6. **Responsive Design**
- Built with Next.js 15.5.2, React 19, TypeScript, and Shadcn UI
- Tailwind CSS for fully responsive, mobile-friendly layouts
- Modern gradient text, card-based feature display, professional color scheme

---

## 🖥️ Landing Page Overview

The landing page is designed to convert visitors and guide them through your platform’s strengths:

### **Header**
- Navigation links to main sections
- Login/Signup buttons for authentication

### **Hero Section**
- Compelling headline with animated gradient text
- Primary CTA buttons for starting a chat or viewing pricing

### **Features Section**
- Card layout with icons and descriptions for:
  - Text Generation
  - Image Generation
  - Credit System
  - Secure Authentication
  - Usage Analytics
  - Responsive Design

### **How It Works**
- 3-step visual guide:
  1. Sign Up & Choose Package
  2. Access Dashboard, Generate Content
  3. Track Usage & Manage Credits

### **Pricing Section**
- Clearly presented credit packages:
  - **Starter**
  - **Professional**
  - **Enterprise**
- Fast checkout with ABA PayWay or QR code
- Package comparison in responsive cards

### **Call-to-Action**
- Prominent section encouraging users to sign up or explore features

### **Footer**
- Company info, social links, privacy policy, and documentation

---

## 🛠️ Technologies

- **Frontend:** Next.js 15.5.2, React 19, TypeScript, Shadcn UI, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB
- **AI Services:** Local Ollama (text), ImageKit (images)
- **Payments:** ABA PayWay & QR code integration
- **Auth:** JWT with secure flows

---

## 🗂️ Project Structure

```
/src
  /components      # UI components (Shadcn UI-based)
  /pages           # Next.js routing (Landing, Dashboard, Auth)
  /utils           # Helper functions
  /api             # Backend API endpoints
  /models          # MongoDB models
  /styles          # Tailwind & CSS variables

/public            # Static files and images
```

---

## 📦 Getting Started

### **Clone & Install**

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm i
```

### **Run Development Server**

```sh
npm run dev
```

### **Environment Setup**

- Configure `.env.local` with your MongoDB URI, ABA PayWay API keys, ImageKit credentials, and Ollama endpoint.
- See `/src/config` for sample config files.

---

## 🌐 Deployment

- Deploy with Vercel, Netlify, or your preferred provider for Next.js.
- For instant publishing, use [Lovable](https://lovable.dev/projects/a152b5a5-aa5d-4e93-992c-2d2d0058600e) and click **Share → Publish**.

---

## 🔗 Custom Domain

Connect your own domain in Lovable:
- Go to **Project > Settings > Domains**
- Click **Connect Domain**
- [Read more](https://docs.lovable.dev/features/custom-domain#custom-domain)

---

## 💳 Credit Packages & Pricing

| Package        | Credits | Price      | Features                          |
| :------------- | :------ | :--------- | :-------------------------------- |
| Starter        | 100     | $10        | Text & image generation           |
| Professional   | 500     | $45        | Premium support, analytics        |
| Enterprise     | 2000    | $150       | Dedicated model, advanced stats   |

- Credits are consumed per chat/image request
- Top up anytime via dashboard

---

## 📖 Documentation

- [Lovable Project Dashboard](https://lovable.dev/projects/a152b5a5-aa5d-4e93-992c-2d2d0058600e)
- [ImageKit Docs](https://docs.imagekit.io/)
- [Ollama Docs](https://ollama.com/docs)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ABA PayWay](https://www.abapay.com/)

---

## 🤝 Contributing

Pull requests are welcome! Please see the [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 🏢 Company Info

© [Your Company Name] 2025  
Contact: info@yourcompany.com  
[Privacy Policy](#) | [Terms of Service](#)

---

## 📱 Quick Links

- [Dashboard](/dashboard)
- [Sign Up / Login](/auth)
- [Pricing](/#pricing)
- [Docs](/docs)
- [Support](mailto:support@yourcompany.com)

---

## 📝 License

This project is licensed under the MIT License.

---

**Ready to build your AI-powered future?**  
Start chatting or generating images today!
