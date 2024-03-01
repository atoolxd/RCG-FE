/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
const Header = ({ handleOpen, headerStyle }) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <>
            <header className={scroll ? `${headerStyle} header sticky-bar stick ` : `${headerStyle} header sticky-bar`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link href="/" legacyBehavior>
                                    <a className="d-flex">
                                        {headerStyle ? <img alt="RCG" src="/assets/imgs/template/rcg.png" /> : <img alt="RCG" src="/assets/imgs/template/rcg.png"/>}
                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li>
                                            <Link href="/" legacyBehavior><a className="active">Home</a></Link>
                                            
                                        </li>
                                        <li>
                                            <Link href="/page-service-1" legacyBehavior><a>Services</a></Link>
                                        </li>
                                        <li>
                                            <Link href="/page-about-2" legacyBehavior><a>Portfolio</a></Link>
                                            
                                        </li>
                                        <li>
                                            <Link href="/page-contact">Contact</Link>
                                            
                                        </li>
                                        {/* <li>
                                        <Link href="/page-career" legacyBehavior><a className="">Career</a></Link>
                                        </li> */}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="header-right">
                        <div className="block-signin">
                                <Link href="/page-offer" legacyBehavior><a className="btn btn-default hover-up icon-arrow-right"> Free Website</a></Link>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="burger-icon burger-icon-white" onClick={handleOpen}>
                                    <span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" />
                                </div>
                            
             
            </header>

        </>
    );
};

export default Header;