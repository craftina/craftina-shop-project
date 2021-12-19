import './Register.css';
import { useNavigate } from 'react-router-dom';
import * as authService from '../../services/authService';


const Register = () => {
    const navigate = useNavigate();
    const onClickToLogin = () => {
        navigate('/login');
    }

    const onRegisterBtn = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let {email, username, password} = Object.fromEntries(formData);
        authService.register(email, username, password);
        navigate('/');
    }

    return (
        <div>
            <div className="screen-1">
                <form method="POST" onSubmit={onRegisterBtn}>
                    <div className="logo">
                        <img src="./images/form_logo.png" />
                    </div>
                    <div className="input-box email">
                        <label htmlFor="email">Email Address</label>
                        <div>
                            <input type="email" name="email" placeholder="Username@gmail.com" />
                        </div>
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
                    <button className="login-btn">Register</button>
                    <div className="form-footer">You have a registration:<br />
                        <span onClick={onClickToLogin}>Login</span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;