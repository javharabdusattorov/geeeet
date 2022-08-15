import React from 'react';
import './Create.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// Import images
import createPlanBg from '../../assets/img/coffee-bg-2.png';
import chooseLine from '../../assets/img/line.png'
import bigOne from '../../assets/img/big-one.png';
import bigTwo from '../../assets/img/big-two.png';
import bigThree from '../../assets/img/big-three.png';
import smallOne from '../../assets/img/small-one.png';
import smallTwo from '../../assets/img/small-two.png';
import smallThree from '../../assets/img/small-three.png';
import smallFour from '../../assets/img/small-four.png';
import smallFive from '../../assets/img/small-five.png';

function CreatePlan() {
    return (<>
        <Header />

            <main>
            <div class="header__about">
                <div class="container header__about-container-2" 
                    style={{backgroundImage: `${createPlanBg}`}}>
                    <div class="row">
                        <div class="col-5">
                            <h1 class="header__about-title">Create a plan</h1>
                            <p class="header__about-text">Build a subscription plan that best fits your needs. We offer an
                                assortment of the best artisan coffees from around the globe delivered fresh to your door.</p>
                        </div>
                    </div>
                </div>
            </div>
        
            <section class="choose">
                <div class="container choose__container">
                    <div class="row">
                        <div class="col-9">
                            <a class="choose__image" href="#">
                                <img src={chooseLine} alt="" />
                            </a>
                        </div>
        
                        <div class="col-12">
                            <div class="row justify-content-between">
                                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <a href="#">
                                        <img class="choose__litle-img" src={bigOne} alt="" />
                                    </a>
                                    <h2 class="choose__title">Pick your <br />
                                        coffee</h2>
                                    <p class="choose__text">Select from our evolving range of artisan coffees. Our beans are
                                        ethically
                                        sourced and we pay fair prices for them. There are new coffees in all profiles
                                        every month for you to try out.</p>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <a href="#">
                                        <img class="choose__litle-img" src={bigTwo} alt="" />
                                    </a>
                                    <h2 class="choose__title">Choose the frequency</h2>
                                    <p class="choose__text">Customize your order frequency, quantity, even your roast style and
                                        grind type. Pause, skip or cancel your subscription with no commitment through our
                                        online portal.</p>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                                    <a href="#">
                                        <img class="choose__litle-img" src={bigThree} alt="" />
                                    </a>
                                    <h2 class="choose__title">Receive and <br /> enjoy!</h2>
                                    <p class="choose__text">We ship your package within 48 hours, freshly roasted. Sit back and
                                        enjoy award-winning world-class coffees curated to provide a distinct tasting
                                        experience.</p>
                                </div>
                            </div>
                        </div>
        
                    </div>
                </div>
            </section>
        
            <section class="section__question">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-sm-12">
                            <div class="row">
                                <div class="col-9">
                                    <div class="section__question-litle-box d-flex">
                                        <a class="section__question-image" href="#">
                                            <img src={smallOne} alt="" />
                                        </a>
                                        <h5 class="section__question-litle-box-title">Preferences</h5>
                                    </div>
                                </div>
                                <div class="col-9">
                                        <div class="section__question-litle-box d-flex">
                                                <a class="section__question-image" href="#">
                                                    <img src={smallTwo} alt="" />
                                                </a>
                                                <h5 class="section__question-litle-box-title">Bean Type</h5>
                                            </div>
                                </div>
                                <div class="col-9">
                                        <div class="section__question-litle-box d-flex">
                                                <a class="section__question-image" href="#">
                                                    <img src={smallThree} alt="" />
                                                </a>
                                                <h5 class="section__question-litle-box-title">Quantity</h5>
                                            </div>
                                </div>
                                <div class="col-9">
                                        <div class="section__question-litle-box d-flex">
                                                <a class="section__question-image" href="#">
                                                    <img src={smallFour} alt="" />
                                                </a>
                                                <h5 class="section__question-litle-box-title">Grind Option</h5>
                                            </div>
                                </div>
                                <div class="col-9">
                                        <div class="section__question-litle-box d-flex">
                                                <a class="section__question-image" href="#">
                                                    <img src={smallFive} alt="" />
                                                </a>
                                                <h5 class="section__question-litle-box-title">Deliveries</h5>
                                            </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-lg-9 col-sm-12">
                        <div class="row">
                            <div class="col-11">
                                        <h2 class="section__question-title text-center">How do you drink your coffee?</h2>
                            </div>
                            <div class="col-12  mt-3">
                                <div class="row justify-content-center">
                                    <div class="col-lg-3 col-md-4 col-8 mt-3">
                                        <div class="section__question-box">
                                            <h5 class="section__question-box-title">Capsule</h5>
                                            <p class="section__question-box-text">Compatible with Nespresso systems and similar
                                                brewers</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-8 mt-3">
                                        <div class="section__question-box">
                                            <h5 class="section__question-box-title">Filter</h5>
                                            <p class="section__question-box-text">For pour over or drip methods like Aeropress,
                                                Chemex, and V60</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-8 mt-3">
                                        <div class="section__question-box">
                                            <h5 class="section__question-box-title">Espresso</h5>
                                            <p class="section__question-box-text">Dense and finely ground beans for an intense,
                                                flavorful experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-9  mt-5">
                                    <h2 class="section__question-title text-center">What type of coffee?</h2>
                            </div>
                            <div class="col-12  mt-3">
                                <div class="row justify-content-center">
                                    <div class="col-lg-3 col-md-4 col-8 mt-3">
                                        <div class="section__question-box">
                                            <h5 class="section__question-box-title">Single Origin</h5>
                                            <p class="section__question-box-text">Distinct, high quality coffee from a specific family-owned farm</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-8 mt-3">
                                        <div class="section__question-box">
                                            <h5 class="section__question-box-title">Decaf</h5>
                                            <p class="section__question-box-text">Just like regular coffee, except the caffeine has been removed</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-8 mt-3">
                                        <div class="section__question-box">
                                            <h5 class="section__question-box-title">Blended</h5>
                                            <p class="section__question-box-text">Combination of two or three dark roasted beans of organic coffees</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-10  mt-5">
                                    <h2 class="section__question-title text-center">How much would you like?</h2>
                            </div>
                            <div class="col-12  mt-3">
                                <div class="row justify-content-center">
                                    <div class="col-lg-3 col-md-4 col-8 mt-3">
                                        <div class="section__question-box">
                                            <h5 class="section__question-box-title">250g</h5>
                                            <p class="section__question-box-text">Perfect for the solo drinker. Yields about 12 delicious cups.</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-8 mt-3">
                                        <div class="section__question-box">
                                            <h5 class="section__question-box-title">500g</h5>
                                            <p class="section__question-box-text">Perfect option for a couple. Yields about 40 delectable cups.</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-8 mt-3">
                                        <div class="section__question-box">
                                            <h5 class="section__question-box-title">1000g</h5>
                                            <p class="section__question-box-text">Perfect for offices and events. Yields about 90 delightful cups.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-9  mt-5">
                                    <h2 class="section__question-title text-center">Want us to grind them?</h2>
                            </div>
                            <div class="col-12  mt-3">
                                <div class="row justify-content-center">
                                    <div class="col-lg-3 col-md-4 col-8 mt-3">
                                        <div class="section__question-box">
                                            <h5 class="section__question-box-title">Wholebean</h5>
                                            <p class="section__question-box-text">Best choice if you cherish the full sensory experience</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-8 mt-3">
                                        <div class="section__question-box">
                                            <h5 class="section__question-box-title">Filter</h5>
                                            <p class="section__question-box-text">For drip or pour-over coffee methods such as V60 or Aeropress</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-8 mt-3">
                                        <div class="section__question-box">
                                            <h5 class="section__question-box-title">Cafetiére</h5>
                                            <p class="section__question-box-text">Course ground beans specially suited for french press coffee</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-11  mt-5">
                                    <h2 class="section__question-title text-center">How often should we deliver?</h2>
                            </div>
                            <div class="col-12  mt-3">
                                <div class="row justify-content-center">
                                    <div class="col-lg-3 col-md-4 col-8 mt-3">
                                        <div class="section__question-box">
                                            <h5 class="section__question-box-title">Every week</h5>
                                            <p class="section__question-box-text">$7.20 per shipment. Includes free first-class shipping.</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-8 mt-3">
                                        <div class="section__question-box">
                                            <h5 class="section__question-box-title">Every 2 weeks</h5>
                                            <p class="section__question-box-text">$9.60 per shipment. Includes free priority shipping.</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-4 col-8 mt-3">
                                        <div class="section__question-box">
                                            <h5 class="section__question-box-title">Every month</h5>
                                            <p class="section__question-box-text">$12.00 per shipment. Includes free priority shipping.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="row justify-content-center">
                                <div class="col-9">
                                        <div class="section__quality-bottom-box">
                                                <p class="section__quality-bottom-box-title">Order Summary</p>
                                                <h2 class="section__quality-bottom-box-text">“I drink my coffee as <span>Filter</span>, with a <span>Decaf</span> type of bean. <span>250g</span> ground ala <span>Cafetiére</span>, sent to me <span>Every Week</span>.”</h2>
                                            </div>
                                </div>
                            </div>
                            
                            <div class="col-11">
                                <div class="btn__box">
                                        <buttton class="section__quality-button">Create my plan!</buttton>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            </main>

        <Footer />
    </>)
}

export default CreatePlan;