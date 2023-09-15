import React from 'react'
import jslogo from '../logos/javascript.png'
import pythonlogo from '../logos/python.png'
import nodejslogo from '../logos/nodejs.png'
import reactlogo from '../logos/reactjs.png'
export const Slider = () => {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button> */}
                </div>

                {/* 1 */}
                <div className="carousel-inner" style={{ "height": "600px" }}>
                    <div className="carousel-item active" style={{ "height": "700px" }}>
                        <img src={reactlogo} className="d-block  silder-pic w-100" alt="..." style={{}} />
                        <div className="carousel-caption h-50 align-items-center justify-content-center" style={{ 'color': "black" }}>
                            <h6 className="tag-cover-9"><b> We Provide Web Developing </b></h6>
                            <h1 className="title-cover-9"><b> Web Development Services For You </b></h1>
                            {/* <p className="para-cover-9">
                                    <b> The Home  Service Website Is  Very Useful Because You Can Don’t Have To Visit To Service Provider’s Office, You Can Easily Book Service Via This Website. </b>
                                </p> */}
                            <a href="/" type="button" className="btn btn-success mx-1">Read More</a>
                            <a href="contactus" type="button" className="btn btn-success mx-1">Get In Touch</a>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className="carousel-item" style={{ "height": "700px" }}>
                        <img src={nodejslogo} className="d-block silder-pic w-100" alt="..." />
                        <div className="carousel-caption h-50 align-items-center justify-content-center" style={{ 'color': "black" }}>
                            <h6 className="tag-cover-9"><b>We Provide Application Development </b></h6>
                            <h1 className="title-cover-9"><b>We are Professional and provide repair Services</b></h1>
                            <p className="para-cover-9"></p>
                            <a href="/" type="button" className="btn btn-success mx-1">Read More</a>
                            <a href="contactus" type="button" className="btn btn-success mx-1">Get In Touch</a>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="carousel-item" style={{ "height": "700px" }}>
                        <img src={pythonlogo} className="d-block silder-pic w-100" alt="..." />
                        <div className="carousel-caption h-50 align-items-center justify-content-center" style={{ 'color': "black" }}>
                            <h6 className="tag-cover-9"><b>We Provide Quality Service</b></h6>
                            <h1 className="title-cover-9"><b>The Best Company To Provide IT Services</b></h1>
                            <p className="para-cover-9"><b></b></p>
                            <a href="/" type="button" className="btn btn-success mx-1">Read More</a>
                            <a href="contactus" type="button" className="btn btn-success mx-1">Get In Touch</a>
                        </div>
                    </div>

                    {/* 4 */}
                    {/* <div className="carousel-item" style={{"height":"700px"}}>
                            <img src={reactlogo} className="d-block w-100" alt="..." />
                            <div className="carousel-caption h-50 align-items-center justify-content-center">
                                <h6 className="tag-cover-9"><b>We Provide Quality Service</b></h6>
                                <h1 className="title-cover-9"><b>The Most Targetted Cleaning Services</b></h1>
                                <p className="para-cover-9"> <b></b></p>
                                <a href="/" type="button" className="btn btn-success mx-1">Read More</a>
                                <a href="contactus" type="button" className="btn btn-success mx-1">Get In Touch</a>
                            </div>
                        </div> */}

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}
