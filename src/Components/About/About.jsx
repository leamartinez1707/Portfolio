import './about.css'

const About = () => {

    return (
        <div className='flex flex-col'>
            <div className='text-3xl m-4 max-w-lg mx-auto'><h1>
                Información sobre mi:
            </h1></div>
            <div className="flex flex-wrap">

                <div className="p-4 max-w-md md:max-w-xs mx-auto">
                    <div className="flex rounded-lg h-full p-8 flex-col info-div">
                        <div className="flex items-center mb-3">
                            <h4 className="text-lg font-medium underline">Info</h4>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">

                            <h5>Recientemente egresado de la carrera como Desarrollador Web Full Stack, habiendo cursado en Coderhouse.</h5>

                        </div>
                    </div>
                </div>

                <div className="p-4 max-w-md md:max-w-xs mx-auto">
                    <div className="flex rounded-lg h-full  p-8 flex-col info-div">
                        <div className="flex items-center mb-3">
                            <h4 className="  text-lg font-medium underline">Info</h4>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">

                            <h5>Me apasiona poder crear soluciones innovadoras, que ayuden a resolver los problemas expuestos.</h5>

                        </div>
                    </div>
                </div>
                <div className="p-4 max-w-md md:max-w-xs mx-auto">
                    <div className="flex rounded-lg h-full  p-8 flex-col info-div">
                        <div className="flex items-center mb-3">
                            <h4 className="  text-lg font-medium underline">Info</h4>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">

                            <h5>Mi objetivo principal en la actualidad, es adentrarme profesionalmente en el rubro de la tecnología.</h5>

                        </div>
                    </div>
                </div>
                <div className="p-4 max-w-md md:max-w-xs mx-auto">
                    <div className="flex rounded-lg h-full  p-8 flex-col info-div">
                        <div className="flex items-center mb-3">
                            <h4 className="  text-lg font-medium underline">Info</h4>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <h5>Desarrollarme como profesional y aportar lo mejor de mi, para el beneficio de la empresa y de los clientes.</h5>
                        </div>
                    </div>
                </div>
                <div className="p-4 max-w-md md:max-w-xs mx-auto">
                    <div className="flex rounded-lg h-full  p-8 flex-col info-div">
                        <div className="flex items-center mb-3">
                            <h4 className="  text-lg font-medium underline">Info</h4>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">

                            <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium sapiente est dolor nam! Cupiditate illum molestias amet illo cumque repellendus ipsam perferendis saepe autem ullam?</h5>

                        </div>
                    </div>
                </div>
                <div className="p-4 max-w-md md:max-w-xs mx-auto">
                    <div className="flex rounded-lg h-full  p-8 flex-col info-div">
                        <div className="flex items-center mb-3">
                            <h4 className="  text-lg font-medium underline">Info</h4>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">

                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere obcaecati in fuga fugit iste dolor officia voluptatum tempore odio id!</h5>

                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default About