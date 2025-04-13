import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HabilitiesCard } from "../HabilitiesCard/HabilitiesCard";
import { useTranslation } from "react-i18next";
import "./habilities.css"

const SkillSection = ({ title, skills }) => {
    const { t } = useTranslation();
    return (
        <div className="py-2 mx-auto max-w-6xl">
            <h4 className="my-6 mx-auto text-xl md:text-4xl anta-regular text-center">{t(title)}</h4>
            <div className="slider">
                <div className="slide-track">
                    {[...skills, ...skills].map((skill, index) => (
                        <HabilitiesCard
                            key={index}
                            link={skill.link}
                            title={skill.title}
                            image={skill.image}
                            alt={skill.title}
                        />
                    ))}
                </div>
            </div>
        </div>

    );
}

export default SkillSection