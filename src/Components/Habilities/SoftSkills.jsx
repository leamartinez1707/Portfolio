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
        <section className="">
            <h3
                className="my-2 sm:my-4 text-4xl sm:text-5xl cursor-pointer uppercase text-left anta-regular text-titles">{t('soft-skills')}</h3>
            <div
                className="flex flex-wrap w-full justify-center gap-6 my-10 max-w-4xl">
                {softSkills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex flex-col items-center justify-center  text-white text-center p-4 rounded-lg shadow-md size-32transition-transform hover:scale-105"
                    >
                        <skill.icon className="w-12 h-12 mb-2" />
                        <span className="text-sm font-medium">{t(`${skill.name}`)}</span>
                    </div>
                ))}
            </div>

        </section>
    )
}