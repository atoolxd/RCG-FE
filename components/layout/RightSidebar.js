/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const RightSidebar = ({ openClass, setOpen }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    const closeSidebar = () => {
        setOpen(false);
    };
      
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${!openClass}`}>
                <PerfectScrollbar className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                    <button onClick={(closeclick) => setOpen(false)}>X</button>
                            <div className="content">
                            </div>
                        </div>
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                        <li className={isActive.key == 1}>
                                            <span onClick={() => handleToggle(1)}>
                                                <i className="fi-rr-angle-small-down"></i></span>
                                            <Link href="/" legacyBehavior><a className="active">Home</a></Link>
                                            
                                        </li>
                                        <li className={isActive.key == 2}>
                                            <span onClick={() => handleToggle(2)}><i className="fi-rr-angle-small-down"></i></span>

                                            <Link href="/page-about-1" legacyBehavior><a>About</a></Link>
                                            
                                        </li>
                                        {/* <li className={isActive.key == 3 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(3)}  className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link href="/page-service-1" legacyBehavior><a>Company</a></Link>
                                            
                                        </li> */}
                                        <li className={isActive.key == 4}>
                                            <span onClick={() => handleToggle(4)}><i className="fi-rr-angle-small-down"></i></span>

                                            <Link href="/#" legacyBehavior><a>Pages</a></Link>
                                            <ul className={isActive.key == 4 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>
                                                    <Link href="/page-contact" legacyBehavior><a>Contact</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 5}>
                                            <span onClick={() => handleToggle(5)}><i className="fi-rr-angle-small-down"></i></span>

                                            {/* <Link href="/blog-1" legacyBehavior><a>Blog</a></Link>
                                            <ul className={isActive.key == 5 ? "sub-menu d-block" : "sub-menu d-none"}>
                                            </ul> */}
                                        </li>
                                        <li>
                                            <Link href="/page-contact" legacyBehavior><a>Contact</a></Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="site-copyright color-gray-400">
                                Copyright 2024 © RCG - RCG.<br />Designed
                                by RCG 
                                <a>&nbsp; RCG</a>
                            </div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>
            </>
    );
};
<RightSidebar openClass="mobile-header-active mobile-header-wrapper-style perfect-scrollbar" setOpen={setIsSidebarOpen} />


export default RightSidebar;