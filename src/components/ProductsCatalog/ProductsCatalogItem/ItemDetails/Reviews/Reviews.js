import './Reviews.css';
import ReviewItem from './ReviewItem/ReviewItem';
import { useState, useContext, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../../../../contexts/AuthContext';
import { addReview, getReviews } from '../../../../../services/apiServices';
// import { useAuthContext } from '../../../../../contexts/AuthContext';

const Reviews = ({ item }) => {
    const [reviews, setReviews] = useState([]);
    const [classNotific, setClassNotific] = useState('');

    useEffect(() => {
        setClassNotific('');
    }, [])

    const reviewsItems = getReviews(item.objectId);
    console.log(reviewsItems);
    useEffect(() => {
        
    }, [])
    const ownerId = sessionStorage.getItem('ownerId');
    const username = sessionStorage.getItem('username')
    const itemId = item.objectId;

    const onSaveReview = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let { comment, rating } = Object.fromEntries(formData);
        console.log(username);

        if (comment.length > 0 && rating !== undefined) {
            addReview(username, rating, comment, ownerId, itemId);
            setClassNotific('')
        } else {
            setClassNotific('hiddenNotific')
        }

    }

    // if (ownerId) {
    //     addToCart(item.name, item.price, item.imgUrl, ownerId);
    //     navigate('/')
    // } else {
    //     navigate('/login')
    // }

    return (
        <div id="reviews" className="tab-pane">
            <div className="product_review">
                <h3>Reviews</h3>
                {/* {reviews.length > 0
                    ? reviews.map(r => <Reviews review={r} />)
                    : 'There is not reviews for this product yet.'} */}
                <ReviewItem />
                {sessionStorage.username
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
                                        <form method="POST" onSubmit={onSaveReview}>
                                            <div className='ratings'>
                                                <span className='rating'>Rating</span>
                                                <div>
                                                    <div className='numbers'>
                                                        <span>1</span>
                                                        <span>2</span>
                                                        <span>3</span>
                                                        <span>4</span>
                                                        <span>5</span>
                                                    </div>
                                                    <div>
                                                        <input type="radio" className="rate" name="rating" value="1"></input>
                                                        <input type="radio" className="rate" name="rating" value="2"></input>
                                                        <input type="radio" className="rate" name="rating" value="3"></input>
                                                        <input type="radio" className="rate" name="rating" value="4"></input>
                                                        <input type="radio" className="rate" name="rating" value="5"></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <textarea className="form-control animated" cols="50" id="new-review" name="comment" placeholder="Enter your review here..." required=""></textarea>
                                            <p className={classNotific}>All fields must be filled!</p>
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