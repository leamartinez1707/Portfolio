/* eslint-disable react/prop-types */
import { Swiper } from "swiper/react"
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HabilitiesSwiper = ({ children }) => {
    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            pagination={{ clickable: true, }}
            breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
            }}
            className="my-10 max-w-4xl cursor-pointer"
        >
            {children}
        </Swiper>
    )
}

export default HabilitiesSwiper