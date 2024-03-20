import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);

/* eslint-disable @next/next/no-img-element */
const OfferSlider = () => {

    const data = [
        {
            img: "market.svg",
            title: "Market research",
            text: "We are at your service for marketing and delivering your requirements."
        },
        {
            img: "consulting.svg",
            title: "Strategic Advisory",
            text: "Consulting with us today, results your dream project to come to life."
        },
        {
            img: "cognity.svg",
            title: "Cognitive Solution",
            text: "One stop solution for all your tech needs including websites and mobile apps."
        }
    ];


    return (
        <>
            <div className="box-swiper">
                <div className="swiper-container swiper-group-4">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={40}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        navigation={{
                            prevEl: ".swiper-button-prev-3",
                            nextEl: ".swiper-button-next-3"
                        }}
                        breakpoints={{
                            640: {
                              slidesPerView: 1,
                              spaceBetween: 20,
                            },
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 30,
                            },
                            1024: {
                              slidesPerView: 2,
                              spaceBetween: 40,
                            },
                          }}
                    >
                        {data.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="swiper-slide">
                                    <div className="card-grid-style-2 hover-up">
<div className="grid-2-img">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={`/assets/imgs/page/homepage1/${item.img}`} alt={item.title} />
                                        </div>
                                        <h3 className="text-heading-5 mt-20">{item.title}</h3>
                                        <p className="text-body-text color-gray-600 mt-20">{item.text}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default OfferSlider;