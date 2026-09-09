# 🍳 Ashpazkhone App

A modern and responsive recipe discovery website built with **Next.js** and **TypeScript**.

The project provides a clean and modern interface for discovering food recipes, exploring recipe information, and practicing real-world frontend development concepts. Recipe data is fetched from the **DummyJSON API**, while the application state and server-side data are managed using modern React tools.

> 🚧 This project is primarily a frontend practice project focused on improving my skills in modern React and Next.js development.

---

## ✨ Features

* 🍽️ Browse food recipes
* 🔍 Search and discover recipes
* 📂 Explore recipes by category
* 📖 View detailed recipe information
* 💾 Save/bookmark recipes
* 📱 Fully responsive design
* 🎨 Modern UI with a clean color palette
* ⚡ Server-state management with React Query
* 🗃️ Client-state management with Zustand
* 🔄 Data fetching from DummyJSON API
* 🧩 Reusable and maintainable React components
* 📐 Responsive layouts using Tailwind CSS

---

## 🛠️ Tech Stack

### Core

* **Next.js**
* **React**
* **TypeScript**

### State & Data Management

* **TanStack Query (React Query)** — Server-state management, data fetching, caching, and synchronization
* **Zustand** — Lightweight client-side state management

### Styling

* **Tailwind CSS** — Utility-first styling and responsive layouts

### API

* **DummyJSON** — Mock recipe API used as the project's data source

---

## 🏗️ Project Architecture

The project follows a separation between **server state** and **client state**.

### TanStack Query

TanStack Query is responsible for data that comes from the API, including:

* Recipes
* Recipe details
* Categories
* Search results
* API caching
* Loading and error states
* Refetching and synchronization

### Zustand

Zustand is used for client-side application state such as:

* Saved recipes
* UI state
* Local interactions that don't need to be stored on the server

This separation keeps the application architecture simple and avoids using a global state manager for data that is already handled by the server.

---

## 🎯 Project Goals

The main purpose of this project is to practice and improve modern frontend development skills by building a realistic application instead of isolated small examples.

Through this project, I am practicing:

* Building applications with Next.js
* Writing scalable React components
* Working with TypeScript
* Fetching and caching API data
* Managing server state with TanStack Query
* Managing client state with Zustand
* Building responsive interfaces with Tailwind CSS
* Creating reusable UI components
* Handling loading and error states
* Working with external APIs
* Structuring a modern frontend project
* Improving UI/UX and responsive design

---

## 📂 Project Structure

The project is organized around reusable components, pages, API/data logic, and application state.

```text
src/
├── app/
├── components/
├── hooks/
├── lib/
├── store/
├── types/
└── ...
```

The exact structure may evolve as the project grows.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project

```bash
cd <project-name>
```

### 3. Install dependencies

```bash
npm install
```

Or, if you use pnpm:

```bash
pnpm install
```

### 4. Start the development server

```bash
npm run dev
```

Or:

```bash
pnpm dev
```

The application will be available on your local development server.

---

## 📦 Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server.

```bash
npm run lint
```

Runs ESLint to check the codebase for potential issues.

---

## 🔌 API

This project uses **DummyJSON** as a mock API for recipe data.

The API provides the recipe information required by the application, allowing the project to focus primarily on frontend development without requiring a custom backend.

---

## 📱 Responsive Design

The application is designed to work across different screen sizes:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop
* 🖥️ Large screens

Tailwind CSS is used to build responsive layouts and adapt the interface to different viewport sizes.

---

## 🎨 Design

The UI focuses on creating a modern food-oriented experience with:

* Clean layouts
* Rounded cards
* Food-focused imagery
* Modern typography
* Soft and warm colors
* Clear visual hierarchy
* Responsive components
* Simple and intuitive interactions

The goal is to create an interface that feels like a real-world recipe platform rather than a simple API demonstration.

---

## 🧠 What I Learned

This project has been an opportunity to work with several concepts that are important in modern frontend development, including:

* Next.js application architecture
* TypeScript in a real-world React application
* Server-state vs. client-state management
* TanStack Query caching and mutations
* Zustand stores
* API integration
* Component composition
* Responsive UI development
* Tailwind CSS
* Loading and error handling
* Frontend project organization
* Building reusable components

---

## 🔮 Future Improvements

Possible future improvements include:

* User authentication
* Persistent saved recipes
* Advanced recipe filtering
* Recipe search optimization
* Pagination or infinite scrolling
* More detailed recipe information
* User ratings and reviews
* Dark mode
* Improved accessibility
* Better SEO
* Unit and integration testing
* Connecting the application to a real backend API

---

## 📌 Disclaimer

This project is a frontend practice project and uses mock recipe data from DummyJSON.

It is primarily built for learning, experimentation, and improving modern frontend development skills.

---

## 👨‍💻 Author

**Hossein Matari**

Frontend Developer focused on building modern, responsive, and maintainable web applications.
