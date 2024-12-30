
const About = () => {

    return (
        <div
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            id="infoSection"
            className='flex flex-col mt-12 md:mt-24 max-w-xs sm:max-w-2xl lg:max-w-6xl'>
            <div
                className='my-2'>
                <h1 className="my-2 sm:my-4 text-4xl sm:text-5xl cursor-pointer uppercase text-left anta-regular text-titles">
                    Sobre mi
                </h1>
            </div>
            <div
                className="flex flex-wrap text-left my-6 gap-x-6 gap-y-2"
            >
                <div className="max-w-sm   p-2 border-gray-300">
                    <h4 className="font-semibold text-xl">Inicios</h4>
                    <p className="py-4" >A finales de 2022, comencé mi camino en la programación atraído por el desafío de resolver problemas y crear aplicaciones web. Desde entonces, he enfocado mis esfuerzos en desarrollar habilidades prácticas y una mentalidad orientada al aprendizaje constante.</p>
                </div>
                <div className="max-w-sm  p-2 border-gray-300">
                    <h4 className="font-semibold text-xl">Bios</h4>
                    <p className="py-4" >Comencé mis estudios realizando cursos como Fundamentos de la programación y Programación Java. Aquí aprendí las bases de la programación y comencé a construir aplicaciones J2SE en capas, con acceso a bases de datos MySQL mediante JDBC e interfaces gráficas con Swing.</p>
                </div>
                <div className=" max-w-sm border-t-2  p-2 border-gray-300">
                    <h4 className="font-semibold text-xl">Coderhouse</h4>
                    <p className="py-4" >Coderhouse, continué mis estudios y realicé la Carrera de Desarrollador Web Full Stack. Culminé con éxito esta formación, enfrentando desafíos constantes que reforzaron mis habilidades técnicas y mi capacidad de resolución de problemas.</p>
                </div>
                <div className="max-w-sm border-t-2  p-2 border-gray-300">
                    <h4 className="font-semibold text-xl">Udemy</h4>
                    <p className="py-4" >Udemy, me encuentro realizando el curso de React + Typescript una poderosa combinación para el desarrollo moderno de interfaces de usuario.</p>
                </div>
                <div className="max-w-sm border-t-2  p-2 border-gray-300">
                    <h4 className="font-semibold text-xl">Idiomas</h4>
                    <p className="py-4" >Me encuentro cursando Inglés, Nivel B2 y preparación de First Certificate. En constante mejora para leer documentación técnica y colaborar internacionalmente.</p>
                </div>
                <div className="max-w-sm border-t-2  p-2 border-gray-300">
                    <h4 className="font-semibold text-xl">Objetivo 2025</h4>
                    <p className="py-4" >Conseguir mi primer empleo como desarrollador frontend, aportando valor con mis habilidades técnicas y actitud proactiva.</p>
                </div>
                <div className="max-w-sm border-t-2  p-2 border-gray-300">
                    <h4 className="font-semibold text-xl">Visión</h4>
                    <p className="py-4" >Estoy motivado por el aprendizaje continuo y la posibilidad de contribuir a proyectos desafiantes que impacten de manera positiva. Mi meta es destacar en el mundo del desarrollo web y estar preparado para adaptarme a las tecnologías emergentes del futuro.</p>
                </div>
            </div>
        </div>

    )
}

export default About