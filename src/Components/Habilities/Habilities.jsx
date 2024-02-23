const Habilities = () => {
    return (
        <>
            <div>
                <h3 className="my-2 sm:my-4 text-3xl sm:text-4xl underline p-2 tec-title cursor-pointer">Mis principales tecnologías</h3>
                {/* <p className="text-xl text-white my-2">A lo largo de mi carrera como estudiante, he trabajado con muchas habilidades.</p> */}
                <p></p>
            </div>
            <div className="habilities-icons grid gap-4 grid-cols-3 sm:flex sm:flex-wrap justify-center max-w-4xl mx-auto">
                <div className="mx-4"><img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=html" alt="HTML icon" /><h2><a href="https://developer.mozilla.org/es/docs/Web/HTML" target="blank">HTML</a></h2></div>
                <div className="mx-4"><img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=css" alt="Css icon" /><h2><a href="https://developer.mozilla.org/es/docs/Web/CSS" target="blank">CSS</a></h2></div>
                <div className="mx-4">
                    <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=js" alt="Javascript icon" /><h2><a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="blank">JS</a></h2></div>
                <div className="mx-4">
                    <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=react" alt="React icon" />
                    <h2>
                        <a href="https://es.react.dev/learn" target="blank">REACT</a>
                    </h2>
                </div>
                <div className="mx-4"><img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=nodejs" alt="React icon" /><h2><a href="https://nodejs.org/en/learn/getting-started/introduction-to-nodejs" target="blank">NODEJS</a></h2></div>
                <div className="mx-4">
                    <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=vite" alt="React icon" />
                    <h2>
                        <a href="https://vitejs.dev/" target="blank">VITE</a>
                    </h2>
                </div>
                <div className="mx-4">
                    <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=express" alt="React icon" />
                    <h2 className="mx-auto">
                        <a href="https://expressjs.com/" target="blank">EXPRESS</a>
                    </h2>
                </div>
                <div className="mx-4"><img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=mongodb" alt="React icon" /><h2> <a href="https://www.mongodb.com/es" target="blank">MONGODB</a></h2></div>
                <div className="mx-4">
                    <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=aws" alt="React icon" />
                    <h2>
                        <a href="https://aws.amazon.com/es/" target="blank">AWS</a>
                    </h2>
                </div>
                <div className="mx-4">
                    <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=firebase" alt="React icon" />
                    <h2>
                        <a href="https://firebase.google.com/?hl=es" target="blank">FIREBASE</a>
                    </h2>
                </div>
                <div className="mx-4">
                    <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=git" alt="React icon" />
                    <h2>
                        <a href="https://git-scm.com/" target="blank">GIT</a>
                    </h2>
                </div>
                <div className="mx-4">
                    <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=github" alt="React icon" />
                    <h2>
                        <a href="https://github.com//" target="blank">GITHUB</a>
                    </h2>
                </div>
                <div className="mx-4">
                    <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=nestjs" alt="React icon" />
                    <h2>
                        <a href="https://nestjs.com/" target="blank">NEST.JS</a>
                    </h2>
                </div>
                <div className="mx-4">
                    <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=tailwind" alt="React icon" />
                    <h2>
                        <a href="https://tailwindcss.com/docs/installation" target="blank">TAILWIND</a>
                    </h2>
                </div>
                <div className="mx-4">
                    <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=bootstrap" alt="React icon" />
                    <h2>
                        <a href="https://getbootstrap.com/">BOOTSRAP</a>
                    </h2>
                </div>
                <div className="mx-4">
                    <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=vercel" alt="React icon" />
                    <h2>
                        <a href="https://vercel.com/">VERCEL</a>
                    </h2>
                </div>


            </div>
            {/* <div><h3 className="my-2 sm:my-4 text-3xl sm:text-4xl underline p-2 tec-title cursor-pointer">Tecnologías conocidas</h3></div>
            <div className="habilities-icons grid gap-4 grid-cols-3 sm:flex sm:flex-wrap lg:grid-cols-6 justify-center my-6">
            </div> */}
            {/* <div className="habilities-icons flex flex-row mx-auto justify-center my-4">
                <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=git" alt="React icon" />
                <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=github" alt="React icon" />
                <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=vite" alt="React icon" />
                <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=nextjs" alt="React icon" />
                <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=express" alt="React icon" />
            </div>
            <div className="habilities-icons flex flex-row mx-auto justify-center">
                <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=react" alt="React icon" />
            </div> */}
        </>

    )
}

export default Habilities