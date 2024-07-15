import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Header from "./components/common/Header";
import Home from "./components/Home";
import Explore from "./components/Explore";
import Review from "./components/Review";
import Footer from "./components/common/Footer";
import Product from "./components/Product";
import RequestForm from "./components/form/RequestForm";
import FAQ from "./components/FAQ";
import Design from "./components/Design";

function App() {
  return (
    <Suspense fallback="...loading">
      <div>
        <Header />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/design" element={<Design />} />
            <Route path="/explore/:id" element={<Product />} />
            <Route path="/feedback" element={<Review />} />
            <Route path="/request" element={<RequestForm />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
