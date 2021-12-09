import './Home.css';
import CarouselElement from './CarouselElement/CarouselElement';

const Home = () => {
    return (
                <section class="container-home">
                            <div class="lx-card carousel-container">
                                <CarouselElement />
                                {/* <div class="item fade">
                                    <div class="image"><img src="https://bit.ly/34xczKy" /></div>
                                </div>
                                <div class="item fade">
                                    <div class="image"><img src="https://bit.ly/3lkp5DW" /></div>
                                    <div class="text is-text-left">
                                        <h1 class="title"> <i class="far fa-hand-point-right"></i>&nbsp;This item has a title.</h1>
                                        <p>This item has a caption, aligned to the left.</p>
                                    </div>
                                </div>
                                <div class="item fade">
                                    <div class="image"><img src="https://bit.ly/3iMHuI1" /></div>
                                    <div class="text is-text-centered">
                                        <p> <i class="fas fa-info-circle"></i>&nbsp;This item has a caption, aligned to the center.</p>
                                    </div>
                                </div><a class="prev has-dflex-center"><i class="fas fa-angle-left"></i></a><a class="next has-dflex-center"><i class="fas fa-angle-right"></i></a> */}
                            </div>
                </section>
       
    );
}

export default Home;