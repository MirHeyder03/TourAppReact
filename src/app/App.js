import React, { useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "../pages/home/Home";
import Tours from "../pages/tours/Tours";
import WhyUs from "../pages/whyus/WhyUs";
import GalleryPage from "../pages/gallery/GalleryPage";
import Contact from "../pages/contact/Contact";
import TourInnerPage from "../pages/tourInnerPage/TourInnerPage";
import Footer from "../components/layout/Footer";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};
const App = () => {
  return (
    <div className="font-primary">
      <Router>
        <Wrapper>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/tours" exact element={<Tours />} />
            <Route path="/whyus" exact element={<WhyUs />} />
            <Route path="/gallery" exact element={<GalleryPage />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/tourInnerPage" exact element={<TourInnerPage />} />
          </Routes>
          <Footer />
        </Wrapper>
      </Router>
    </div>
  );
};

export default App;
