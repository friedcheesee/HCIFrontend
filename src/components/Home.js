import React from 'react';
import Nav from './Nav.js';

function Home() {
    return (
        <div className="HomePage">
            <Nav/>
            
            {/* Carousel Section */}
            <div id="carouselIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/images/interceptor_650_home.jpg" className="d-block w-100" alt="bike0" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/assured-buyback.jpg" className="d-block w-100" alt="bike1" />
                    </div>
                    <div className="carousel-item">
                        <img src="/images/meteor-350-banner.jpg" className="d-block w-100" alt="bike2" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Banner Section */}
            <div className="banner">
                <h2>The Latest Models Now with a 3D Viewer!</h2>
            </div>

            {/* 3D Bike Viewer Section */}
            <div className="three-d-viewer">
                <iframe
                    width="640"
                    height="480"
                    src="https://sketchfab.com/playlists/embed?collection=8208e62123664834a689a291769741ad&autostart=0"
                    title="refs - vehicles - motorcycles"
                    frameBorder="0"
                    allowFullScreen
                    mozallowfullscreen="true"
                    webkitallowfullscreen="true"
                    allow="autoplay; fullscreen; xr-spatial-tracking"
                    xr-spatial-tracking
                    execution-while-out-of-viewport
                    execution-while-not-rendered
                    web-share
                ></iframe>
            </div>

            {/* CSS Styles */}
            <style>
                {`
                    .three-d-viewer {
                        margin-top: 30px;
                        text-align: center;
                    }

                    iframe {
                        border: none;
                        width: 100%;
                        max-width: 640px;
                        height: 480px;
                    }

                    .carousel {
                        margin-bottom: 40px;
                    }

                    .carousel-inner {
                        position: relative;
                        width: 100%;
                        overflow: hidden;
                    }

                    .carousel-item {
                        display: none;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                        -ms-flex: 0 0 100%;
                        flex: 0 0 100%;
                        -webkit-transition: transform 0.6s ease;
                        transition: transform 0.6s ease;
                    }

                    .carousel-item-next, .carousel-item-prev, .carousel-item.active {
                        display: block;
                    }

                    .carousel-control-prev, .carousel-control-next {
                        position: absolute;
                        top: 50%;
                        transform: translate(0, -50%);
                        -webkit-transform: translate(0, -50%);
                    }

                    .banner {
                        background-color: #f8f9fa;
                        text-align: center;
                        padding: 20px;
                        margin-top: 30px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }

                    .banner h2 {
                        font-size: 24px;
                        color: #333;
                        margin: 0;
                    }
                `}
            </style>
        </div>
    );
}

export default Home;
