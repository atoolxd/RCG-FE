import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import Image from "next/image";

SwiperCore.use([Autoplay, Navigation]);

const ProjectSlider = () => {
    const data = [
        {
            img: "/assets/imgs/page/blog/1/fanbucket.png",
            avatar: "/assets/imgs/page/blog/2/user-3.png",
            title: "Liquid Wave",
            author: "Atul",
        },
        {
            img: "/assets/imgs/page/blog/1/fanbucket.png",
            avatar: "/assets/imgs/page/blog/2/user-3.png",
            title: "Liquid Wave",
            author: "Atul",
        },
    ];

    return (
        <div className="slider-news">
            <div className="swiper-container swiper-group-1">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        prevEl: ".swiper-button-prev-5",
                        nextEl: ".swiper-button-next-5",
                    }}
                    className="swiper-wrapper pb-70 pt-5"
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    {data.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className="swiper-slide active">
                                <div className="block-news">
                                    <div className="item-news">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-12">
                                                <div className="img-news">
                                                    <Link href="/blog-single" passHref legacyBehavior>
                                                        <Image
                                                            src={item.img}
                                                            alt="FB"
                                                            width={300}
                                                            height={200}
                                                            layout="responsive"
                                                            objectFit="cover"
                                                            style={{ margin: '0 20px' }}
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12">
                                                <div className="right-news card-grid-style-4 mb-0">
                                                    <span className="tag-dot">Past Projects</span>
                                                    <Link href="/blog-single" passHref legacyBehavior>
                                                        <a className="text-heading-4">Hear what our clients say</a>
                                                    </Link>
                                                    <p className="text-body-text color-gray-500 text-desc-fix-h">
                                                        I opted Rocketeers Consultation Group for my dream project Fanbucket so that I could get personalized social media app and webapp as per my requirements.
                                                    </p>
                                                    <div className="blog-img-user">
                                                        <div className="img-user img-user-round">
                                                            <Image
                                                                src={item.avatar}
                                                                alt="RCG"
                                                                width={300}
                                                                height={200}
                                                            />
                                                        </div>
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
    );
};

export default ProjectSlider;
