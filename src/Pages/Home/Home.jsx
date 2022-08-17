import React from 'react';
import './Home.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';

// Import images
import headerBg from '../../assets/img/header-fon.jpg'; 
import collectionBg from '../../assets/img/collection.png';
import productOne from '../../assets/img/expresso.png';
import productTwo from '../../assets/img/planalto.png';
import productThree from '../../assets/img/piccollo.png';
import productFour from '../../assets/img/danche.png';
import chooseCoffee from '../../assets/img/combied-coffee.png';
import chooseGift from '../../assets/img/combied-gift.png';
import chooseCar from '../../assets/img/combied-car.png';
import bigOne from '../../assets/img/big-one.png';
import bigTwo from '../../assets/img/big-two.png';
import bigThree from '../../assets/img/big-three.png';


function Home() {
    return (<> 
    <Header />

        <main>
                <div className="header__simple">
                    <div className="container header__simple-fon" 
                        style={{backgroundImage: `url(${headerBg})`}}>
                        <div className="col-lg-6 col-6">
                            <h1 className="header__simple-title">Great coffee
                                made simple.</h1>
                            <p className="header__simple-text">Start your mornings with the world’s best coffees. Try our expertly
                                curated artisan coffees from our
                                best roasters delivered directly to your door, at your schedule.</p>
                            <Button />
                        </div>
                    </div>
                </div>

                <section class="section__collection">
                    <div class="container">
                        <div class="row justify-content-center text-center">
                            <div class="col-lg-12">
                                <img class="section__collection-bg" src={collectionBg} alt="" />
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div class="section__collection-img">
                                    <img src={productOne} alt="" />
                                </div>
                                <h4 class="section__collection-title ">Gran Espresso</h4>
                                <p class="section__collection-text">Light and flavorful blend with cocoa and black pepper for an
                                    intense experience.</p>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div class="section__collection-img">
                                    <img src={productTwo} alt="" />
                                </div>
                                <h4 class="section__collection-title ">Planalto</h4>
                                <p class="section__collection-text">Brazilian dark roast with rich and velvety body, and hints of
                                    fruits and nuts.</p>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div class="section__collection-img">
                                    <img src={productThree} alt="" />
                                </div>
                                <h4 class="section__collection-title ">Piccollo</h4>
                                <p class="section__collection-text">Mild and smooth blend featuring notes of toasted almond and
                                    dried cherry.</p>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div class="section__collection-img">
                                    <img src={productFour} alt="" />
                                </div>
                                <h4 class="section__collection-title ">Danche</h4>
                                <p class="section__collection-text">Ethiopian hand-harvested blend densely packed with vibrant fruit
                                    notes.</p>
                            </div>
                        </div>
                    </div>
                </section>
            
                <section class="choose">
                    <div class="container choose__container">
                        <div class="row justify-content-center text-center">
                            <div class="col-lg-6">
                                <h3 class="choose__title">Why choose us?</h3>
                                <p class="choose__text">A large part of our role is choosing which particular coffees will be
                                    featured
                                    in our range. This means working closely with the best coffee growers to give
                                    you a more impactful experience on every level.</p>
                            </div>
                        </div>
                        <div class="row justify-content-center text-center choose__container-little-box">
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="choose__box">
                                    <div class="choose__box-image"><img src={chooseCoffee} /></div>
                                    <h4 class="choose__box-title">Best quality</h4>
                                    <p class="choose__box-text">Discover an endless variety of the world’s best artisan coffee from
                                        each of our roasters.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="choose__box">
                                    <div class="choose__box-image"><img src={chooseGift} /></div>
                                    <h4 class="choose__box-title">Exclusive benefits</h4>
                                    <p class="choose__box-text">Special offers and swag when you subscribe, including 30% off your
                                        first shipment.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="choose__box">
                                    <div class="choose__box-image">
                                        <img class="choose__box-img" src={chooseCar} alt="" />
                                    </div>
                                    <h4 class="choose__box-title">Free shipping</h4>
                                    <p class="choose__box-text">We cover the cost and coffee is delivered fast. Peak freshness:
                                        guaranteed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
                <section class="number">
                    <div class="container">
                        <h3 class="number__title">How it works</h3>
                        <div class="row justify-content-between">
                            <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                                <img src={bigOne} alt="" />
                                <h3 class="number__litle-title">Pick your
                                    <br /> coffee
                                </h3>
                                <p class="number__text">Select from our evolving range of artisan coffees. Our beans are ethically
                                    sourced and we pay
                                    fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
                                <Button />
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                                <img src={bigTwo} alt="" />
                                <h3 class="number__litle-title">Choose the frequency</h3>
                                <p class="number__text">Customize your order frequency, quantity, even your roast style and grind
                                    type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-6 col-12">
                                <img src={bigThree} alt="" />
                                <h3 class="number__litle-title">Receive and enjoy!</h3>
                                <p class="number__text">We ship your package within 48 hours, freshly roasted. Sit back and enjoy
                                    award-winning world-class coffees curated to provide a distinct tasting experience.</p>
                            </div>
                        </div>
                    </div>
                </section>
        </main>

    <Footer />
    </>)
}

export default Home;
