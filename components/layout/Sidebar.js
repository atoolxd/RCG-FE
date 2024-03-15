/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const Sidebar = ({ openClass, setOpen }) => {
    const [activeKey, setActiveKey] = useState("");

    const toggleMenu = (key) => {
        if (activeKey === key) {
            setActiveKey("");
        } else {
            setActiveKey(key);
        }
        if (key === "0") {
            setOpen(false);
        }
    };

    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
                <PerfectScrollbar className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="mobile-header-content-area">
                            <div className="perfect-scroll">
                            <style jsx>{`
                  .mobile-menu-wrap .mobile-menu > li > a {
                    cursor: pointer;
                  }
                `}</style>
                                <div className="mobile-menu-wrap mobile-header-border">
                                    <nav>
                                        <ul className="mobile-menu font-heading">
                                            <li className={activeKey === "1" ? "active" : ""}>
                                                <span onClick={() => toggleMenu("1")}></span>
                                                <Link href="/" legacyBehavior><a className="active">Home</a></Link>
                                            </li>
                                            <li className={activeKey === "2" ? "active" : ""}>
                                                <span onClick={() => toggleMenu("2")} className=""></span><Link href="/page-about-2" legacyBehavior><a>About Us</a></Link>
                                            </li>
                                            <li className={activeKey === "4" ? "active" : ""}>
                                                <Link href="/page-service-1" legacyBehavior><a>Services</a></Link>
                                                {/* Add sub-menu logic if needed */}
                                            </li>
                                            <li className={activeKey === "5" ? "active" : ""}>
                                                <span onClick={() => toggleMenu("5")}></span>
                                                <Link href="/contact" legacyBehavior><a>Contact Us</a></Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="site-copyright color-gray-400">
                                    Copyright {new Date().getFullYear()} © RCG.<br />Designed
                                    by RCG
                                </div>
                            </div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>
        </>
    );
};

Sidebar.defaultProps = {
    openClass: "",
    setOpen: () => { },
};

export default Sidebar;