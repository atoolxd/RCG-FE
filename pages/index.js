npm/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";
import TestimonialSlider from "../components/slider/Testimonial";

function Home() {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => 
        setActiveIndex(index);

    // Open modal
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
    const openModal = () => {
    setModal(!modal);
    };
    const spinner = () => {
    setVideoLoading(!videoLoading);
    };

    return (
        <>
            <Layout>
               <section className="section-box">
                    <div className="banner-hero banner-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <h1 className="text-display-2">
                                    Elevating Digital Excellence: Unleashing innovation with
                                        <span className="color-green-900"> RCG </span>
                                    </h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                                    Innovate. Elevate. Excel: Transforming Visions into Digital Triumphs at RCG
                                    </p>
                                    <div className="mt-40">
                                        <Link href="/page-contact" legacyBehavior><a className="btn btn-black icon-arrow-right-white">Get Started</a></Link>
                                        <Link href="/page-about-1" legacyBehavior><a className="btn btn-link icon-arrow-right color-gray-900 text-heading-6">Learn More</a></Link>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                       
                                        <img className="img-responsive shape-2" alt="" src="assets/imgs/page/homepage1/webdev1.webp" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section-box overflow-visible mt-70">
                </div>
                
                <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center mt-100">
                                <h2 className="text-heading-1 color-gray-900">
                                Strategies for Digital Triumph:<br className="d-lg-block d-none" />Harnessing Innovative Business Solutions
                                </h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">
                                    Interactively transform magnetic growth
                                    strategies with prospective outside the
                                    box thinking.
                                </p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-5 bg-business hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/business-strategy.svg" alt="" />
                                    </div>
                                    <h3 className="text-heading-3 mt-20">
                                        Business Strategy
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                    Business Solutions Redefined: At RCG, our tailored Business Solutions service goes beyond solving challenges; 
                                    we empower your enterprise with strategic insights and customized approaches, ensuring efficiency, scalability, and sustained growth in the ever-evolving business landscape.
                                    </p>
                                    <div className="mt-30">
                                        <Link href="/page-about-1" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-9 bg-local hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/local.svg" alt="" />
                                    </div>
                                    <h3 className="text-heading-3 mt-20">
                                        Agile Workflow
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                    Agility Redefined: Embracing Change, Delivering Excellence. At RCG, our Agile Workflow Strategy ensures dynamic adaptation, seamless collaboration, and rapid delivery. 
                                    We navigate complexity with flexibility, empowering projects to evolve, innovate, and excel in todays fast-paced digital landscape.
                                    </p>
                                    <div className="mt-30">
                                        <Link href="/page-about-2" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-1 bg-2 bg-social hover-up">
                                    <div className="grid-1-img">
                                        <img src="/assets/imgs/page/homepage1/social.svg" alt="" />
                                    </div>
                                    <h3 className="text-heading-3 mt-20">
                                        Experienced Team
                                    </h3>
                                    <p className="text-body-excerpt mt-20">
                                    Expertise in Every aspect, Mastery in Every Line of Code: Meet the heart of RCG. 
                                    Our experienced team brings a heap of knowledge, creativity, and passion to every project. 
                                    With collective commitment to excellence, we turn challenges to opportunities, ensuring digital vision a reality under the guidance of professionals.
                                    </p>
                                    <div className="mt-30">
                                        <Link href="/page-about-3" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
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
                                <OfferSlider/>
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
                <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="bg-2 box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7">
                                            <span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">
                                                Subscribe our newsletter
                                            </h4>
                                            <p className="text-body-text color-gray-500">
                                                By clicking the button, you are
                                                agreeing with our
                                            </p>
                                            <Link href="/page-terms" legacyBehavior><a>Term and Conditions</a></Link>
                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter">
                                                    <input className="input-newsletter"  placeholder="Enter you mail .." /><button className="btn btn-send" />
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <div className="block-chart shape-1">
                                                <img src="/assets/imgs/template/chart.png" alt="" />
                                            </div>
                                            <img className="img-responsive img-newsletter" src="assets/imgs/template/img-newsletter.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {modal ? (
                    <section className="modal__bg" onClick={openModal}>
                        <div className="modal__align">
                        <div className="modal__content" modal={modal}>
                            <div className="modal__video-align">
                            {videoLoading ? (
                                <div className="modal__spinner">
                                    <i className="fi-rr-refresh"></i>
                                </div>
                            ) : null}
                            <iframe
                                className="modal__video-style"
                                onLoad={spinner}
                                loading="lazy"
                                width="800"
                                height="500"
                                src="https://www.youtube.com/embed/VEe_yIbW64w"
                                title="真夜中のドア/Stay With Me"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen>
                            </iframe>
                            </div>
                        </div>
                        </div>
                    </section>
                    ) : null}
            </Layout>

        </>
    )
}

export default Home;