# DumbleDev AI

DumbleDev AI is a modern web application built with Next.js, React, and Tailwind CSS. It features Google OAuth authentication, a customizable chatbox, and a clean, responsive UI. The app is designed for extensibility and ease of use, with a focus on developer productivity and user experience.

---

## Features

- **Google OAuth Authentication**  
  Secure login and sign-up using Google accounts, with proper redirect handling and compliance with Google OAuth 2.0 policies.

- **Customizable Chatbox**  
  A chat interface with a configurable background color (`#d7d7d9`), supporting user input and interactive features.

- **Modern UI**  
  Built with Tailwind CSS for rapid styling and a consistent look and feel.

- **Environment-based Configuration**  
  Uses `.env.local` for API keys, OAuth client IDs, and service URLs.

- **Convex Integration**  
  Real-time data and backend logic powered by Convex.

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/dumbledev-ai.git
   cd dumbledev-ai/dumbledev
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   - Copy `.env.local.example` to `.env.local` and fill in the required values:
     ```
     NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
     GOOGLE_CLIENT_SECRET=your-google-client-secret
     NEXTAUTH_URL=https://dumbledev-ai.vercel.app
     NEXT_PUBLIC_CONVEX_URL=https://your-convex-url.convex.cloud
     NEXT_PUBLIC_GEMINI_API_KEY=your-gemini-api-key
     ```

4. **Run the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser:**  
   Visit [http://localhost:3000](http://localhost:3000)

---

## Deployment

- Deploy to [Vercel](https://vercel.com/) for best compatibility.
- Set all environment variables in your Vercel project settings.

---

## Configuration

- **Google OAuth:**  
  Register your production and local URLs as Authorized JavaScript Origins in the [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
- **Convex:**  
  Follow [Convex documentation](https://docs.convex.dev/) for backend setup.

---

## Project Structure

```
dumbledev-ai/
  dumbledev/
    src/
      app/
        components/
        pages/
        styles/
      data/
      public/
        dumbledev.jpg
      ...
    .env.local
    package.json
    ...
```

---

## Customization

- **Logo:**  
  The logo is located at `/public/dumbledev.jpg`. Update this file to change the app logo.
- **Colors:**  
  Main background and chatbox colors are defined in `src/data/colors.tsx`.

---

## Troubleshooting

- **Google OAuth not redirecting:**  
  Ensure your redirect URIs and JavaScript origins are correctly set in the Google Cloud Console.
- **Convex errors:**  
  Make sure your `NEXT_PUBLIC_CONVEX_URL` is correct and the Convex backend is running.

---

## License

MIT

---

## Credits

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Convex](https://convex.dev/)