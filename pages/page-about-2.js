/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Accordion from "../components/elements/Accordion";
import Layout from "../components/layout/Layout";
import ProjectSlider from "../components/slider/Projects";


function About2() {
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero bg-about-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 box-banner-left"><span className="tag-1 bg-6 color-green-900">What We Do, What You Get</span>
                                    <h1 className="text-display-3 mt-30">Get Your Dream Business Online Today</h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">Whether you are an established business or a startup, ensuring you have a well thought out development strategy, digital marketing plan and the resources
                                        required in place, is vital. We do this through collaboration between our strategists, designers and technologists.
                                        <br className="d-lg-block d-none" />For years, RCG partnered with businesses across every major industry to make amazing products and connect the dots between people, products, and business opportunities.
                                        Now, in an increasingly digital world.<br className="d-lg-block d-none" /></p>
                                    <div className="mt-40">
                                        <Link href="/page-contact" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white">Contact Us!</a></Link>
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
                                                    <h4 className="text-heading-4"><span className="text-heading-3 color-green-900">+<span className="count">3</span></span></h4>
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
                            <div className="col-lg-1 col-sm-12 col-12" />
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-gray-900 mb-10">Our Projects</h2>
                                <p className="text-heading-6 color-gray-600 mt-20">From year to year we strive to invent the most innovative technology<br className="d-lg-block d-none" />that is used by both small enterprises and space enterprises.</p>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-70">
                        <ProjectSlider />
                    </div>
                </section>
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
                                            <Link href="/page-contact" legacyBehavior><a className="btn btn-green-900 icon-arrow-right-white text-heading-6 color-white">Contact Us</a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div>
                </section>
            </Layout>

        </>
    )
}

export default About2;