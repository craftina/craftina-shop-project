import { createContext} from 'react';
// import { createContext, useContext, useEffect, useState } from 'react';
// import { getCurrentUser } from '../services/authService';

// import useLocalStorage from '../hooks/useLocalStorage';

// let initialAuthState = {
//     username: '',
//     userToken: '',
//     ownerId: ''
// };

// const appId = 'Backendless_636B21A4-70D4-D302-FFC2-C24461E91D00';
// const activeUser = localStorage.length > 0 ? Object.values(JSON.parse(localStorage[appId])) : 0;

export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     // const [user, setUser] = useLocalStorage('user', initialAuthState);
//     let [user, setUser] = useState(initialAuthState);

//     // useEffect(() => {
//     //     setUser(user)
//     // }, [user])


//     const setUserInfo = (userInfo) => {
//         console.log(userInfo);
//         setUser(userInfo);
//     }
//     // const login = (authData) => {
//     //     setUser(authData);
//     // }


//     const logout = () => {
//         setUser(initialAuthState);
//     };

//     return (
//         <AuthContext.Provider value={{ user, logout, activeUser, setUserInfo }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuthContext = () => {
//     const authState = useContext(AuthContext);

//     return authState;
// }