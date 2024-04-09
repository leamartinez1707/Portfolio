import './about.css'

const About = () => {

    return (
        <div className='flex flex-col about-bg max-w-4xl mx-auto'>
            <div className='my-2'>
                <h1 className='text-5xl my-2'>
                    Sobre mi
                </h1>
            </div>
            <div className="flex flex-wrap my-6 gap-2">
                <div className="max-w-sm mx-auto info-div">
                    <p className="p-4" >A fines de 2022 inicié mi camino en la programación, ya que me atraía el poder resolver problemas creando aplicaciones web.</p>
                </div>
                <div className="max-w-sm mx-auto info-div">
                    <p className="p-4" >Comencé mi estudio en BIOS Uruguay, adentrandome con el curso de Fundamentos de la programación y siguiendo con Programación Java.</p>
                </div>
                <div className=" max-w-sm mx-auto info-div">
                    <p className="p-4" >Continué mi trayectoria en Coderhouse, me inscribí en la Carrera de Desarrollador Web Full Stack.</p>
                </div>
                <div className="max-w-sm mx-auto info-div">
                    <p className="p-4" >Luego de 1 año de mucho aprendizaje y crecimiento, culminé los estudios, donde constantemente me puse a prueba con los desafios que me tocaban realizar.</p>
                </div>
                <div className="max-w-sm mx-auto info-div">
                    <p className="p-4" >Para seguir nutriendome me encuentro estudiando en Udemy, cursando React + Typescript. Donde estoy prácticando y conociendo este lenguaje en mi biblioteca favorita. </p>
                </div>
                <div className="max-w-sm mx-auto info-div">
                    <p className="p-4" >También me encuentro estudiando inglés, ya que lo considero muy importante para leer documentación y conectar con gente que hable este idioma. De momento estoy en nivel B2.</p>
                </div>
                <div className="max-w-sm mx-auto info-div">
                    <p className="p-4" >Me motiva seguir aprendiendo, continuar creando proyectos personales y profesionales que aporten a mi carrera como Desarrollador.</p>
                </div>
                <div className="max-w-sm mx-auto info-div">
                    <p className="p-4" >Actualmente estoy enfocado en seguir estudiando y cumplir mi principal objetivo que es adentrarme en el rubro, obtener mi primer trabajo como Desarrollador Web</p>
                </div>
            </div>
        </div>

    )
}

export default About