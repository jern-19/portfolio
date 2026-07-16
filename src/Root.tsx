import { useState } from "react";
import { BrowserRouter } from "react-router";
import { LanguageProvider } from "./contex/LanguageContext";
import AppRouter from "./router/AppRouter";
import SplashScreen from "./components/SplashScreen";

export default function Root() {
  const [ready, setReady] = useState(false);

  if (!ready) {
    return <SplashScreen onFinish={() => setReady(true)} />;
  }

  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppRouter />
      </LanguageProvider>
    </BrowserRouter>
  );
}