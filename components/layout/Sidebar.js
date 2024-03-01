/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const Sidebar = ({ openClass, setOpen }) => {
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
        setIsOpen(false);
    };

    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
                <PerfectScrollbar className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                    <button onClick={(closeclick) => setOpen(false)}>X</button>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                    <li className={isActive.key === 1}>
                                            <span onClick={() => handleToggle(1)}></span>
                                            <Link href="/" legacyBehavior><a className="active">Home</a></Link>
                                        </li>
                                        <li className={isActive.key === 2}>
                                            <span onClick={() => handleToggle(2)} className=""></span>

                                            <Link href="/page-about-1" legacyBehavior><a>About Us</a></Link>
                                            
                                        </li>
                                            <li className={isActive.key === 4}>
                                            <span onClick={() => handleToggle(4)}></span>

                                            <Link href="/page-career" legacyBehavior><a>Careers</a></Link>
                                            </li>
                                            <li className={isActive.key === 5}>
                                            <Link href="/page-service-1" legacyBehavior><a>Services</a></Link>
                                            {/* <ul className={isActive.key == 5 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>
                                                    <Link href="/" legacyBehavior><a>Web Development</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/" legacyBehavior><a>App Development</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/" legacyBehavior><a>Consultation</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/" legacyBehavior><a>Artificial Intelligence</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/" legacyBehavior><a>Digital Marketing</a></Link>
                                                </li>
                                                </ul> */}
                                            </li>
                                            <li className={isActive.key === 6}>
                                            <span onClick={() => handleToggle(6)}></span>
                                            <Link href="/page-contact" legacyBehavior><a>Contact Us</a></Link>
                                            </li>
                                            </ul>
                                            
                                </nav>
                            </div>
                            <div className="site-copyright color-gray-400">
                                Copyright 2024 © RCG.<br />Designed
                                by RCG
                            </div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>

        </>
    );
};
<Sidebar openClass="mobile-header-active mobile-header-wrapper-style perfect-scrollbar" setOpen={setSidebarOpen} />
export default Sidebar;