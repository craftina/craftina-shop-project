// import Backendless from 'backendless';

import { useAuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';


const Backendless = require('backendless');
Backendless.serverURL = "https://eu-api.backendless.com"
Backendless.initApp('636B21A4-70D4-D302-FFC2-C24461E91D00',
    '9508E315-CF0A-4701-96D7-5EAF69AAA3BE');




const onSuccess = (action, user) => {
    console.log(`User has been ${action}: ${user}`);
}

const onError = (error) => {
    console.error(error.message)
    console.error(error.code)
    console.error(error.status)
    throw error.message;
}

const url = 'https://dinkumdriving.backendless.app/api/data/users';

// export const user = {};




export const loginReq = (username, password) => {
    return Backendless.UserService.login(username, password, true)
        .then((res) => {
            onSuccess('logged', username);
            const ownerId = Backendless.LocalCache.get("current-user-id");
            const userToken = Backendless.LocalCache.get("user-token");
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('userToken', userToken);
            sessionStorage.setItem('ownerId', ownerId);
        })
        .catch(onError);

}

export const register = (email, username, password) => {
    const user = new Backendless.User();
    user.email = email;
    user.username = username;
    user.password = password;

    Backendless.UserService.register(user)
        .then(() => {
            onSuccess('registered', username);

        })
        .catch(onError);
}

export const logoutReq = () => {
    Backendless.UserService.logout()
        .then(() => {
            sessionStorage.clear();
            onSuccess('logged out')
        })
        .catch(onError);
}




export const getCurrentUser = async () => {
    const user = await Backendless.UserService.getCurrentUser();
    console.log(user);
    return user;
     
}

// export const getUser = (id) => {
//     Backendless.Data.of( "Users" ).findById( {objectId: id} )
//  .then( function( result ) {
//      console.log(result);
//   })
//  .catch( function( error ) {
//      console.log(error.message);
//   });
     
// }

export const isAuthenticated = () => {
    // return Boolean(getUser());
}