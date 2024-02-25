/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from "next/link";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const ProjectSlider = () => {

    const data = [
        {
            img: "9.jpg",
            avatar: "1.jpg",
            title: "Liguid Wave",
            author: "Atul"
        },
        {
            img: "10.jpg",
            avatar: "2.jpg",
            title: "Liguid Wave",
            author: "Atul"
        },
        
    ];


    return (
        <>
            <div className="slider-news">
                <div className="swiper-container swiper-group-1">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false
                        }}
                        navigation={{
                            prevEl: ".swiper-button-prev-5",
                            nextEl: ".swiper-button-next-5",
                        }}
                        className="swiper-wrapper pb-70 pt-5"
                    >
                        {data.map((item, i) => (
                            <SwiperSlide key="{item}">
                                <div className="swiper-slide active">
                                    <div className="block-news">
                                        <div className="item-news">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-12">
                                                    <div className="img-news">
                                                        <Link href="/blog-single" legacyBehavior><a><img src="/assets/imgs/page/blog/1/fanbucket.png" alt="Agon" />
                                                        </a></Link>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-12">
                                                    <div className="right-news card-grid-style-4 mb-0"><span className="tag-dot">Past Projects</span>
                                                        <Link href="/blog-single" legacyBehavior><a className="text-heading-4">Hear what our clients say
                                                        </a></Link>

                                                        <p className="text-body-text color-gray-500 text-desc-fix-h">I opted RCG for Fanbucket so that I could get peronalized social media app as per my requirements.</p>
                                                        <div className="blog-img-user">
                                                            <div className="img-user img-user-round"><img src="/assets/imgs/page/blog/2/user-3.png" alt="Agon" /></div>
                                                            <h4 className="text-heading-6 color-gray-900">Joshua Cason</h4>
                                                            <p className="text-body-small color-gray-500">August 25, 2022</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                </div>
                <div className="swiper-button-next swiper-button-next-5" />
                <div className="swiper-button-prev swiper-button-prev-5" />
            </div>


        </>
    );
};

export default ProjectSlider;

