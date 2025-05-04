import {
    FaSync as AdaptabilityIcon,
    FaComments as CommunicationIcon,
    FaLightbulb as CreativityIcon,
    FaClock as TimeManagementIcon,
    FaRocket as InitiativeIcon,
    FaFolderOpen as OrganizationIcon,
    FaBrain as CriticalThinkingIcon,
    FaPuzzlePiece as ProblemSolvingIcon,
    FaClipboardCheck as ResponsibilityIcon,
    FaUsers as TeamworkIcon,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import HabilitiesSwiper from "./HabilitiesSwiper";
import { SwiperSlide } from "swiper/react";

const softSkills = [
    { name: 'adaptability', icon: AdaptabilityIcon },
    { name: 'communication', icon: CommunicationIcon },
    { name: 'creative', icon: CreativityIcon },
    { name: 'time-management', icon: TimeManagementIcon },
    { name: 'initiative', icon: InitiativeIcon },
    { name: 'organization', icon: OrganizationIcon },
    { name: 'critical-thinking', icon: CriticalThinkingIcon },
    { name: 'problem-solving', icon: ProblemSolvingIcon },
    { name: 'responsability', icon: ResponsibilityIcon },
    { name: 'teamwork', icon: TeamworkIcon },
];

export const SoftSkills = () => {
    const { t } = useTranslation();

    return (
        <section className="pt-10">
            <h3
                data-aos="fade-left"
                data-aos-duration="800"
                className="my-2 sm:my-4 text-4xl sm:text-5xl cursor-pointer uppercase text-left anta-regular text-titles"
            >
                {t('soft-skills')}
            </h3>
            <HabilitiesSwiper>
                {softSkills.map((skill) => (
                    <SwiperSlide key={skill.name}>
                        <div className="flex flex-col pb-8 items-center justify-center text-white text-center p-4 rounded-lg shadow-sm transition-transform hover:cursor-pointer hover:scale-105">
                            <skill.icon className="text-6xl pb-2" />
                            <span className="text-sm font-medium">{t(`${skill.name}`)}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </HabilitiesSwiper>
        </section>
    );
};