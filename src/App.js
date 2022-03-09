import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Detail from "./components/Detail";

import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Home from "./pages/Home";
import HotDeal from "./pages/HotDeal";


function App() {
  const PRODUCTS = [
    {
      id: "1",
      name: "Nike Sneakers",
      url: require("./image/bag-yellow.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: "2",
      name: "Nike Sneakers",
      url: require("./image/nike-sneaker.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: "3",
      name: "Nike Sneakers",
      url: require("./image/card-yellow-show-back.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: "4",
      name: "Nike Sneakers",
      url: require("./image/card-yellow.shoe.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: "5",
      name: "Nike Sneakers",
      url: require("./image/sneaker-blue.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: "6",
      name: "Nike Sneakers",
      url: require("./image/nike-sneaker.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: "7",
      name: "Nike Sneakers",
      url: require("./image/sneaker-blue.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
    {
      id: "8",
      name: "Nike Sneakers",
      url: require("./image/card-yellow.shoe.png"),
      cost: "255",
      oldCost: "294",
      sale: "24"
    },
  ]


  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home PRODUCTS={PRODUCTS} />} />
          <Route path="/hot-deal" element={<HotDeal PRODUCTS={PRODUCTS} />} />
          <Route path="/products/:id" element={<Detail PRODUCTS={PRODUCTS} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
