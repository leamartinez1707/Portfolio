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


const softSkills = [
    { name: 'Adaptabilidad', icon: AdaptabilityIcon },
    { name: 'Comunicación', icon: CommunicationIcon },
    { name: 'Creatividad', icon: CreativityIcon },
    { name: 'Gestión del tiempo', icon: TimeManagementIcon },
    { name: 'Iniciativa', icon: InitiativeIcon },
    { name: 'Organización', icon: OrganizationIcon },
    { name: 'Pensamiento crítico', icon: CriticalThinkingIcon },
    { name: 'Resolución de problemas', icon: ProblemSolvingIcon },
    { name: 'Responsable', icon: ResponsibilityIcon },
    { name: 'Trabajo en equipo', icon: TeamworkIcon },
];

export const SoftSkills = () => {
    return (
        <section className="">
            <h3
                className="my-2 sm:my-4 text-4xl sm:text-5xl cursor-pointer uppercase text-left anta-regular text-titles">Habilidades blandas</h3>
            <div
                className="flex flex-wrap w-full justify-center gap-6 my-10 max-w-4xl">
                {softSkills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex flex-col items-center justify-center  text-white text-center p-4 rounded-lg shadow-md size-32transition-transform hover:scale-105"
                    >
                        <skill.icon className="w-12 h-12 mb-2" />
                        <span className="text-sm font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>

        </section>
    )
}