import './ProductsCategoryItem.css';

const ProductsCategoryItem = ({category, navigate}) => {

    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="full product">
                <div className="product_img">
                    <div className="center"> <img src={category.imgUrl} alt="#" />
                        {/* <div className="overlay_hover"> <a className="add-bt" href="product_detail3.html">+ Add to cart</a> </div> */}
                    </div>
                </div>
                
                    <div className="product_detail text_align_center" onClick={() => {navigate(category.type)}}>
                        <p className="product_descr">{category.type}</p>
                    </div>
            </div>
        </div>
    );
}

export default ProductsCategoryItem;