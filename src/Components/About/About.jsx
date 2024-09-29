
const About = () => {

    return (
        <div
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            id="infoSection"
            className='flex flex-col mt-12 md:mt-24 max-w-xs sm:max-w-2xl lg:max-w-6xl mx-auto'>
            <div
                className='my-2'>
                <h1 className="my-2 sm:my-4 text-4xl sm:text-5xl cursor-pointer uppercase text-left anta-regular text-titles">
                    Sobre mi
                </h1>
            </div>
            <div
                className="flex flex-wrap text-left my-6 gap-6"
            >
                <div className="max-w-sm ">
                    <p className="py-4" >A fines de 2022 inicié mi camino en la programación, ya que me atraía el poder resolver problemas creando aplicaciones web.</p>
                </div>
                <div className="max-w-sm ">
                    <p className="py-4" >Comencé mi estudio en BIOS Uruguay, adentrandome con el curso de Fundamentos de la programación y siguiendo con Programación Java.</p>
                </div>
                <div className=" max-w-sm ">
                    <p className="py-4" >Continué mi trayectoria en Coderhouse, me inscribí en la Carrera de Desarrollador Web Full Stack.</p>
                </div>
                <div className="max-w-sm ">
                    <p className="py-4" >Luego de 1 año de mucho aprendizaje y crecimiento, culminé los estudios, donde constantemente me puse a prueba con los desafios que me tocaban realizar.</p>
                </div>
                <div className="max-w-sm ">
                    <p className="py-4" >Para seguir nutriendome me encuentro estudiando en Udemy, cursando React + Typescript. Sigo prácticando y conociendo este lenguaje en mi biblioteca favorita. </p>
                </div>
                <div className="max-w-sm ">
                    <p className="py-4" >También me encuentro estudiando inglés, ya que lo considero muy importante para leer documentación y conectar con gente que hable este idioma. De momento estoy en nivel B2.</p>
                </div>
                <div className="max-w-sm ">
                    <p className="py-4" >Me motiva seguir aprendiendo, continuar con la creación de proyectos personales y profesionales, que aporten a mi carrera.</p>
                </div>
                <div className="max-w-sm ">
                    <p className="py-4" >Actualmente sigo en constante aprendizaje para estar actualizado. Este año pretendo cumplir mi objetivo principal que es adentrarme en el rubro y obtener mi primer trabajo como Desarrollador.</p>
                </div>
            </div>
        </div>

    )
}

export default About