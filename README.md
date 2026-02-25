# ✏️ Korean Story Studio
A TTMIK-style Korean short story generator powered by OpenAI. Pick a level and grammar lesson, generate a story, and study with a built-in word bank and English translation.

🔗 **[Live Demo](https://short-story-generator.vercel.app/)**

## 🚀 Quick Start

### 1. Install
```bash
npm install
```

### 2. Environment Variables
Create `.env.local`:
```
OPENAI_API_KEY=your-openai-key
```

### 3. Run
```bash
npm run dev
```

## 📱 Features

| Feature | Description |
|---------|-------------|
| 📖 Story Generator | AI-generated Korean stories tailored to a chosen grammar lesson |
| 🎚️ Level Selector | Choose from Level 1, 2, or 3 (TTMIK-style progression) |
| 📚 Grammar Focus | Each lesson highlights a specific grammar point (e.g. 은/는, 이에요/예요) |
| 💬 English Translation | Toggle translation reveal after reading |
| 🌱 Word Bank | Auto-generated vocabulary list with notes from each story |

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js** | React framework with App Router |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS** | Utility-first styling |
| **OpenAI API** | Story + word bank generation |
