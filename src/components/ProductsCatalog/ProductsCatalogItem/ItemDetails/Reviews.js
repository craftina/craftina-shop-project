import './Reviews.css';
import ReviewItem from './ReviewItem/ReviewItem';
import { useState , useContext} from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../../contexts/AuthContext';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    let {userInfo} = useContext(AuthContext);
    console.log(userInfo);


    return (
        <div id="reviews" className="tab-pane">
            <div className="product_review">
                <h3>Reviews</h3>
                {/* {reviews.length > 0
                    ? reviews.map(r => <Reviews review={r} />)
                    : 'There is not reviews for this product yet.'} */}
                    <ReviewItem/>
                    {userInfo.userToken
                    ? <>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="full review_bt_section">
                            <div className="add_review">

                                <Link className="btn_review" data-toggle="collapse" to="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Leave a Review</Link>

                            </div>
                        </div>

                        <div className="full">

                            <div id="collapseExample" className="full collapse commant_box">
                                <form method="POST">
                                    {/* <input id="ratings-hidden" name="rating" type="hidden" /> */}
                                    <textarea className="form-control animated" cols="50" id="new-review" name="comment" placeholder="Enter your review here..." required=""></textarea>
                                    <div className="full_bt center">
                                        <button className="btn_review" type="submit">Save</button>
                                    </div>
                                </form>
                            </div>

                        </div>

                    </div>

                </div>
                    </>
                    : ''}

            </div>
        </div>
    );
}

export default Reviews;