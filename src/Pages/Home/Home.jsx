import React from "react";
import "./Home.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../contents";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <HelmetProvider>
            <section id="home" className="home">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> {meta.title} </title>
                    <meta name="description" content={meta.description} />
                </Helmet>
                <div className="intro_sec d-block d-lg-flex align-tems-center">
                    <div
                        className="h_bg-image order-1 order-lg-2 h-1000"
                        style={{ backgroundImage: `url(${introdata.your_img_url})` }}
                    ></div>
                    <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
                        <div className="align-self-center">
                            <div className="intro mx-auto">
                                <h2 className="mb-1x">{introdata.title}</h2>
                                <h1 className="fluidz-48 mb-1x typewriter-text">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                introdata.animated.first,
                                                introdata.animated.second,
                                                introdata.animated.third,
                                                introdata.animated.fourth,
                                            ],
                                            autoStart: true,
                                            loop: true,
                                            deleteSpeed: 10,
                                        }}
                                    />
                                </h1>
                                <p className="mb-1x">{introdata.description}</p>
                                <div className="introButton-action pb-5">
                                    <Link to="/Projects" className="text_2">
                                        <div id="buttonHeader" className="acBtn btn">
                                            Projects
                                            <div className="ring one"></div>
                                            <div className="ring two"></div>
                                            <div className="ring three"></div>
                                        </div>
                                    </Link>
                                    <Link to="/Skills" className="text_2">
                                        <div id="buttonHeader" className="acBtn btn">
                                            About Me
                                            <div className="ring one"></div>
                                            <div className="ring two"></div>
                                            <div className="ring three"></div>
                                        </div>
                                    </Link>
                                    <Link to="/Contact" className="text_2">
                                        <div id="buttonHeader" className="acBtn btn">
                                            Contact Me
                                            <div className="ring one"></div>
                                            <div className="ring two"></div>
                                            <div className="ring three"></div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </HelmetProvider>
    );
};