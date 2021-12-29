import './Login.css';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';
import { useContext } from 'react';



const Login = () => {

    const navigate = useNavigate();
    // const { setUserInfo, user } = useContext(AuthContext);


    const onClickToRegister = () => {
        navigate('/register');
    }



    const onLoginBtn = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let { username, password } = Object.fromEntries(formData);
        authService.loginReq(username, password);
        
        // setTimeout(async () => {
        //     userData = await authService.getCurrentUser();
        //     // setUserInfo(userData);
        //     setUserInfo({
        //         username: userData.username,
        //         userToken: userData['user-token'],
        //         ownerId: userData.ownerId
        //     });
        //     console.log(user);
        // }, 1000);

        
        // authService.getUser()
        // setUserInfo(userData);
        // console.log(await authService.getCurrentUser());
        navigate('/');
    }


    return (
        <div>
            <div className="screen-1">
                <form method="POST" onSubmit={onLoginBtn}>

                    <div className="logo">
                        <img src="./images/form_logo.png" />
                    </div>
                    <div className="input-box username">
                        <label htmlFor="username">Username</label>
                        <div>
                            <input type="text" name="username" placeholder="username" />
                        </div>
                    </div>
                    <div className="input-box password">
                        <label htmlFor="password">Password</label>
                        <div>
                            <input className="pas" type="password" name="password" placeholder="············" />
                        </div>
                    </div>
                    <button className="login-btn">Login</button>
                    <div className="form-footer">Don't have a registration:<br />
                        <span onClick={onClickToRegister}>Register</span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;