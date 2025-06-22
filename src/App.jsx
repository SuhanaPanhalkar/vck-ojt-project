import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './style/Pages.css';
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import CoursesPage from "./Pages/CoursesPage";
import ContactPage from "./Pages/ContactPage";
import AdmissionPage from "./Pages/AdmissionPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admission" element={<AdmissionPage />} />
      </Routes>
    </Router>
    <div>
      <ChatbotComponent />
    </div>
    </div>
  );
};

export default App;
