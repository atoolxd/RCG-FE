/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";
import TestimonialSlider from "../components/slider/Testimonial";

function Home() {
    return (
        <Layout>
            <section className="section-box">
                <div className="banner-hero banner-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h3>
                                    <span className="color-green-900"> Rocketeers </span>
                                    <br></br>Your partner in web, app development, and consulting. Lets build your digital future.
                                </h3>
                                <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                                    At Rocketeers, were here with a smile, ready to support your digital needs with our expert web and app development services. We value collaboration and aim to make technology work for you in the most enjoyable way. Lets build something great together.
                                </p>
                                <div className="mt-40">
                                    <Link href="/contact" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white">Contact Us!</a></Link>
                                    <Link href="/page-service-1" legacyBehavior><a className="btn btn-link icon-arrow-right color-gray-900 text-heading-6">Services</a></Link>
                                </div>
                            </div>
                            <div className="col-lg-5 d-none d-lg-block">
                                <div className="banner-imgs">
                                    <img className="img-responsive shape-2" alt="RCG" src="/assets/imgs/page/homepage1/dev1.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-box mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-sm-1 col-12" />
                        <div className="col-lg-8 col-sm-10 col-12 text-center mt-100">
                            <h2 className="text-heading-1 color-gray-900">
                                Navigating Digital Success with Innovative Business Solutions</h2>
                            <p className="text-body-lead-large color-gray-600 mt-20">
                                Empowering digital leadership through cutting-edge strategies and solutions. We turn challenges into opportunities, setting new standards for your business.
                            </p>
                        </div>
                        <div className="col-lg-2 col-sm-1 col-12" />
                    </div>
                </div>
                <div className="container mt-70">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12" style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="card-grid-1 bg-5 bg-business hover-up" style={{ flex: 1 }}>
                                <div className="grid-1-img">
                                    <img src="/assets/imgs/page/homepage1/business-strategy.svg" alt="" />
                                </div>
                                <h3 className="text-heading-3 mt-20">
                                    Business Strategy Redefined:
                                </h3>
                                <p className="text-body-excerpt mt-20">
                                    Tailoring solutions that surpass mere problem-solving, Rocketeers enhances your business with insightful strategies and bespoke methods, promoting efficiency, scalability, and consistent growth in a dynamic environment.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12" style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="card-grid-1 bg-9 bg-local hover-up" style={{ flex: 1 }}>
                                <div className="grid-1-img">
                                    <img src="/assets/imgs/page/homepage1/local.svg" alt="" />
                                </div>
                                <h3 className="text-heading-3 mt-20">
                                    Agile Workflow Redefined:
                                </h3>
                                <p className="text-body-excerpt mt-20">
                                    By prioritizing adaptability and excellence, Rocketeers approach to Agile Workflow ensures that projects remain flexible, collaborative, swift, and adept at mastering the complexities of today's rapid digital shifts.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12" style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="card-grid-1 bg-2 bg-social hover-up" style={{ flex: 1 }}>
                                <div className="grid-1-img">
                                    <img src="/assets/imgs/page/homepage1/social.svg" alt="" />
                                </div>
                                <h3 className="text-heading-3 mt-20">
                                    Experienced Team:
                                </h3>
                                <p className="text-body-excerpt mt-20">
                                    Rocketeers core comprises a seasoned team, exceptionally knowledgeable, creative, and dedicated. They adeptly convert challenges into opportunities, bringing digital aspirations to life with a professional touch.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box mt-100">
                <div className="container mt-20">
                    <div className="row justify-content-center align-items-stretch">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="list-icons text-center">
                                <div className="item-icon none-bd">
                                    <h4 className="text-heading-6">Learn More!</h4>
                                    <p className="text-body-text color-gray-600 mt-15">We have the best team to work on your project.</p>
                                    <div className="mt-40">
                                        <Link href="/page-about-2" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white">Learn More</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div className="list-icons text-center">
                                <div className="item-icon none-bd">
                                    <h4 className="text-heading-6">Contact US!</h4>
                                    <p className="text-body-text color-gray-600 mt-15">Contact us today to get started!!</p>
                                    <div className="mt-40">
                                        <Link href="/contact" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white">CONTACT US!</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-box">
                <div className="container mt-120">
                    <div className="bg-2 bdrd-58 pattern-white pb-60">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                                <h2 className="text-heading-1 color-gray-900">
                                    What We Offer
                                </h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">
                                    What makes us different from others? We give
                                    holistic solutions with strategy, design
                                    and technology.
                                </p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                        <div className="container mt-70">
                            <OfferSlider />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-box">
                <div className="container mt-110">
                    <div className="row">
                        <div className="col-lg-9 col-sm-8">
                            <h3 className="text-heading-1 mb-10">
                                Our Happy Customers
                            </h3>
                            <p className="text-body-lead-large color-gray-600">
                                Know about our clients, we are a woldwide
                                corporate brand
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mt-80">
                    <TestimonialSlider />
                </div>
            </section>
        </Layout>
    )
}

export default Home;