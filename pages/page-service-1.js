/* eslint-disable @next/next/no-img-element */
//  eslint-disable react/no-unescaped-entities
// eslint-disable @next/next/no-img-element
import Link from "next/link";
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import Accordion from "../components/elements/Accordion";


function Service() {
    const [activeService, setActiveService] = useState(1);
    const handleOnClick = (Service) =>
        setActiveService(Service);

    return (
        <>

            <Layout>
                <section className="section-box">
                    <div className="banner-hero bg-service-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 box-banner-left">
                                    <h1 className="text-display-3 mt-30">Transformative Digital Solutions Tailored for Your Success</h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">Unleash the potential of your brand with our dynamic suite of digital services, from web and app development to SEO, digital marketing, and expert consultation.</p>
                                    <div className="mt-40">
                                        <Link href="/page-contact" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white">Get Started</a></Link>
                                    </div>
                                    <div className="row mt-50">
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="list-icons">
                                                <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/about/2/icon-project-done.svg" alt="" /></span>
                                                    <h4 className="text-heading-4"><span className="text-heading-3 color-green-900">+<span className="count">12</span></span></h4>
                                                    <p className="text-body-text color-gray-500">Projects done</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div className="list-icons">
                                                <div className="list-icons">
                                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/about/2/icon-officer.svg" alt="" /></span>
                                                        <h4 className="text-heading-4"><span className="text-heading-3 color-green-900">+<span className="count">2</span></span></h4>
                                                        <p className="text-body-text color-gray-500">Offices</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <div className="block-1 shape-2"></div><img src="/assets/imgs/page/about/2/hero1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-12">
                                <div className="text-start mb-25"><span className="tag-1 bg-6 color-green-900">What We Do</span></div>
                                <h2 className="text-heading-2 color-gray-900 mb-50">Were always looking for<br className="d-lg-block d-none" />new faces and fresh ideas</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-20">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-support.svg" alt="on" /></span>
                                        <h4 className="text-heading-6">Support Engineer</h4>
                                        <p className="text-body-text color-gray-600 mt-15">We have the best support engineers in our hands to overcome technical difficulties.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-web.svg" alt="" /></span>
                                        <h4 className="text-heading-6">Web Developer</h4>
                                        <p className="text-body-text color-gray-600 mt-15">We have the best developers to work on your dream project.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-business.svg" alt="" /></span>
                                        <h4 className="text-heading-6">Business Analyst</h4>
                                        <p className="text-body-text color-gray-500 mt-15">Our business analysts have the most productive methods to work on your business SEO solutions. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                <div className="list-icons">
                                    <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/services/1/icon-share.svg" alt="" /></span>
                                        <h4 className="text-heading-6">Share stories</h4>
                                        <p className="text-body-text color-gray-500 mt-15">We commit to original work of the highest standard and giving credit where its due.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                                <h2 className="text-heading-1 color-gray-900">
                                    What services do we offer<br className="d-lg-block d-none" />for our clients
                                </h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">
                                    At RCG, we offer a comprehensive suite of services tailored to meet your digital needs
                                </p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="text-center mt-90">
                            <ul className="nav" role="tablist">
                                <li onClick={() => handleOnClick(1)}>
                                    <Link href="/page-service-1#webdev" legacyBehavior>
                                        <a className={activeService === 1 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Web Development</a>
                                    </Link>
                                </li>
                                <li onClick={() => handleOnClick(2)}>
                                    <Link href="/page-service-1#appdev" legacyBehavior>
                                        <a className={activeService === 2 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>App Development</a>
                                    </Link>
                                </li>
                                <li onClick={() => handleOnClick(3)}>
                                    <Link href="/page-service-1#digi" legacyBehavior>
                                        <a className={activeService === 3 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Digital Marketing</a>
                                    </Link>
                                </li>
                                <li onClick={() => handleOnClick(4)}>
                                    <Link href="/page-service-1#AI" legacyBehavior>
                                        <a className={activeService === 4 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Artificial Intelligence</a>
                                    </Link>
                                </li>
                                <li onClick={() => handleOnClick(5)}>
                                    <Link href="/page-service-1#consulting" legacyBehavior>
                                        <a className={activeService === 5 ? "btn btn-default btn-bd-green-hover btn-select active" : "btn btn-default btn-bd-green-hover btn-select"}>Consultation</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container">
                        <div className="tab-content">
                            <div className={activeService === 1 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-2 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Crafting responsive and dynamic websites.
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Experience the Artistry of Digital Craftsmanship: Our Web Development service at RCG transforms ideas into visually stunning and functionally robust websites.
                                                    We blend creativity with cutting-edge technology, ensuring your online presence not only captivates but also performs seamlessly across devices.
                                                    Elevate your brand with a website that stands out in the digital realm, reflecting your uniqueness and driving meaningful user engagement.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-contact" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="block-video icon-pattern">
                                                <img className="img-responsive" src="assets/imgs/page/homepage1/img-1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeService === 2 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-2 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Building intuitive and feature-rich mobile applications.
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Our App Development service at RCG is dedicated to bringing your ideas to life in the palm of your users hands.
                                                    We specialize in crafting intuitive and feature-rich mobile applications that elevate user experiences.
                                                    We ensure your app not only meets but exceeds expectations, leaving a lasting impact in the digital landscape.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-contact" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="block-video icon-pattern">
                                                <img className="img-responsive" src="assets/imgs/page/homepage1/img-1.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeService === 3 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-3 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Boost brand awareness, engagement, and conversion.
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Ignite Your Digital Presence: With our Digital Marketing services at RCG, we propel your brand into the spotlight.
                                                    From strategic planning to dynamic execution, we curate impactful campaigns across various channels, driving engagement, fostering connections, and ultimately amplifying your online reach.

                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-contact" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <img className="img-responsive" src="assets/imgs/page/homepage1/img-1-3.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeService === 4 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-4 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Choose The Best Plan Thats For
                                                    You
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Unleashing the Power of AI: Elevate your business with our cutting-edge AI services at RCG.
                                                    From intelligent automation to data-driven insights, we integrate artificial intelligence seamlessly, empowering your operations and strategies for a future-ready success story.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-contact" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <img className="img-responsive" src="assets/imgs/page/homepage1/img-1-4.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={activeService === 5 ? "tab-pane fade  active show" : "tab-pane fade "}>
                                <div className="bg-5 panel-box mt-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="box-optimized">
                                                <h3 className="text-heading-2">
                                                    Consulting
                                                </h3>
                                                <p className="text-body-excerpt mt-30">
                                                    Navigating Possibilities, Guiding Success: Our IT Consultation service at RCG offers strategic insights and tailored solutions to steer your business through the complexities of technology.
                                                    With expert guidance, we align your IT strategy with your business goals, ensuring a roadmap that leads to efficiency, innovation, and sustainable growth.
                                                </p>
                                                <div className="mt-40">
                                                    <Link href="/page-contact" legacyBehavior><a className="btn btn-default btn-white icon-arrow-right">Learn more</a></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12">
                                            <div className="block-video icon-pattern">
                                                <img className="img-responsive" src="assets/imgs/page/homepage1/img-1-5.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="bg-6 box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">Subscribe our newsletter</h4>
                                            <p className="text-body-text color-gray-500">By clicking the button, you are agreeing with our</p>
                                            <Link href="/page-terms" legacyBehavior><a>Term and Conditions</a></Link>

                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter"><input className="input-newsletter" placeholder="Enter you mail .." /><button className="btn btn-send" /></form>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <img className="img-responsive img-newsletter" src="assets/imgs/template/img-newsletter.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

            </Layout>

        </>
    )
}

export default Service;