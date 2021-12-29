import "./ItemDetails.css";
import { getItemDetails, addToCart } from "../../../../services/apiServices";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation, NavLink, Routes, Route } from 'react-router-dom';
import Description from "./Description/Description";
import Reviews from "./Reviews/Reviews";


const ItemDetails = ({ type }) => {
    const navigate = useNavigate()

    const location = useLocation().pathname
    const id = location.split(`/${type}-`)[1];

    const [item, setItem] = useState({});
    const [path, setPath] = useState();
    const [activeTab, setActiveTab] = useState();

    useEffect(() => {
        setPath(location)
    }, [location])



    useEffect(() => {
        getItemDetails(type, id)
            .then(result => {
                setItem(result)

            });
    }, [])

    useEffect(() => {
        setActiveTab(activeTab);
    }, [activeTab])


    // const onClickTabs = (e) => {
    //     const element = e.target;
    //     const elementText = element.text;
    //     console.log(element.className);

    //     if (!element.className.includes("active")) {
    //         element.classList.add('active');
    //         if (elementText === 'Description') {
    //             setActiveTab(<Description />);
    //         } else if (elementText === 'Reviews') {
    //             setActiveTab(<Reviews />)
    //         }
    //     } else {
    //         element.classList.remove('active');
    //         setActiveTab('');
    //     }
    // }

    const onDescription = (e) => {
        e.preventDefault();
        setActiveTab(<Description description={item.details.longDescription}/>)
        navigate('#description')
    } 
    
    
    
    const onReviews = (e) => {
        e.preventDefault();
        setActiveTab(<Reviews item={item}/>)
        navigate('#reviews')
    } 

    // const activeTab = () => {
    //     if(path.split('#')[1] === 'description'){
    //         return <Description />
    //     } else if(path.split('#')[1] === 'reviews'){
    //         return <Reviews />
    //     }
    // }
    

    const onAddToCart = (e) => {
        e.preventDefault();
        const ownerId = sessionStorage.userToken;
        if (ownerId) {
            addToCart(item.name, item.price, item.imgUrl, ownerId);
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
                            <img src={item.imgUrl} alt="#" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 product_detail_side">
                        <div className="abotext_box">
                            <div className="product-heading">
                                <h2>{item.name}</h2>
                            </div>
                            <div className="product-detail-side">
                                <span className="new-price">Price: ${item.price}</span>
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
                                <p>{item.objectId ? item.details.shortDescription : ''}</p>

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
                                    <li className="nav-item descr"> <button className="nav-link" onClick={onDescription}    >Description</button> </li>
                                    <li className="nav-item reviews"> <button className="nav-link"  onClick={onReviews}   >Reviews</button> </li>
                                </ul>
                                {/* <!-- Tab panes --> */}
                                <div className="tab-content">
                                    {activeTab}
                                    <Routes>
                                        <Route path={`/${location}#description`} element={<Description />} />
                                        <Route path={`/${location}#reviews`} element={<Reviews />} />
                                    </Routes>
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