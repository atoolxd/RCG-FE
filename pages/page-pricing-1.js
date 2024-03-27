/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import PriceTable from "../components/elements/PriceTable";
import Layout from "../components/layout/Layout";


function Pricing1() {
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
                                        With our best in class products, make your system efficient.
                                         Our team of experts will guide you through the process to ensure a seamless transition.
                                    </p>
                                    <div className="mt-40">
                                        <Link href="/contact" legacyBehavior><a className="btn btn-black shape-square icon-arrow-right-white">Contact Us!</a></Link>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <img className="img-responsive shape-2" alt="RCG" src="/assets/imgs/page/homepage1/webdev.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-70">
                    <div className="container mt-50">
                        <h3 className="text-heading-1 text-center mb-10">Choose The Best Plan<br className="d-lg-block d-none" />That’s For You</h3>
                    </div>
                    <PriceTable/>
                </section>
                <section className="section-box mt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                                <h2 className="text-heading-1 color-gray-900 mb-30">How It Works</h2>
                                <p className="text-body-excerpt color-gray-600">Ac sapien purus tristique neque nibh vitae faucibus non phasellus vulputate nulla in eget amet, risus</p>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" /></div>
                                        <h4 className="text-heading-4">1. Acquisition</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15"><img src="/assets/imgs/page/homepage2/icon-active.svg" alt="Agon" /></div>
                                        <h4 className="text-heading-4">2. Activation</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Agon" /></div>
                                        <h4 className="text-heading-4">3. Retention</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-120">
                        <div className="bdrd-58 box-gray-100">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center">
                                    <h2 className="text-heading-1 color-gray-900 mt-30">Our Happy Customers</h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">Know about our clients, we are a woldwide<br className="d-lg-block d-none" />corporate brand</p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                            <div className="container mt-70">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 hover-up mb-20">
                                            <h5 className="text-heading-5 color-gray-900">Satisfied client testimonial</h5>
                                            <p className="text-body-text color-gray-600 mt-20 text-comment">Even factoring differences in body weight between children and adults into account, it would still not reach an intoxicating level in children.</p>
                                            <div className="box-img-user">
                                                <div className="img-user"><img src="/assets/imgs/page/homepage2/user-1.png" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Jane Cooper</h4>
                                                <p className="text-body-text-md">Biffco Enterprises Ltd.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 hover-up mb-20">
                                            <h5 className="text-heading-5 color-gray-900">98% of residents recommend us</h5>
                                            <p className="text-body-text color-gray-600 mt-20 text-comment">So yes, the alcohol (ethanol) in hand sanitizers can be absorbed through the skin, but no, it would not cause intoxication.</p>
                                            <div className="box-img-user">
                                                <div className="img-user"><img src="/assets/imgs/page/homepage2/user-2.png" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Wade Warren</h4>
                                                <p className="text-body-text-md">Krusty Krab</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 hover-up mb-20">
                                            <h5 className="text-heading-5 color-gray-900">Our success stories</h5>
                                            <p className="text-body-text color-gray-600 mt-20 text-comment">“It has been an absolute pleasure dealing with Scan during the lockdown. Our church began to livestream our services, and Scan had a great selection of hardware....”</p>
                                            <div className="box-img-user">
                                                <div className="img-user"><img src="/assets/imgs/page/homepage2/user-3.png" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Leslie Alexander</h4>
                                                <p className="text-body-text-md">Biffco Enterprises Ltd.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <div className="card-grid-style-2 hover-up mb-20">
                                            <h5 className="text-heading-5 color-gray-900">This is simply unbelievable</h5>
                                            <p className="text-body-text color-gray-600 mt-20 text-comment">“I was also lucky enough to read @Coding_Career early and I was thoroughly blown away! It’s the book I wish I had when I started my dev career.”</p>
                                            <div className="box-img-user">
                                                <div className="img-user"><img src="/assets/imgs/page/homepage2/user-4.png" alt="Agon" /></div>
                                                <h4 className="text-body-lead color-gray-900 mb-5">Jenny Wilson</h4>
                                                <p className="text-body-text-md">Soylent Corp</p>
                                            </div>
                                        </div>
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
                            <div className="col-lg-8 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-gray-900">Frequently Asked Questions</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">Aliquam a augue suscipit, luctus neque purus ipsum<br className="d-lg-block d-none" />neque dolor primis a libero tempus, blandit and<br className="d-lg-block d-none" />cursus varius and magnis sapien</p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                </section>
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12 col-12">
                                <ul className="list-icons-2">
                                    <li>
                                        <h3 className="text-heading-5 mb-10">Can I see the demo before purchasing?</h3>
                                        <p className="text-body-text color-gray-500">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">Can I use your system on different devices?</h3>
                                        <p className="text-body-text color-gray-500">Etiam amet mauris suscipit in odio integer congue metus vitae arcu mollis blandit ultrice ligula egestas and magna suscipit lectus magna suscipit luctus blandit vitae</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">Can I import my sitemap to your system?</h3>
                                        <p className="text-body-text color-gray-500">An enim nullam tempor sapien gravida a donec ipsum enim an porta justo integer at velna vitae auctor integer congue undo magna at pretium purus pretium</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">Can I cancel my subscription at any time?</h3>
                                        <p className="text-body-text color-gray-500">An enim nullam tempor sapien gravida a donec ipsum enim an porta justo integer at velna vitae auctor integer congue undo magna at pretium purus pretium</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">How can I switch my subscription between essential, and premium plan</h3>
                                        <p className="text-body-text color-gray-500">Cubilia laoreet augue egestas and luctus donec curabite diam vitae dapibus libero and quisque gravida donec and neque.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">Is there an additional discount when paid annually?</h3>
                                        <p className="text-body-text color-gray-500">Cubilia laoreet augue egestas and luctus donec curabite diam vitae dapibus libero and quisque gravida donec and neque. Blandit justo aliquam molestie nunc sapien</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">I have an issue with my account</h3>
                                        <ul className="text-body-text">
                                            <li>Etiam amet mauris suscipit sit amet in odio. Integer congue leo metus. Vitae arcu mollis blandit ultrice ligula</li>
                                            <li>An enim nullam tempor sapien gravida donec congue leo metus. Vitae arcu mollis blandit integer at velna</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">What happens if I don’t renew my license after one year?</h3>
                                        <ul className="text-body-text">
                                            <li>Etiam amet mauris suscipit sit amet in odio. Integer congue leo metus. Vitae arcu mollis blandit ultrice ligula</li>
                                            <li>An enim nullam tempor sapien gravida donec congue leo metus. Vitae arcu mollis blandit integer at velna</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">Do you have a free trial?</h3>
                                        <p className="text-body-text color-gray-500" />
                                        <ul className="text-body-text">
                                            <li>Fringilla risus, luctus mauris orci auctor purus</li>
                                            <li>Quaerat sodales sapien euismod blandit purus and ipsum primis in cubilia laoreet augue luctus</li>
                                        </ul>
                                        <p />
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">What kind of payment methods do you provide?</h3>
                                        <p className="text-body-text color-gray-500" />
                                        <ul className="text-body-text">
                                            <li>Fringilla risus, luctus mauris orci auctor purus</li>
                                            <li>Quaerat sodales sapien euismoda laoreet augue luctus</li>
                                        </ul>
                                        <p />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
    )
}

export default Pricing1;