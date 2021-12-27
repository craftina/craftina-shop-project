import "./ItemDetails.css";
import { getMugDetails } from "../../../../services/apiServices";
import { addToCart } from "../../../../services/authService";
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Description from "./Description";
import Reviews from "./Reviews";


const ItemDetails = () => {
    const navigate = useNavigate()
    const [mug, setMug] = useState({});
    const [activeTab, setActiveTab] = useState();



    useEffect(() => {
        getMugDetails('02D42146-7234-474C-AB96-98B32512FF68')
            .then(result => {
                setMug(result)

            });
    }, [])

    useEffect(() => {

    }, [activeTab])


    const onClickTabs = (e) => {
        const element = e.target;
        const elementText = element.text;
        console.log(element.className);

        if (!element.className.includes("active")) {
            element.classList.add('active');
            if (elementText === 'Description') {
                setActiveTab(<Description />);
            } else if (elementText === 'Reviews') {
                setActiveTab(<Reviews />)
            }
        } else {
            element.classList.remove('active');
            setActiveTab('');
        }
    }


    const onAddToCart = (e) => {
        e.preventDefault();
        const ownerId = sessionStorage.userToken;
        if (ownerId) {
            addToCart(mug.name, mug.price, mug.imgUrl, ownerId);
            navigate('/')
        } else {
            navigate('/login')
        }
    }



    return (
        <div className="layout_padding-2">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="img_box">
                            <img src={mug.imgUrl} alt="#" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 product_detail_side">
                        <div className="abotext_box">
                            <div className="product-heading">
                                <h2>{mug.name}</h2>
                            </div>
                            <div className="product-detail-side">
                                <span className="new-price">Price: ${mug.price}</span>
                                <span className="rating">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                </span>
                                <span className="review">(5 customer review)</span>
                            </div>
                            <div className="detail-contant">
                                <p>{mug.objectId ? mug.details.description : ''}</p>

                                <button type="submit" className="bt_main" onClick={onAddToCart}>Add to cart</button>



                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="full">
                            <div className="tab_bar_section">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item"> <Link className="nav-link" data-toggle="tab" to="#description" onClick={onClickTabs} >Description</Link> </li>
                                    <li className="nav-item"> <Link className="nav-link" data-toggle="tab" to="#reviews" onClick={onClickTabs} >Reviews</Link> </li>
                                </ul>
                                {/* <!-- Tab panes --> */}
                                <div className="tab-content">
                                    <Reviews />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ItemDetails;