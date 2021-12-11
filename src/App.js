import { Outlet, Route, Routes, useRoutes } from "react-router-dom";
// const Backendless = require('backendless');
// import Backendless from 'backendless';


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Contacts from "./components/Contacts/Contacts";
import ProductsCategories from "./components/ProductsCategories/ProductsCategories";
import ProductsCatalog from "./components/ProductsCatalog/ProductsCatalog";



function App() {

  // const routes = useRoutes([
  //   { path: '/', element: <Home /> },
  //   { path: '/login', element: <Login /> },
  //   { path: '/register', element: <Register /> },
  //   { path: '/contacts', element: <Contacts /> },
  //   {
  //     path: '/products',
  //     element: <ProductsCategories />,
  //     children: [
  //       { path: 'mugs', element: <ProductsCatalog /> },
  //       // { path: 'jars', element: <UserProfile /> },
  //       // { path: 'earrings', element: <OwnUserProfile /> },
  //     ]
  //   }
  // ]);




  return (
    <div className="App">
      <Header />
      {/* <routes /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route exact path="/products" element={<ProductsCategories />} />
        <Route path="/mugs" element={<ProductsCatalog />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
