import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Navbar, Container, Nav, NavDropdown, Form, style } from "react-bootstrap";
import Products from "./ProductsLayout";
import custom from "./custom.module.css";
import ProductsLayout from "./ProductsLayout";

export default function About() {

    return (
        <div >
            <div className={`image-aboutus-banner ${custom.imageaboutusbanner} `} style={{ marginTop:0 }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className={`lg-text ${custom.lgtext}`}>About Us</h1>
                            <p className={`image-aboutus-para ${custom.imageaboutuspara} `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutus-secktion paddingTB60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="strong">Who we are and<br />what we do</h1>
                            <p className="lead">This is the world's leading portal for<br />easy and quick </p>
                        </div>
                        <div className="col-md-6">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam. Lorem ipsum dolor sit amet. Nulla convallis egestas rhoncus.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container team-sektion paddingTB60">
                <div className="row">
                    <div className={`site-heading text-center ${custom.siteheadingh3}`}>
                        <h3>Our Team</h3>
                        {/* <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim </p> */}
                        <div className={`border ${custom.border} `} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 team-box">
                        <div className={`team-img thumbnail ${custom.teamimghover}`}>
                            <img src={process.env.PUBLIC_URL + "photo5.jpg"} />
                            <div className={`team-content  ${custom.teamcontent}`}>
                                <h3>Philip Freeman</h3>
                                <div className={`border-team ${custom.teamborder}`} />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
                                <div className="social-icons">
                                    <a href="https://www.facebook.com/"><i id="social-fb" className="fa fa-facebook-square fa-3x social" /></a>
                                    <a href="https://twitter.com/"><i id="social-tw" className="fa fa-twitter-square fa-3x social" /></a>
                                    <a href="https://plus.google.com/"><i id="social-gp" className="fa fa-google-plus-square fa-3x social" /></a>
                                    <a href="mailto:bootsnipp@gmail.com"><i id="social-em" className="fa fa-envelope-square fa-3x social" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 team-box">
                        <div className={`team-img thumbnail ${custom.teamimghover}`}>
                            <img src={process.env.PUBLIC_URL + "photo3.jpg"} />
                            <div className={`team-content ${custom.teamcontent}`}>
                                <h3>David Smith</h3>
                                <div className={`border-team ${custom.teamborder}`} />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
                                <div className="social-icons">
                                    <a href="https://www.facebook.com/"><i id={`social-fb ${custom.socialfbhover}`} className="fa fa-facebook-square fa-3x social" /></a>
                                    <a href="https://twitter.com/"><i id={`social-tw ${custom.socialtwhover}`} className="fa fa-twitter-square fa-3x social" /></a>
                                    <a href="https://plus.google.com/"><i id={`social-gp ${custom.socialgphover}`} className="fa fa-google-plus-square fa-3x social" /></a>
                                    <a href="mailto:bootsnipp@gmail.com"><i id={`social-em ${custom.socialemhover}`} className="fa fa-envelope-square fa-3x social" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 team-box">
                        <div className={`team-img thumbnail ${custom.teamimghover}`}>
                            <img src={process.env.PUBLIC_URL + "photo8.jpg"} />
                            <div className={`team-content ${custom.teamcontent}`}>
                                <h3>Robert D'costa</h3>
                                <div className={`border-team ${custom.teamborder}`} />
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
                                <div className="social-icons">
                                    <a href="https://www.facebook.com/"><i id={`social-fb ${custom.socialfbhover}`} className="fa fa-facebook-square fa-3x social" /></a>
                                    <a href="https://twitter.com/"><i id={`social-tw ${custom.socialtwhover}`} className="fa fa-twitter-square fa-3x social" /></a>
                                    <a href="https://plus.google.com/"><i id={`social-gp ${custom.socialgphover}`} className="fa fa-google-plus-square fa-3x social" /></a>
                                    <a href="mailto:bootsnipp@gmail.com"><i id={`social-em ${custom.socialemhover}`} className="fa fa-envelope-square fa-3x social" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
