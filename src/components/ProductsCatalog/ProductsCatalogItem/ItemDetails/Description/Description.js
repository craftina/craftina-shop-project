const Description = ({description}) => {

    return (
        <div id="description" className="tab-pane">
            <div className="product_desc">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Description;