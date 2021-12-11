// import Backendless from 'backendless';
// const Backendless = require('backendless');
// Backendless.serverURL = "https://eu-api.backendless.com"
// Backendless.initApp('636B21A4-70D4-D302-FFC2-C24461E91D00',
//  '9508E315-CF0A-4701-96D7-5EAF69AAA3BE')

// const onSuccess = (action, user) => {
//   console.log(`User has been ${action}:\n', ${user}`)
// }

// const onError = error => {
//   console.error(error.message)
//   console.error(error.code)
//   console.error(error.status)
// }

const url = 'https://dinkumdriving.backendless.app/api/data/Users';

export const login = (email, password) =>{
    localStorage.setItem('email', email);

}

export const register = (email, username, password ) => {
  return fetch(url, {
        method:'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({email, username, password})
    })
    .then(res => res.json())
}

export const getUser = () => {
    let user = localStorage.getItem('email');
    return user;
}

export const isAuthenticated = () => {
    return Boolean(getUser());
}