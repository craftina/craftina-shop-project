import './Home.css';
import CarouselElement from './CarouselElement/CarouselElement';

const Home = () => {
    return (
                <section className="container-home">
                            <div className="lx-card carousel-container">
                                <CarouselElement />
                                {/* <div className="item fade">
                                    <div className="image"><img src="https://bit.ly/34xczKy" /></div>
                                </div>
                                <div className="item fade">
                                    <div className="image"><img src="https://bit.ly/3lkp5DW" /></div>
                                    <div className="text is-text-left">
                                        <h1 className="title"> <i className="far fa-hand-point-right"></i>&nbsp;This item has a title.</h1>
                                        <p>This item has a caption, aligned to the left.</p>
                                    </div>
                                </div>
                                <div className="item fade">
                                    <div className="image"><img src="https://bit.ly/3iMHuI1" /></div>
                                    <div className="text is-text-centered">
                                        <p> <i className="fas fa-info-circle"></i>&nbsp;This item has a caption, aligned to the center.</p>
                                    </div>
                                </div><a className="prev has-dflex-center"><i className="fas fa-angle-left"></i></a><a className="next has-dflex-center"><i className="fas fa-angle-right"></i></a> */}
                            </div>
                </section>
       
    );
}

export default Home;