import { HabilitiesCard } from "../HabilitiesCard/HabilitiesCard"

const Habilities = () => {
    return (
        <>
            <div className="mx-auto">
                <h3
                    data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    className="my-2 sm:my-4 text-4xl sm:text-5xl p-2 tec-title cursor-pointer uppercase mx-auto">Tecnologías trabajadas</h3>
            </div>
            <h6 className="my-6 mx-auto text-xl max-w-4xl">Frontend</h6>
            <div className="habilities-icons my-4 justify-center max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 sm:p-6">
                <HabilitiesCard
                    title='HTML'
                    image='https://skillicons.dev/icons?i=html'
                    alt='HTML icon'
                    link='https://developer.mozilla.org/es/docs/Web/HTML'
                    animate='fade-down'
                />
                <HabilitiesCard
                    title='CSS'
                    image='https://skillicons.dev/icons?i=css'
                    alt='CSS icon'
                    link='https://developer.mozilla.org/es/docs/Web/CSS'
                    animate='fade-up'
                />
                <HabilitiesCard
                    title='Javascript'
                    image='https://skillicons.dev/icons?i=js'
                    alt='Javascript icon'
                    link='https://developer.mozilla.org/es/docs/Web/JavaScript'
                    animate='fade-down'
                />
                <HabilitiesCard
                    title='TypeScript'
                    image='https://skillicons.dev/icons?i=typescript'
                    alt='TypeScript icon'
                    link='https://developer.mozilla.org/es/docs/Web/JavaScript'
                    animate='fade-up'
                />
                <HabilitiesCard
                    title='React'
                    image='https://skillicons.dev/icons?i=react'
                    alt='React icon'
                    link='https://es.react.dev/learn'
                    animate='fade-down'
                />

                <HabilitiesCard
                    title='Nest.js'
                    image='https://skillicons.dev/icons?i=nestjs'
                    alt='Nest icon'
                    link='https://nestjs.com/'
                    animate='fade-up'
                />
                <HabilitiesCard
                    title='Tailwind'
                    image='https://skillicons.dev/icons?i=tailwind'
                    alt='Tailwind icon'
                    link='https://tailwindcss.com/docs/installation'
                    animate='fade-down'
                />
                <HabilitiesCard
                    title='Bootstrap'
                    image='https://skillicons.dev/icons?i=bootstrap'
                    alt='Bootstrap icon'
                    link='https://getbootstrap.com/'
                    animate='fade-up'
                />
            </div >
            <h6 className="my-6 mx-auto text-xl max-w-4xl">Backend</h6>
            <div className="habilities-icons my-4 justify-center max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 sm:p-6">
                <HabilitiesCard
                    title='Node.js'
                    image='https://skillicons.dev/icons?i=nodejs'
                    alt='Nodejs icon'
                    link='https://nodejs.org/en/learn/getting-started/introduction-to-nodejs'
                    animate='fade-up'
                />
                <HabilitiesCard
                    title='Javascript'
                    image='https://skillicons.dev/icons?i=js'
                    alt='Javascript icon'
                    link='https://developer.mozilla.org/es/docs/Web/JavaScript'
                    animate='fade-down'
                />
                <HabilitiesCard
                    title='Vite'
                    image='https://skillicons.dev/icons?i=vite'
                    alt='React icon'
                    link='https://vitejs.dev/'
                    animate='fade-down'
                />
                <HabilitiesCard
                    title='Express'
                    image='https://skillicons.dev/icons?i=express'
                    alt='Express icon'
                    link='https://expressjs.com/'
                    animate='fade-up'
                />
                <HabilitiesCard
                    title='MongoDB'
                    image='https://skillicons.dev/icons?i=mongodb'
                    alt='MongoDB icon'
                    link='https://www.mongodb.com/es'
                    animate='fade-down'
                />
                <HabilitiesCard
                    title='AWS'
                    image='https://skillicons.dev/icons?i=aws'
                    alt='Amazon web services icon'
                    link='https://aws.amazon.com/es/'
                    animate='fade-up'
                />
                <HabilitiesCard
                    title='Firebase'
                    image='https://skillicons.dev/icons?i=firebase'
                    alt='Firebase icon'
                    link='https://firebase.google.com/?hl=es'
                    animate='fade-down'
                />
                <HabilitiesCard
                    title='Git'
                    image='https://skillicons.dev/icons?i=git'
                    alt='Git icon'
                    link='https://git-scm.com/'
                    animate='fade-up'
                />
                <HabilitiesCard
                    title='Github'
                    image='https://skillicons.dev/icons?i=github'
                    alt='Github icon'
                    link='https://github.com/'
                    animate='fade-down'
                />
                <HabilitiesCard
                    title='Vercel'
                    image='https://skillicons.dev/icons?i=vercel'
                    alt='Tailwind icon'
                    link='https://vercel.com/'
                    animate='fade-down'
                />
            </div >
            <div
                data-aos="fade-right"
                className="mx-auto">
                <h3
                    className="my-2 sm:my-4 text-4xl sm:text-5xl p-2 tec-title cursor-pointer uppercase">Habilidades técnicas</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl justify-center mx-auto">
                <div className="w-full max-w-1/2 sm:w-full p-6 mx-auto" data-aos="fade-down-left">
                    <h6 className="text-lg sm:text-xl m-2 p-2 text-white">HTML</h6>
                    <h6 className="text-lg sm:text-xl m-2 p-2 text-white">CSS</h6>
                    <h6 className="text-lg sm:text-xl m-2 p-2 text-white">Javascript</h6>
                    <h6 className="text-lg sm:text-xl m-2 p-2 text-white">React</h6>
                    <h6 className="text-lg sm:text-xl m-2 p-2 text-white">Express</h6>
                    <h6 className="text-lg sm:text-xl m-2 p-2 text-white">MongoDB</h6>

                </div>
                <div className="w-full max-w-1/2 sm:w-full p-6 mx-auto" data-aos="fade-down-right">
                    <h6 className="text-lg sm:text-xl m-2 p-2 text-white">Diseño web adaptable</h6>
                    <h6 className="text-lg sm:text-xl m-2 p-2 text-white">Frameworks CSS</h6>
                    <h6 className="text-lg sm:text-xl m-2 p-2 text-white">Npm | Gestión de paquetes</h6>
                    <h6 className="text-lg sm:text-xl m-2 p-2 text-white">Git | Control de versión</h6>
                    <h6 className="text-lg sm:text-xl m-2 p-2 text-white">Testing</h6>
                </div>
            </div>
            <div
                data-aos="fade-left"
                className="mx-auto">
                <h3
                    data-aos-offset="100"
                    data-aos-easing="ease-in-sine"
                    data-aos="fade-left"
                    className="my-2 sm:my-4 text-4xl sm:text-5xl p-2 tec-title cursor-pointer uppercase">Habilidades blandas</h3>
            </div>
            <div className="grid max-w-4xl justify-center mx-auto">
                <div className="w-full max-w-1/2 sm:w-full p-6 mx-auto"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                    data-aos="flip-left">
                    <h6 className="text-lg sm:text-xl m-2 p-2 text-white">Adaptabilidad</h6>
                    <h6 className="text-lg sm:text-xl m-2 p-2 text-white">Comunicación</h6>
                    <h6 className="text-lg sm:text-xl m-2 p-2 text-white">Creatividad</h6>
                    <h6 className="text-lg sm:text-xl m-2 p-2 text-white">Gestión del tiempo</h6>
                    <h6 className="text-lg sm:text-xl m-2 p-2 text-white">Iniciativa</h6>
                    <h6 className="text-lg sm:text-xl m-2 p-2 text-white">Organización</h6>
                    <h6 className="text-lg sm:text-xl m-2 p-2 text-white">Pensamiento crítico</h6>
                    <h6 className="text-lg sm:text-xl m-2 p-2 text-white">Resolución de problemas</h6>
                    <h6 className="text-lg sm:text-xl m-2 p-2 text-white">Responsable</h6>
                    <h6 className="text-lg sm:text-xl m-2 p-2 text-white">Trabajo en equipo</h6>
                </div>
            </div>
        </>

    )
}

export default Habilities