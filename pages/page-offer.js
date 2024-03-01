/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";
import TestimonialSlider from "../components/slider/Testimonial";

function Offer() {

    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <h1 className="text-display-2">
                                        GET A FREE WEBSITE FROM
                                        <span className="color-green-900"> RCG </span>
                                    </h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                                        Get a free WordPress website from us. Apply Today to be the lucky one to get this deal.
                                    </p>
                                    <div className="mt-40">
                                        <Link href="https://opnform.com/forms/free-website-build-interest-form-xnutlc" legacyBehavior><a className="btn btn-black icon-arrow-right-white">Take Me There!!</a></Link>
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
                                                    <input className="input-newsletter" placeholder="Enter you mail .." /><button className="btn btn-send" />
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
            </Layout>

        </>
    )
}

export default Offer;