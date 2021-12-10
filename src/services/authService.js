export const login = (email) =>{
    localStorage.setItem('email', email);

}

export const getUser = () => {
    let user = localStorage.getItem('email');
    return user;
}

export const isAuthenticated = () => {
    return Boolean(getUser());
}