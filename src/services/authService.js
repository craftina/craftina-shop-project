// import Backendless from 'backendless';
const Backendless = require('backendless');
Backendless.serverURL = "https://eu-api.backendless.com"
Backendless.initApp('636B21A4-70D4-D302-FFC2-C24461E91D00',
 '9508E315-CF0A-4701-96D7-5EAF69AAA3BE')

const onSuccess = (action, user) => {
  console.log(`User has been ${action}: ${user}`);
}

const onError = (error) => {
  console.error(error.message)
  console.error(error.code)
  console.error(error.status)
}

const url = 'https://dinkumdriving.backendless.app/api/data/users';

export const login = (username, password) =>{
    Backendless.UserService.login(username, password)
  .then(onSuccess('logged', username))
  .catch(onError);
}

export const register = (email, username, password ) => {
    const user = new Backendless.User();
    user.email = email;
    user.username = username;
    user.password = password;
    
    Backendless.UserService.register( user )
    .then(onSuccess('registered', username))
    .catch( onError );
}

export const getUser = () => {
    let user = localStorage.getItem('email');
    return user;
}

export const isAuthenticated = () => {
    return Boolean(getUser());
}