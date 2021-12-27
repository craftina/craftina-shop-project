import './Contacts.css';
import { useNavigate } from 'react-router';
import MapComponent from './Map/Map';

const Contacts = () => {
    const navigate = useNavigate();
    const onSubmitSend = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let {name, email, phone, message} = Object.fromEntries(formData);
        console.log(name);
        console.log(message);
        navigate('/');
    }

    return (
        <div className="contacts-page">
            <div className="contactus">
                <div className="title">
                    <h2>Contact Us</h2>
                </div>
            </div>

            <div className="contact">
                <div className="container-fluid padddd">

                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 padddd">
                            <div className="contacts">
                                <p> E-mail: .......................</p>
                                <p> Phone: .......................</p>
                                <p> Adress: bul. "Vasil Levski" 50, 1142 Sofia Center, Sofia, Bulgaria</p>
                            </div>
                            <div className="map_section">
                                <div id="map_component">
                                <MapComponent/>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 padddd">
                            <form className="main_form" method="POST" onSubmit={onSubmitSend}>
                                <div className="row">
                                    <div className="input-box">
                                        <input className="entry" placeholder="Name" type="text" name="name" />
                                    </div>
                                    <div className="input-box">
                                        <input className="entry" placeholder="Email" type="text" name="email" />
                                    </div>
                                    <div className="input-box">
                                        <input className="entry" placeholder="Phone" type="text" name="phone" />
                                    </div>
                                    <div className="input-box textarea-div">
                                        <textarea className="textarea entry" placeholder="Message" type="text" name="message"></textarea>
                                    </div>
                                    
                                        <button className="send-btn">Send</button>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;