import { Routes, Route } from "react-router-dom";
import HomePage from "../Screens/HomePage";
import PortfolioPage from "../Screens/PortfolioPage";
import ContactUs from "../Screens/ContactUs";
import AboutPage from "../Screens/AboutPage";

export function RoutesInit() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio/:category" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    );
}