import axios from 'axios';
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import * as ReactBootStrap from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./Sliders.css";
import { useEffect } from 'react';
import img1 from "../../../images/slider/slide1.jpg";
import img2 from "../../../images/slider/slider-2.jpg";
import img3 from "../../../images/slider/slider.png";

const Sliders = () => {

    return(
        <div>
            <Carousel>
               <Carousel.Item>
                   <div>
                    <img
                        id="carosel"
                        className="d-block w-100"
                        src={img1}
                        bg="373940"
                        alt=""
                        />
                   </div>
                   <Carousel.Caption>
                   <h3>Orna Travel Agency</h3>
                   <p className=" fw-bolder my-4">Orna Travels is a trusted and reliable tour and travel among all the leading and updated tour-operating services in Bangladesh.</p>
                   <Link to="/services">
                   <button type="button" className="btn btn-primary border-0 rounded-0 fw-bolder">Take Service</button>
                   </Link>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <div>
                    <img
                        id="carosel"
                        className="d-block w-100"
                        src={img3}
                        bg="373940"
                        alt=""
                        />
                   </div>
                   <Carousel.Caption>
                   <h3>Orna Travel Agency</h3>
                   <p className=" fw-bolder my-4">Orna Travels is a trusted and reliable tour and travel among all the leading and updated tour-operating services in Bangladesh.</p>
                   <Link to="/services">
                   <button type="button" className="btn btn-primary border-0 rounded-0 fw-bolder">Take Service</button>
                   </Link>
                   </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                   <div>
                    <img
                        id="carosel"
                        className="d-block w-100"
                        src={img2}
                        bg="373940"
                        alt=""
                        />
                   </div>
                   <Carousel.Caption>
                   <h3>Orna Travel Agency</h3>
                   <p className=" fw-bolder my-4">Orna Travels is a trusted and reliable tour and travel among all the leading and updated tour-operating services in Bangladesh.</p>
                   <Link to="/services">
                   <button type="button" className="btn btn-primary border-0 rounded-0 fw-bolder">Take Service</button>
                   </Link>
                   </Carousel.Caption>
               </Carousel.Item>
               </Carousel> {/* :
                    <ReactBootStrap.Spinner animation="border" /> */}
        </div>
    );
};

export default Sliders;