/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
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
                        className="swiper-wrapper pb-70 pt-5"
                        breakpoints={{
                            640: {
                              slidesPerView: 1,
                            },
                          }}
                    >
                        {data.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="swiper-slide">
                                    <div className="card-grid-style-2 hover-up">
                                        <div className="grid-2-img">
                                            <img src={`assets/imgs/page/homepage1/${item.img}`} alt="" />
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

