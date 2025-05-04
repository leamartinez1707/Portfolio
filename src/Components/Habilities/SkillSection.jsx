/* eslint-disable react/prop-types */
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HabilitiesCard } from "../HabilitiesCard/HabilitiesCard";
import { useTranslation } from "react-i18next";
import "./habilities.css"
import HabilitiesSwiper from "./HabilitiesSwiper";
import { SwiperSlide } from "swiper/react";

const SkillSection = ({ title, skills }) => {
    const { t } = useTranslation();

    return (
        <div className="py-2 mx-auto max-w-6xl">
            <h4 className="my-6 text-xl md:text-4xl anta-regular">{t(title)}</h4>
            <HabilitiesSwiper>
                {[...skills].map((skill, index) => (
                    <SwiperSlide
                        key={index}
                    >
                        <HabilitiesCard
                            image={skill.image}
                            alt={skill.title}
                            link={skill.link}
                            title={skill.title}
                        />
                    </SwiperSlide>
                ))}
            </HabilitiesSwiper>
        </div>
    );
}

export default SkillSection