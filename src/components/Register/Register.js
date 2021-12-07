import './Register.css';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const onClickToLogin = () => {
        navigate('/login');
    }

    return (
        <div>
            <div className="screen-1">
                <div className="logo">
                    <img src="./images/form_logo.png" />
                </div>
                <div className="input-box email">
                    <label for="email">Email Address</label>
                    <div>
                        <input type="email" name="email" placeholder="Username@gmail.com" />
                    </div>
                </div>
                <div className="input-box username">
                    <label for="username">Username</label>
                    <div>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                </div>
                <div className="input-box password">
                    <label for="password">Password</label>
                    <div>
                        <input className="pas" type="password" name="password" placeholder="············" />
                    </div>
                </div>
                <button className="login-btn">Register</button>
                <div className="form-footer">You have a registration:<br />
                    <span onClick={onClickToLogin}>Login</span></div>
            </div>
        </div>
    );
}

export default Register;