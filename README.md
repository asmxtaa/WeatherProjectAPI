
# 🌤️ Weather Dashboard

An elegant and dynamic weather dashboard built with **React**, **TypeScript**, **Tailwind CSS**, and **Zustand**. It leverages the **OpenWeatherMap API** to display real-time weather and a 5-day forecast — all wrapped in a modern, animated UI with dark mode support.

## ✨ Features

- 🌦️ **Real-Time Weather** for any city
- 📅 **5-Day Forecast** displayed in sleek cards
- 🌙 **Dark Mode Toggle** with persistent state
- 🕵️ **Recent Search History** for quick access
- 💎 **Glassmorphism UI & Smooth Animations**
- ⚡ **Responsive Design** for all devices

---

## ⚙️ Tech Stack

| Technology     | Usage                             |
|----------------|-----------------------------------|
| **React**      | Frontend framework                |
| **TypeScript** | Static typing                     |
| **Tailwind CSS** | Utility-first styling           |
| **Zustand**    | Lightweight state management      |
| **Lucide-react** | Icon library                    |
| **Vite**       | Fast build tool for development   |

---

## 🧑‍💻 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/asmxtaa/WeatherProjectAPI.git
   cd WeatherProjectAPI
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add your API Key:**
   - Navigate to `src/store.ts`
   - Replace the placeholder key with your OpenWeatherMap API key:
     ```ts
     const API_KEY = 'baac0c7e4decb501150c3eedb73386e5';
     ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

6. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## 🌐 OpenWeatherMap API Integration

- **API Used:**
  - [Current Weather Endpoint](https://openweathermap.org/current)
  - [5-Day Forecast Endpoint](https://openweathermap.org/forecast5)

- **Authentication:**
  - Requires a personal API key.
  - Sign up here: [https://openweathermap.org/api](https://openweathermap.org/api)

- **Usage Example:**
  ```
  https://api.openweathermap.org/data/2.5/weather?q=London&appid=baac0c7e4decb501150c3eedb73386e5&units=metric
  ```

- **Rate Limits (Free Tier):**
  - 60 API calls/minute
  - 1,000,000 API calls/month

- **Units:**
  - This app uses metric units (Celsius).

---

## 🚀 Deployment

This project can be easily deployed using [**Vercel**](https://vercel.com):

1. Push the project to a GitHub repo.
2. Go to [vercel.com](https://vercel.com), sign in via GitHub.
3. Click **"New Project"**, select your repo.
4. Vercel will auto-detect the project (Vite + React).
5. Add your API key in Vercel **Environment Variables**.
6. Click **Deploy** – and you're live!

🔗 **Live Demo**: [https://weather-project-api-git-main-asmita-mandals-projects.vercel.app](#) 

---

## 🧑‍🎨 Built By

**Asmita Mandal 🌸**  
[GitHub](https://github.com/asmxtaa) • [LinkedIn](https://linkedin.com/in/asmxtaa)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
```
