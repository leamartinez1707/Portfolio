const Habilities = () => {
    return (
        <>
            <h3 className="my-2 sm:my-4 text-3xl sm:text-4xl underline p-2 tec-title cursor-pointer">Mis principales tecnologías</h3>
            <div className="habilities-icons grid gap-4 grid-cols-3 sm:flex sm:flex-wrap lg:grid-cols-6 justify-center">
                <div className="mx-4"><img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=html" alt="HTML icon" /><h2>HTML</h2></div>
                <div className="mx-4"><img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=css" alt="Css icon" /><h2>CSS</h2></div>
                <div className="mx-4">
                    <img className="icon-habilities py-2 hover:cursor-pointer mx-auto mx-auto" src="https://skillicons.dev/icons?i=js" alt="Javascript icon" /><h2>JS</h2></div>
                <div className="mx-4"><img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=nodejs" alt="React icon" /><h2>NODE.JS</h2></div>
                <div className="mx-4"><img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=mongodb" alt="React icon" /><h2>MONGO</h2></div>
                <div className="mx-4">
                    <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=git" alt="React icon" />
                    <h2>
                        GIT
                    </h2>
                </div>
                <div className="mx-4">
                    <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=github" alt="React icon" />
                    <h2>
                        GITHUB
                    </h2>
                </div>
                <div className="mx-4">
                    <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=vite" alt="React icon" />
                    <h2>
                        VITE
                    </h2>
                </div>
                <div className="mx-4">
                    <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=nextjs" alt="React icon" />
                    <h2>
                        NEXT.JS
                    </h2>
                </div>
                <div className="mx-4">
                    <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=express" alt="React icon" />
                    <h2 className="mx-auto">
                        EXPRESS
                    </h2>
                </div>
                <div className="mx-4">
                    <img className="icon-habilities py-2 hover:cursor-pointer mx-auto" src="https://skillicons.dev/icons?i=react" alt="React icon" />
                    <h2>
                        REACT
                    </h2>
                </div>
            </div>
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