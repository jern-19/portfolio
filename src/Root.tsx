import { useState } from "react";
import { BrowserRouter } from "react-router";
import { LanguageProvider } from "./contex/LanguageContext";
import AppRouter from "./router/AppRouter";
import SplashScreen from "./components/SplashScreen";
import { AuthProvider } from "./contex/AuthContext";

export default function Root() {
  const [ready, setReady] = useState(false);

  if (!ready) {
    return <SplashScreen onFinish={() => setReady(true)} />;
  }

  return (
     <BrowserRouter>
    <AuthProvider>
      <LanguageProvider>
        <AppRouter />
      </LanguageProvider>
    </AuthProvider>
  </BrowserRouter>
  );
}