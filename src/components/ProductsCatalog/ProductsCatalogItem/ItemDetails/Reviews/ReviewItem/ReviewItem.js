import './ReviewItem.css';

const ReviewItem = () => {


    const onDelete = () => {

    }

    const onEdit = () => {

    }
    return (
        <div className="commant-text row">
            <div className="review_info">
                <h5>Username</h5>
                <p><span className="c_date">Date</span></p>
                <span className="rating">
                    5
                    <i className="fa fa-star"></i>
                </span>
                <p className="msg">
                    Comment
                </p>
                <div id="review-btns">
                    <button id="edit-review-btn" onClick={onEdit}>Edit</button>
                    <button id="delete-review-btn" onClick={onDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
}

export default ReviewItem;