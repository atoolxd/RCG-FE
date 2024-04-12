/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import Layout from "../components/layout/Layout";
import Accordion from "../components/elements/Accordion";

import "swiper/swiper.min.css";

SwiperCore.use([Autoplay, Navigation]);

function About2() {
    const data = [
        {
            img: "/assets/imgs/page/service/fanbucket.png",
            avatar: "/assets/imgs/page/service/user-3.png",
            title: "FB",
            author: "Atul",
        },
        {
            img: "/assets/imgs/page/service/prs.png",
            avatar: "/assets/imgs/page/service/user-3.png",
            title: "PRS",
            author: "Atul",
        },
    ];

    return (
        <Layout>
            <section className="section-box">
                <div className="banner-hero bg-about-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 box-banner-left"><span className="tag-1 bg-6 color-green-900">What We Do, What You Get</span>
                                <h3 className="text-display-3 mt-30">Get Your Dream Business Online Today</h3>
                                <p className="text-body-lead-large color-gray-500 mt-40 pr-40">Whether you are an established business or a startup, ensuring you have a well thought out development strategy, digital marketing plan and the resources
                                    required in place, is vital. We do this through collaboration between our strategists, designers and technologists.
                                    <br className="d-lg-block d-none" />For years, Rocketeers partnered with businesses across every major industry to make amazing products and connect the dots between people, products, and business opportunities.
                                    Now, in an increasingly digital world.<br className="d-lg-block d-none" /></p>
                                <div className="mt-40">
                                    <Link href="/contact" className="btn btn-black shape-square icon-arrow-right-white">Contact Us!</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block">
                                <div className="banner-imgs">
                                    <div className="block-1 shape-2"><img src="/assets/imgs/page/about/2/banner.png" alt="Agon" /></div>
                                    <div className="float-end col-lg-6 mt-90">
                                        <div className="list-icons mt-50">
                                            <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/about/2/icon-project-done.svg" alt="Agon" /></span>
                                                <h4 className="text-heading-4"><span className="text-heading-3 color-green-900">+<span className="count">12</span></span></h4>
                                                <p className="text-body-text color-gray-500">Projects done</p>
                                            </div>
                                            <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/about/2/icon-officer.svg" alt="Agon" /></span>
                                                <h4 className="text-heading-4"><span className="text-heading-3 color-green-900">+<span className="count">28</span></span></h4>
                                                <p className="text-body-text color-gray-500">Offices</p>
                                            </div>
                                            <div className="item-icon none-bd"><span className="icon-left"><img src="/assets/imgs/page/about/2/icon-constant.svg" alt="Agon" /></span>
                                                <h4 className="text-heading-4"><span className="text-heading-3 color-green-900">+<span className="count">15</span></span></h4>
                                                <p className="text-body-text color-gray-500">Constant clients</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-box mt-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1 col-sm-1 col-12" />
                        <div className="col-lg-10 col-sm-10 col-12 text-center">
                            <div className="text-center mb-20"><span className="tag-1">How It Work ?</span></div>
                            <h2 className="text-display-3 color-gray-900 mb-60">Elevate your Employee<br className="d-lg-block d-none" />Development Journey</h2>
                        </div>
                        <div className="col-lg-1 col-sm-1 col-12" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1 col-sm-12 col-12" />
                        <div className="col-lg-10 col-sm-12 col-12">
                            <ul className="list-steps">
                                <li className="icon-asset1 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                    <div className="text-center block-step">
                                        <div className="mb-30"><img src="/assets/imgs/page/about/2/icon-start-plan.svg" alt="Agon" /></div>
                                        <h3 className="text-heading-5 mb-10">Start Plan</h3>
                                        <p className="text-body-text color-gray-500">Choose any of our packages</p>
                                    </div>
                                </li>
                                <li className="icon-asset2 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <div className="text-center block-step">
                                        <div className="mb-30"><img src="/assets/imgs/page/about/2/icon-connect.svg" alt="Agon" /></div>
                                        <h3 className="text-heading-5 mb-10">Connect</h3>
                                        <p className="text-body-text color-gray-500">Receive concepts In 24 hours</p>
                                    </div>
                                </li>
                                <li className="icon-asset3 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    <div className="text-center block-step bg-5">
                                        <div className="mb-30"><img src="/assets/imgs/page/about/2/icon-match.svg" alt="Agon" /></div>
                                        <h3 className="text-heading-5 mb-10">Match</h3>
                                        <p className="text-body-text color-gray-500">Development Stage</p>
                                    </div>
                                </li>
                                <li className="icon-asset4 wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                                    <div className="text-center block-step bg-5">
                                        <div className="mb-30"><img src="/assets/imgs/page/about/2/icon-complete.svg" alt="Agon" /></div>
                                        <h3 className="text-heading-5 mb-10">Complete</h3>
                                        <p className="text-body-text color-gray-500">After-release Support</p>
                                    </div>
                                </li>
                                <li className="wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                    <div className="text-center block-step bg-9">
                                        <div className="mb-30"><img src="/assets/imgs/page/about/2/icon-review.svg" alt="Agon" /></div>
                                        <h3 className="text-heading-5 mb-10">Review</h3>
                                        <p className="text-body-text color-gray-500">Project launch and checkout</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <div className="section-box mt-100">
            <div className="slider-news">
                <div className="swiper-container swiper-group-1">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: ".swiper-button-prev-5",
                            nextEl: ".swiper-button-next-5",
                        }}
                        className="swiper-wrapper pb-70 pt-5"
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            1024: {
                                slidesPerView: 1,
                            },
                        }}
                    >
                        {data.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="swiper-slide active">
                                    <div className="block-news">
                                        <div className="item-news">
                                            {/* Replace this with your desired content */}
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-12">
                                                    <div className="img-news">
                                                        <Link href="/page-about-2" passHref legacyBehavior>
                                                            <img
                                                                src={item.img}
                                                                alt={item.title}
                                                                width={700}
                                                                height={900}
                                                                style={{ margin: '0 20px', objectFit: 'cover' }}
                                                            />
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-12">
                                                    <div className="right-news card-grid-style-4 mb-0">
                                                        <span className="tag-dot">Past Projects</span>
                                                        <Link href="/page-about-2" passHref legacyBehavior>
                                                            <a className="text-heading-4">Hear what our clients say</a>
                                                        </Link>
                                                        <p className="text-body-text color-gray-500 text-desc-fix-h">
                                                            I opted Rocketeers Consultation Group for my dream project Fanbucket so that I could get personalized social media app and webapp as per my requirements.
                                                        </p>
                                                        <div className="blog-img-user">
                                                            <div className="img-user img-user-round">
                                                                <img
                                                                    src={item.avatar}
                                                                    alt={item.author}
                                                                    width={300}
                                                                    height={200}
                                                                />
                                                            </div>
                                                            <h4 className="text-heading-6 color-gray-900">Joshua Cason</h4>
                                                            <p className="text-body-small color-gray-500">August 25, 2022</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="swiper-button-next swiper-button-next-5" />
                <div className="swiper-button-prev swiper-button-prev-5" />
            </div>
            </div>

            <section className="section-box mt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-sm-1 col-12" />
                        <div className="col-lg-8 col-sm-10 col-12 text-center">
                            <h2 className="text-heading-1 color-gray-900">Frequently asked questions</h2>
                            <p className="text-body-lead-large color-gray-600 mt-20">Feeling inquisitive? Have a read through some of our FAQs or contact our supporters for help</p>
                        </div>
                        <div className="col-lg-2 col-sm-1 col-12" />
                    </div>
                </div>
                <div className="container mt-70">
                    <div className="row">
                        <div className="col-lg-1" />
                        <div className="col-lg-10">
                            <div className="row">
                                <div className="col-lg-4 mb-50">
                                    <h4 className="text-heading-6 icon-leaf">People first</h4>
                                    <p className="text-body-excerpt color-gray-600 mt-15">The latest design trends meet hand-crafted templates.</p>
                                </div>
                                <div className="col-lg-4 mb-50">
                                    <h4 className="text-heading-6 icon-leaf">Agile approach</h4>
                                    <p className="text-body-excerpt color-gray-600 mt-15">The latest design trends meet hand-crafted templates.</p>
                                </div>
                                <div className="col-lg-4 mb-50">
                                    <h4 className="text-heading-6 icon-leaf">New mindset</h4>
                                    <p className="text-body-excerpt color-gray-600 mt-15">The latest design trends meet hand-crafted templates.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 mt-50">
                                    <Accordion />
                                    <div className="mt-100 text-center">
                                        <Link href="/contact" className="btn btn-black shape-square icon-arrow-right-white">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1" />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default About2;