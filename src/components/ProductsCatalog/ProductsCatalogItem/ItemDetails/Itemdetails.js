import "./ItemDetails.css";
import { getMugDetails } from "../../../../services/apiServices";
import { useState, useEffect } from "react";

const ItemDetails = () => {
    const [mug, setMug] = useState({});

    useEffect(() => {
        getMugDetails('02D42146-7234-474C-AB96-98B32512FF68')
            .then(result => {
                setMug(result)
                
            });
    }, [])



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

                                <button type="submit" className="bt_main">Add to cart</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="full">
                            <div className="tab_bar_section">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item"> <a className="nav-link active" data-toggle="tab" href="#description">Description</a> </li>
                                    <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#reviews">Reviews (2)</a> </li>
                                </ul>
                                {/* <!-- Tab panes --> */}
                                <div className="tab-content">
                                    <div id="description" className="tab-pane active">
                                        <div className="product_desc">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac elementum elit. Morbi eu arcu ipsum. Aliquam lobortis accumsan quam ac convallis. Fusce elit mauris, aliquet at odio vel, convallis vehicula nisi. Morbi vitae porttitor dolor. Integer eget metus sem. Nam venenatis mauris vel leo pulvinar, id rutrum dui varius. Nunc ac varius quam, non convallis magna. Donec suscipit commodo dapibus.
                                                <br />
                                                <br />Vestibulum et ullamcorper ligula. Morbi bibendum tempor rutrum. Pelle tesque auctor purus id molestie ornare.Donec eu lobortis risus. Pellentesque sed aliquam lorem. Praesent pulvinar lorem vel mauris ultrices posuere. Phasellus elit ex, gravida a semper ut, venenatis vitae diam. Nullam eget leo massa. Aenean eu consequat arcu, vitae scelerisque quam. Suspendisse risus turpis, pharetra a finibus vitae, lobortis et mi.</p>
                                        </div>
                                    </div>
                                    <div id="reviews" className="tab-pane fade">
                                        <div className="product_review">
                                            <h3>Reviews (2)</h3>
                                            <div className="commant-text row">
                                                <div className="col-lg-2 col-md-2 col-sm-4">
                                                    <div className="profile">
                                                        <img className="img-responsive" src="images/lllll.png" alt="#" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-10 col-md-10 col-sm-8">
                                                    <h5>Ravi</h5>
                                                    <p><span className="c_date">July 23, 2019</span> | <span><a rel="nofollow" className="comment-reply-link" href="#">Reply</a></span></p>
                                                    <span className="rating">
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                                    </span>
                                                    <p className="msg">ThisThis book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet..
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="commant-text row">
                                                <div className="col-lg-2 col-md-2 col-sm-4">
                                                    <div className="profile">
                                                        <img className="img-responsive" src="images/lllll.png" alt="#" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-10 col-md-10 col-sm-8">
                                                    <h5>Ravi</h5>
                                                    <p><span className="c_date">July 23, 2019</span> | <span><a rel="nofollow" className="comment-reply-link" href="#">Reply</a></span></p>
                                                    <span className="rating">
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star" aria-hidden="true"></i>
                                                        <i className="fa fa-star-o" aria-hidden="true"></i>
                                                    </span>
                                                    <p className="msg">Nunc augue purus, posuere in accumsan sodales ac, euismod at est. Nunc faccumsan ermentum consectetur metus placerat mattis. Praesent mollis justo felis, accumsan faucibus mi maximus et. Nam hendrerit mauris id scelerisque placerat. Nam vitae imperdiet turpis</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="full review_bt_section">
                                                        <div className="float-right">

                                                            <a className="bt_main" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Leave a Review</a>

                                                        </div>
                                                    </div>

                                                    <div className="full">

                                                        <div id="collapseExample" className="full collapse commant_box">
                                                            <form acceptCharset="UTF-8" action="index.html" method="post">
                                                                <input id="ratings-hidden" name="rating" type="hidden" />
                                                                <textarea className="form-control animated" cols="50" id="new-review" name="comment" placeholder="Enter your review here..." required=""></textarea>
                                                                <div className="full_bt center">
                                                                    <button className="bt_main" type="submit">Save</button>
                                                                </div>
                                                            </form>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </div>
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