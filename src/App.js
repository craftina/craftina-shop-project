import {Route, Routes} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Contacts from "./components/Contacts/Contacts";
import ProductsCategories from "./components/ProductsCategories/ProductsCategories";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="/products" element={<ProductsCategories />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
