import Card from '../../resuable/Card'
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion"
import "swiper/css/pagination";
import "swiper/css/navigation"
import { cardData } from '../../../../utils/data';

import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

import { Navigation } from "swiper"

const Recently = () => {
    const breakpoints = {
        850: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1250: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1550:{
            slidesPerView: 4,
            spaceBetween: 10,
        }
    }
    return (
        <div className="rokye__home-recent">
            <div className="rokye__home-recent__title">
                <h1>Recently Added</h1>
                <p>Rokye Group is commited to helping its client to react their goals</p>
            </div>
            <div className="rokye__home-recent__detail">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={40}
                    modules={[Navigation]}
                    navigation={{ nextEl: ".next__btn", prevEl: ".prev__btn" }}
                    loop
                    breakpoints={breakpoints}
                    pagination={{
                        clickable: true,
                    }}
                    // centeredSlides={true}
                    className="mySwiper"
                >
                    {cardData.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Card city={item.city} place={item.place} title={item.title} img={item.img} price={item.price} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="rokye__home-recent__navigate">
                <motion.div className="prev__btn" whileTap={{ x: -30 }}>
                    <BsArrowLeft size={50} />
                </motion.div>
                <motion.div className="next__btn" whileTap={{ x: 30 }}>
                    <BsArrowRight size={100} />
                </motion.div>
            </div>
        </div>
    )
}

export default Recently