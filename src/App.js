import { Outlet, Route, Routes, useRoutes } from "react-router-dom";


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Contacts from "./components/Contacts/Contacts";
import ProductsCategories from "./components/ProductsCategories/ProductsCategories";
import ProductsCatalog from "./components/ProductsCatalog/ProductsCatalog";
import ItemDetails from "./components/ProductsCatalog/ProductsCatalogItem/ItemDetails/Itemdetails";
import Cart from "./components/Cart/Cart";

import AuthContext from './contexts/AuthContext';
import { useState } from "react";




function App() {


  // const [userInfo, setUserInfo] = useState({
  //   username: '',
  //   userToken: '',
  //   userId: ''
  // });

  // const onLogin = (user) => {
  //   console.log(user);
  //   setUserInfo(user);
  //   console.log(userInfo);
  // }

  //   const logout = () =>{
  //     // setUserInfo({
  //     //   username: '',
  //     //   userToken: '',
  //     //   userId: ''
  //     // })
  //     sessionStorage.clear();
  //     // console.log(userInfo);
  //  }

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



  // <AuthContext.Provider value={{userInfo, onLogin, logout}}>
  // </AuthContext.Provider>

  return (
    <div className="App">
      <Header />
      {/* <routes /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="details" element={<ItemDetails />} />
        <Route exact path="products/*"  >
          <Route path="" element={<ProductsCategories />}/>
          <Route path="mugs" element={<ProductsCatalog />} />
        </Route>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
