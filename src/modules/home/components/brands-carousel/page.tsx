'use client'
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { brands } from '@lib/data/brands';

import 'swiper/css';
import 'swiper/css/autoplay';

const BrandCarousel = () => {

    return (
        <div className="w-full">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 5,
                    },
                    1024: {
                        slidesPerView: 6,
                    },
                }}
                className="!w-full"
            >
                {brands.map((brand, index) => (
                    <SwiperSlide key={index}>
                        <div className="!flex !items-center !justify-center !p-4 !h-[200px] !mb-10">
                            <Image
                                src={brand.image}
                                alt={brand.name}
                                width={150}
                                height={80}
                                className="!w-[180px] !h-auto !max-h-[80px] !object-contain"
                                priority={index < 6} // Prioriza la carga de las primeras 5 imágenes
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BrandCarousel;