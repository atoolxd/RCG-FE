/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <footer className="footer mt-50">
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 text-center text-md-start">
                                <Link href="/" legacyBehavior>
                                    <a>

                                    </a>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <Image src="/assets/imgs/template/rcg.svg" alt="RCG" width={142} height={42} />
                    <div className="row">
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Contact</h4>
                            <div className="mt-20 text-body-text color-gray-600"></div>
                            <li>
                            <a href="mailto:support@rocketeers.com.au" className="text-body-text color-gray-600">support@rocketeers.com.au</a></li>
                            <a href="tel:+61040513983" className="text-body-text color-gray-600">(+61) 040513983</a>
                            {/* <div className="mt-20 text-body-text color-gray-600 mb-20">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207.28335245752632!2d151.0515239390978!3d-33.772715202960455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfebbfea2a6479fb%3A0xeb05b57e0b8b09c6!2sRocketeers%20Consultation%20Group!5e0!3m2!1sen!2snp!4v1710487618974!5m2!1sen!2snp" width="250" height="200" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div> */}
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Discover</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/page-service-1" legacyBehavior>
                                        <a>Services</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-about-2" legacyBehavior>
                                        <a>About Us</a>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Careers</a>
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                        <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Support</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/contact" legacyBehavior>
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 width-16">
                            <h4 className="text-heading-5">Useful links</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/page-offer" legacyBehavior>
                                        <a>Request an offer</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom mt-20">
                        <div className="row">
                            <div className="col-md-6">
                                <span className="color-gray-400 text-body-lead">© RCG {new Date().getFullYear()}</span>
                                <Link href="/page-terms" legacyBehavior>
                                    <a className="text-body-text color-gray-400 ml-50">Privacy policy</a>
                                </Link>
                                {/* <Link href="/page-terms" legacyBehavior>
                                    <a className="text-body-text color-gray-400 ml-50">Cookies</a>
                                </Link> */}
                                <Link href="/page-terms" legacyBehavior>
                                    <a className="text-body-text color-gray-400 ml-50">Terms of service</a>
                                </Link>
                            </div>
                            <div className="col-md-6 text-center text-lg-end text-md-end">
                                <div className="footer-social">
                                    <Link href="https://www.facebook.com/RocketeersConsulting" legacyBehavior>
                                        <a className="icon-socials icon-facebook"></a>
                                    </Link>
                                    {/* <Link href="https://twitter.com" legacyBehavior>
                                        <a className="icon-socials icon-twitter"></a>
                                    </Link>
                                    <Link href="https://www.instagram.com" legacyBehavior>
                                        <a className="icon-socials icon-instagram"></a>
                                    </Link>
                                    <Link href="https://www.linkedin.com" legacyBehavior>
                                        <a className="icon-socials icon-linkedin"></a>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;