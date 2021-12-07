import './Home.css';

const Home = () => {
    return (
        <section className="slider_section">
                <div className="banner_main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mapimg">
                                <div className="text-bg">
                                    <h1>The latest <br /> <strong className="black_bold">furniture Design</strong><br /></h1>
                                    <a href="#">Shop Now <i className='fa fa-angle-right'></i></a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                <div className="text-img">
                                    <figure><img src="images/bg.jpg" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Home;