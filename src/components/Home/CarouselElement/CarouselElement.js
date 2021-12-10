import './CarouselElement.css';

const CarouselElement = () => {
    return (
        <div className="item">
            <div className="image"><img className="carousel-img" src="images/carousel_1.jpg"/></div>
            {/* <div className="text is-text-left">
                <h1 className="title"> <i className="far fa-hand-point-right"></i>&nbsp;This item has a title.</h1>
                <p>This item has a caption, aligned to the left.</p>
            </div> */}
        </div>
    );

}

export default CarouselElement;