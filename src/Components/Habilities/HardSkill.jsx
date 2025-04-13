import { useTranslation } from "react-i18next";
import SkillSection from "./SkillSection";

export const HardSkills = () => {
    const { t } = useTranslation();

    // Categorías de habilidades
    const frontendSkills = [
        { title: "HTML", image: "https://skillicons.dev/icons?i=html", link: "https://developer.mozilla.org/es/docs/Web/HTML" },
        { title: "CSS", image: "https://skillicons.dev/icons?i=css", link: "https://developer.mozilla.org/es/docs/Web/CSS" },
        { title: "Javascript", image: "https://skillicons.dev/icons?i=js", link: "https://developer.mozilla.org/es/docs/Web/JavaScript" },
        { title: "TypeScript", image: "https://skillicons.dev/icons?i=typescript", link: "https://www.typescriptlang.org/" },
        { title: "React", image: "https://skillicons.dev/icons?i=react", link: "https://es.react.dev/learn" },
        { title: "Tailwind", image: "https://skillicons.dev/icons?i=tailwind", link: "https://tailwindcss.com/docs/installation" },
        { title: "Next.js", image: "https://skillicons.dev/icons?i=next", link: "https://nextjs.org/" },
    ];

    const backendSkills = [
        { title: "Node.js", image: "https://skillicons.dev/icons?i=nodejs", link: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs" },
        { title: "Express", image: "https://skillicons.dev/icons?i=express", link: "https://expressjs.com/" },
        { title: "Nest.js", image: "https://skillicons.dev/icons?i=nestjs", link: "https://nestjs.com/" },
        { title: "MongoDB", image: "https://skillicons.dev/icons?i=mongodb", link: "https://www.mongodb.com/es" },
        { title: "MySQL", image: "https://skillicons.dev/icons?i=mysql", link: "https://www.mysql.com/" },
        { title: "PostgreSQL", image: "https://skillicons.dev/icons?i=postgresql", link: "https://www.postgresql.org/" },
    ];

    const otherSkills = [
        { title: "Git", image: "https://skillicons.dev/icons?i=git", link: "https://git-scm.com/" },
        { title: "Github", image: "https://skillicons.dev/icons?i=github", link: "https://github.com/" },
        { title: "Docker", image: "https://skillicons.dev/icons?i=docker", link: "https://www.docker.com/" },
        { title: "Firebase", image: "https://skillicons.dev/icons?i=firebase", link: "https://firebase.google.com/?hl=es" },
        { title: "AWS", image: "https://skillicons.dev/icons?i=aws", link: "https://aws.amazon.com/es/" },
        { title: "Vercel", image: "https://skillicons.dev/icons?i=vercel", link: "https://vercel.com/" },
        { title: "Jest", image: "https://skillicons.dev/icons?i=jest", link: "https://jestjs.io/" },
        { title: "Prisma", image: "https://skillicons.dev/icons?i=prisma", link: "https://www.prisma.io/" },
        { title: "Sequelize", image: "https://skillicons.dev/icons?i=sequelize", link: "https://sequelize.org/" },
    ];
    return (
        <div className="">
            <div className="text-center mb-10">
                <h3
                    data-aos="fade-right"
                    data-aos-duration="800"
                    className="my-2 sm:my-4 text-4xl sm:text-5xl cursor-pointer uppercase text-left anta-regular text-titles"
                >
                    {t("hard-skills")}
                </h3>
            </div>

            {/* Secciones de habilidades */}
            <SkillSection title="frontend" skills={frontendSkills} />
            <SkillSection title="backend" skills={backendSkills} />
            <SkillSection title="others" skills={otherSkills} />
        </div>
    );
};