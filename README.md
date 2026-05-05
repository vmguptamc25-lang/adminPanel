## 🔑 Demo Login Credentials

Use the following credentials to log in:

username: emilys  
password: emilyspass



## State Management (Zustand)

Zustand was used for managing global state across the application, including authentication, users, and products data.

### Why Zustand?

- Simple and minimal setup compared to Redux
- No boilerplate (reducers, actions, dispatch)
- Built-in support for async actions
- Lightweight and performant
- Ideal for small to medium-scale applications

Zustand allowed clean separation of API logic and UI components, improving maintainability and readability.


# Admin Panel - Next.js Assessment

This project is a frontend admin panel built using Next.js, Material-UI, and Zustand.  
It integrates with the DummyJSON API to manage users and products.

---

## 🚀 Tech Stack

- Next.js (App Router)
- React
- Material UI (MUI)
- Zustand (State Management)
- Axios

---

## 📦 Features

### 🔐 Authentication
- Login using DummyJSON API
- Token stored in Zustand + localStorage
- Protected routes (dashboard, users, products)

---

### 👥 Users Module
- List users with pagination (limit & skip)
- Search users
- View user details
- Display: name, email, gender, phone, company

---

### 🛍️ Products Module
- Products grid layout
- Pagination
- Search functionality
- Category filter dropdown
- Product detail page with image preview

---

### ⚡ Performance Optimization
- API-side pagination (avoid large data loads)
- React.memo used to prevent unnecessary re-renders
- useCallback & useMemo for optimization

---

### 🧠 State Management (Zustand)

Zustand is used for:
- Authentication state
- Users data
- Products data

#### Why Zustand?

- Minimal setup (no boilerplate like Redux)
- Built-in async support
- Lightweight and fast
- Ideal for small to medium applications

---

### 🗂️ Client-Side Caching

- Implemented caching in Zustand store
- Avoids repeated API calls for same data
- Improves performance and user experience

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME