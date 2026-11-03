# Phone Book App 📖

A modern, responsive, full-stack ready Phone Book web application built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Designed following clean architecture principles, featuring full CRUD (Create, Read, Update, Delete) capabilities, dynamic search filtering, custom React hooks, and schema validation with React Hook Form & Zod.

Developed as part of the **Full Stack Developer Assessment**.

---

## ✨ Key Features

- 🔍 **Real-time Filter**: Instant search filtering by **Last Name** (with support for trimming and safe case matching).
- ➕ **Add Contact**: Modal form with custom input wrappers and instant Zod validation.
- ✏️ **Edit Contact**: Seamlessly pre-fills form data to update existing phone book entries.
- 🗑️ **Delete Contact**: Instant item deletion with clean UI updates.
- 🎯 **Clean Architecture**:
  - **Custom Hook (`usePhoneBook`)**: Decouples state management and CRUD logic from the UI.
  - **Reusable Form Component (`FormInput`)**: Clean input wrapper handling labels and inline error messages.
  - **Reusable Zod Schema (`contactSchema`)**: Centralized validation rules for First Name, Last Name, and Phone format.
  - **Type-Safe**: 100% TypeScript coverage.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Runtime**: Node.js `v20.9.0` (LTS)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/)
- **Schema Validation**: [Zod](https://zod.dev/) (`@hookform/resolvers`)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```
phone-book-frontend/
├── app/
│   ├── globals.css          # Global CSS and Tailwind v3 directives
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Clean, thin container component
├── components/
│   ├── Header.tsx           # App title header
│   ├── SearchBar.tsx        # Search input field & Add Contact button
│   ├── ContactItem.tsx      # Individual contact row (Edit & Delete actions)
│   ├── ContactModal.tsx     # Form modal integrated with React Hook Form
│   └── FormInput.tsx        # Reusable input field wrapper component
├── hooks/
│   └── usePhoneBook.ts      # Custom hook managing CRUD operations & state
├── constants/
│   └── initialContacts.ts   # Seed mock data
├── validations/
│   └── contactSchema.ts     # Reusable Zod validation schema
└── types/
    └── contact.ts           # TypeScript interfaces for contact objects
```

---

## 🚀 Getting Started Locally

### Prerequisites

Ensure you have Node.js and npm installed:
- **Node.js**: `v20.9.0` (or `v18.0.0+`)
- **npm**: `v10.0.0+`

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/phone-book-frontend.git
   cd phone-book-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View in browser:**
   Open [http://localhost:3000](http://localhost:3000) to access the application.

---

## 🧪 Form Validation Rules

- **First Name**: Required string (1–50 characters).
- **Last Name**: Required string (1–50 characters).
- **Phone Number**: Required string matching standard pattern `XXX-XXX-XXXX` (e.g., `222-555-6575`).

---

## ⚙️ Backend Integration Readiness

The custom hook `usePhoneBook.ts` centralizes all data management handlers (`handleSaveContact`, `handleDeleteContact`, `filteredContacts`). Replacing the client-side React state with API calls (`fetch` or `axios`) to a NestJS / REST backend requires zero changes to the UI components.