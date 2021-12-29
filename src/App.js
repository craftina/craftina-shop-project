import { Outlet, Route, Routes, useRoutes } from "react-router-dom";


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Contacts from "./components/Contacts/Contacts";
import ProductsCategories from "./components/ProductsCategories/ProductsCategories";
import ProductsCatalog from "./components/ProductsCatalog/ProductsCatalog";
import Cart from "./components/Cart/Cart";
import ItemDetails from "./components/ProductsCatalog/ProductsCatalogItem/ItemDetails/ItemDetails";

import { AuthContext, AuthProvider } from './contexts/AuthContext';
import { useContext, useEffect, useState } from "react";

// import useSessionStorage from "./hooks/useLocalStorage";
import ProductsCatalogItem from "./components/ProductsCatalog/ProductsCatalogItem/ProductsCatalogItem";


const appId = 'Backendless_636B21A4-70D4-D302-FFC2-C24461E91D00';
const activeUser = localStorage.length > 0 ? Object.values(JSON.parse(localStorage[appId])) : 0;


function App() {

  // let initialAuthState = {
  //   username: '',
  //   userToken: '',
  //   ownerId: ''
  // };

  // let [user, setUser] = useState(initialAuthState);

  // const setUserInfo = (userInfo) => {
  //   setUser(userInfo)
  // }

  // useEffect(() => {
    
  // }, [user])

  // function onChangeUser() {

  //   setUserInfo(
  //     {
  //       username: sessionStorage.username,
  //       userToken: sessionStorage.userToken,
  //       ownerId: sessionStorage.ownerId
  //     }
  //   )

  // }

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




  return (
    // <AuthContext.Provider value={{user, setUserInfo, activeUser}}>
      <div className="App">
        <Header />
        {/* <routes /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="products" element={<ProductsCategories />} />
          <Route path="mugs" element={<ProductsCatalog type='mugs' />} />
          <Route path=":id" element={<ItemDetails type='mugs' />} />
          <Route path="jars" element={<ProductsCatalog type='jars' />} />
          <Route path=":id" element={<ItemDetails type='jars' />} />
          <Route path="earrings" element={<ProductsCatalog type='earrings' />} />
          <Route path=":id" element={<ItemDetails type='earrings' />} />



          {/* <Route path="#description" element={<ItemDetails />} />
            <Route path="#reviews" element={<ItemDetails />} />
          </Route> */}

        </Routes>
        <Footer />
      </div>
    // </AuthContext.Provider>
  );
}

export default App;
