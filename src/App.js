import { Routes, Route } from "react-router-dom";

import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Home from "./pages/Home";
import HotDeal from "./pages/HotDeal";


function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hot-deal" element={<HotDeal />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
