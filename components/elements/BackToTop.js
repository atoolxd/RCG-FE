/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";

function BackToTop() {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const isScrolled = window.scrollY > 100;
        if (isScrolled !== hasScrolled) {
            setHasScrolled(isScrolled);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {hasScrolled && (
                <button
                    id="scrollUp"
                    className="back-to-top"
                    onClick={scrollToTop}
                    style={{ position: 'fixed', zIndex: 2147483647 }}
                >
                    <i className="fi-rr-arrow-small-up" />
                </button>
            )}
        </>
    );
}

export default BackToTop;
