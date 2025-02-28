import "./App.css";
import { Header } from "./components/Header";
import { MainContent } from "./components/PageContent";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { LoginAccount } from "./components/LoginId";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function onLogin() {
    setIsLoggedIn(true);
  }

  if (!isLoggedIn) {
    return (
      <div>
        <LoginAccount handleLogin={onLogin} />
      </div>
    );
  }

  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <MainContent />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
