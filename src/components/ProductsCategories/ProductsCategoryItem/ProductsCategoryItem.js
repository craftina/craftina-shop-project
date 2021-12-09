import './ProductsCategoryItem.css'

const ProductsCategoryItem = () => {
    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="full product">
                <div className="product_img">
                    <div className="center"> <img src="images/mugs.jpg" alt="#" />
                        {/* <div className="overlay_hover"> <a className="add-bt" href="product_detail3.html">+ Add to cart</a> </div> */}
                    </div>
                </div>
                <div className="product_detail text_align_center">
                    <p className="product_descr">Mugs</p>
                </div>
            </div>
        </div>
    );
}

export default ProductsCategoryItem;