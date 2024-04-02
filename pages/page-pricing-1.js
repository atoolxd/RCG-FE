/* eslint-disable react/no-unescaped-entities */
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
                                        <br></br>Your partner in Seamless Hosting Solutions for Your Cutting-Edge Software Products
                                    </h3>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">
                                    Optimize Your System Efficiency with Our Premium Hosting Solutions. Let Our Expert Team Lead You Through a Seamless Migration Process
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
                                <p className="text-body-excerpt color-gray-600">Our Hosting Process at a Glance</p>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" /></div>
                                        <h4 className="text-heading-4">1. Assessment and Planning:</h4>
                                        <p className="text-body-text color-gray-600 mt-15">We analyze your infrastructure and collaborate to tailor a hosting plan to your needs, ensuring a smooth transition.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15"><img src="/assets/imgs/page/homepage2/icon-active.svg" alt="Agon" /></div>
                                        <h4 className="text-heading-4">2. Migration and Setup:</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Our experts migrate your data seamlessly, minimizing downtime, and ensure correct setup in our hosting environment.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 mt-50">
                                <div className="list-icons">
                                    <div className="item-icon pl-0">
                                        <div className="mb-15"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Agon" /></div>
                                        <h4 className="text-heading-4">3. Ongoing Support and Optimization:</h4>
                                        <p className="text-body-text color-gray-600 mt-15">We provide 24/7 support, monitor your system for performance, and offer regular optimization to keep your operations seamless.</p>
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
                                            <p className="text-body-text color-gray-600 mt-20 text-comment">Switching to your hosting solution was a game-changer for our business. The migration process was effortless, and the ongoing support has been exceptional. Highly recommended!</p>
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
                                            <p className="text-body-text color-gray-600 mt-20 text-comment">Impressed by the seamless migration process and the level of personalized support provided. Our website's performance has never been better since switching to your hosting services.</p>
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
                                            <p className="text-body-text color-gray-600 mt-20 text-comment">Your hosting solution exceeded our expectations. The setup was quick, and the support team was responsive and knowledgeable. Our website's uptime and speed have significantly improved.</p>
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
                                            <p className="text-body-text color-gray-600 mt-20 text-comment">Choosing your hosting service was one of the best decisions we made for our business. The transition was smooth, and the ongoing support has been top-notch. Our team can focus on our core tasks without worrying about server issues.</p>
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
                                        <h3 className="text-heading-5 mb-10">What is web hosting, and why do I need it?</h3>
                                        <p className="text-body-text color-gray-500">Web hosting is a service that allows individuals and organizations to make their websites accessible via the World Wide Web. You need hosting to store your website's files and data and make it accessible to internet users.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">What makes your hosting solution different from others?</h3>
                                        <p className="text-body-text color-gray-500">Our hosting solution offers high-performance servers, reliable uptime, scalable resources, and exceptional customer support. We prioritize security, speed, and flexibility to ensure that your website or application runs smoothly.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">How does the migration process work?</h3>
                                        <p className="text-body-text color-gray-500">Our team will assist you throughout the migration process, ensuring a seamless transition from your current hosting provider to ours. We handle the migration of your website's files, databases, and configurations, minimizing downtime and ensuring no data loss.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">What level of support do you offer?</h3>
                                        <p className="text-body-text color-gray-500">We provide 24/7 technical support via various channels, including email, live chat, and phone. Our support team comprises knowledgeable experts who can assist you with any hosting-related issues or inquiries promptly.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">Is my data secure with your hosting service?</h3>
                                        <p className="text-body-text color-gray-500">Yes, we prioritize the security of your data and employ robust security measures to protect it from unauthorized access, malware, and other threats. Our hosting environment is regularly monitored and updated to ensure maximum security.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">Do you offer backups for my website's data?</h3>
                                        <p className="text-body-text color-gray-500">Yes, we provide regular backups of your website's data to ensure that your information is safe and accessible in case of any unforeseen incidents. You can rest assured knowing that your data is securely backed up and can be restored when needed.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">Can I upgrade or downgrade my hosting plan as my needs change?</h3>
                                        <p className="text-body-text color-gray-500">Yes, you can easily upgrade or downgrade your hosting plan as your requirements evolve. Our flexible hosting solutions allow you to scale resources up or down based on your website's traffic and performance needs.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-heading-5 mb-10">What happens if I don’t renew my license after one year?</h3>
                                        <p className="text-body-text color-gray-500">We accept various payment methods, including credit/debit cards, PayPal, and bank transfers, to accommodate our customers' preferences. Our billing system is transparent and easy to manage, allowing you to track your hosting expenses efficiently.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-100 text-center">
                                            <Link href="/contact" className="btn btn-black shape-square icon-arrow-right-white">Contact Us</Link>
                                        </div>
                </section>
            </Layout>
    )
}

export default Pricing1;