import { HabilitiesCard } from "../HabilitiesCard/HabilitiesCard"

export const HardSkills = () => {
    return (
        <div>
            <div className="">
                <h3
                    data-aos="fade-right"
                    data-aos-duration="800"
                    // data-aos-easing="ease-in-sine"
                    className="my-2 sm:my-4 text-4xl sm:text-5xl cursor-pointer uppercase text-left anta-regular text-titles">Habilidades técnicas</h3>
                {/* tec-title */}
            </div>
            <div className="flex align-middle items-center">
                <h4 className="my-6 mx-auto text-xl md:text-4xl anta-regular">Frontend</h4>
                {/* habilities-icons */}
                <div className="my-4 justify-center max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 sm:p-6">
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
            </div>
            <hr />
            <div className="flex align-middle items-center py-10">
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
                        title='Nest.js'
                        image='https://skillicons.dev/icons?i=nestjs'
                        alt='Nest icon'
                        link='https://nestjs.com/'
                        animate='fade-up'
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
                </div >
                <h6 className="my-6 mx-auto text-xl md:text-4xl anta-regular">Backend</h6>
            </div>
            <hr />
            <div className="flex align-middle items-center">
                <h4 className="my-6 mx-auto text-xl md:text-4xl anta-regular">Otras</h4>
                {/* habilities-icons */}
                <div className="my-4 justify-center max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 sm:p-6">
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
                    <HabilitiesCard
                        title='Jest'
                        image='https://skillicons.dev/icons?i=jest'
                        alt='Jest icon'
                        link='https://jestjs.io/'
                        animate='fade-down'
                    />

                </div >
            </div>
        </div>
    )
}