import React from 'react';
import './About.css';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// Import images
import aboutBg from '../../assets/img/coffee-bg.png';
import bitmapOne from '../../assets/img/bitmap-1.png';
import bitmapTwo from '../../assets/img/bitmap-2.png';
import combinedShape1 from '../../assets/img/combined-shape-1.png';
import combinedShape2 from '../../assets/img/combined-shape-3.png';
import combinedShape3 from '../../assets/img/combined-shape-4.png';

function About() {
    return (<>
    <Header />

        <main>
        <div class="header__about">
            <div class="container header__about-container" style={{backgroundImage: `url(${aboutBg})`}}>
                <div class="row">
                    <div class="col-5">
                        <h1 class="header__about-title">About Us</h1>
                        <p class="header__about-text">Coffeeroasters began its journey of exotic discovery in 1999,
                            highlighting stories of coffee from
                            around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in
                            every shipment.</p>
                    </div>
                </div>
            </div>
        </div>
    
        <section class="commitment">
            <div class="container section__commitment-container">
                <div class="row">
                    <div class="col-lg-5 col-md-6 col-sm-12">
                        <a class="section__commitment-image" href="#">
                            <img src={bitmapOne} alt="" />
                        </a>
                    </div>
                    <div class="col-lg-7 col-md-6 col-sm-12">
                        <div class="section-commitment-box">
                            <h2 class="section__commitment-title">Our commitment</h2>
                            <p class="section__commitment-text">We’re built on a simple mission and a commitment to doing
                                good along the way. We want to make it
                                easy for you to discover and brew the world’s best coffee at home. It all starts at the
                                source.
                                To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to
                                understand the challenges and opportunities in each of these places. We collaborate with
                                exceptional coffee growers and empower a global community of farmers through with well above
                                fair-trade benchmarks. We also offer training, support farm community initiatives, and
                                invest in
                                coffee plant science. Curating only the finest blends, we roast each lot to highlight
                                tasting
                                profiles distinctive to their native growing region.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
        <div class="section__quality">
            <div class="container section__quality-container">
                <div class="row">
                    <div class="col-lg-7 col-md-6 col-12">
                        <h2 class="section__quality-title">Uncompromising quality</h2>
                        <p class="section__quality-text">Although we work with growers who pay close attention to all stages of harvest and processing, we
                            employ, on our end, a rigorous quality control program to avoid over-roasting or baking the
                            coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to
                            roast consistent, user-friendly coffee, so that brewing is easy and enjoyable.</p>
                    </div>
                    <div class="col-lg-5 col-md-6 col-12">
                        <a class="section__quality-image" href="#">
                            <img src={bitmapTwo} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    
        <section class="section__maps">
            <div class="container section__maps-container">
                <div class="row justify-content-center">
                    <h3 class="section__maps-title">Our headquarters</h3>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                        <a class="section__maps-image" href="#">
                            <img src={combinedShape1} alt="" />
                        </a>
                        <h2 class="section__maps-litle-title">United Kingdom</h2>
                        <ul class="section__maps-link">
                            <li><a href="#">68  Asfordby Rd </a></li>
                            <li><a href="#">Alcaston</a></li>
                            <li><a href="#">SY6 1YA</a></li>
                            <li><a href="#">+44 1241 918425 </a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                        <a class="section__maps-image" href="#">
                            <img src={combinedShape2} alt="" />
                        </a>
                        <h2 class="section__maps-litle-title">Canada</h2>
                        <ul class="section__maps-link">
                            <li><a href="#">1528  Eglinton Avenue</a></li>
                            <li><a href="#">Toronto</a></li>
                            <li><a href="#">Ontario M4P 1A6</a></li>
                            <li><a href="#">+1 416 485 2997 </a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                        <a class="section__maps-image" href="#">
                            <img src={combinedShape3} alt="" />
                        </a>
                        <h2 class="section__maps-litle-title">Australia</h2>
                        <ul class="section__maps-link">
                            <li><a href="#">36 Swanston Street</a></li>
                            <li><a href="#">Kewell</a></li>
                            <li><a href="#">Victoria</a></li>
                            <li><a href="#">+61 4 9928 3629</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </main>

    <Footer />
    </>)
}