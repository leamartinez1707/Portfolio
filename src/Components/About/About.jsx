import './about.css'

const About = () => {

    return (
        <div className='flex flex-col about-bg gap-x-2 gap-y-4'>
            <div className='mx-auto max-w-4xl my-2'><h1 className='text-5xl my-2'>
                Sobre mi
            </h1></div>
            <div className="flex flex-wrap">

                <div className="p-4 w-full sm:w-80 max-w-md md:max-w-xs mx-auto">
                    <div className="flex rounded-lg h-full  p-8 flex-col info-div">
                        <div className="flex items-center mb-3">
                            <h4 className="text-lg font-medium underline">Info</h4>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">

                            <p>A fines de 2022 inicié mi camino en la programación, ya que me atraía el poder resolver problemas creando aplicaciones web.</p>

                        </div>
                    </div>
                </div>
                <div className="p-4 w-full sm:w-80 max-w-md md:max-w-xs mx-auto">
                    <div className="flex rounded-lg h-full p-8 flex-col info-div">
                        <div className="flex items-center mb-3">
                            <h4 className="text-lg font-medium underline">Info</h4>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">

                            <p>Recientemente egresado de la Carrera como Desarrollador Full Stack, realizada en Coderhouse en el año 2023/2024.</p>

                        </div>
                    </div>
                </div>
                <div className="p-4 w-full sm:w-80 max-w-md md:max-w-xs mx-auto">
                    <div className="flex rounded-lg h-full  p-8 flex-col info-div">
                        <div className="flex items-center mb-3">
                            <h4 className="  text-lg font-medium underline">Info</h4>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">

                            <p>Mi objetivo principal en la actualidad, es adentrarme profesionalmente en el rubro de la tecnología. De momento no he trabajado para ninguna empresa, así que diariamente sigo estudiando para pulir todo lo aprendido.</p>

                        </div>
                    </div>
                </div>
                <div className="p-4 w-full sm:w-80 max-w-md md:max-w-xs mx-auto">
                    <div className="flex rounded-lg h-full  p-8 flex-col info-div">
                        <div className="flex items-center mb-3">
                            <h4 className="  text-lg font-medium underline">Info</h4>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <p>Busco desarrollarme como profesional y aportar lo mejor de mi, para el beneficio de la empresa y de los clientes.</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 w-full sm:w-80 max-w-md md:max-w-xs mx-auto">
                    <div className="flex rounded-lg h-full  p-8 flex-col info-div">
                        <div className="flex items-center mb-3">
                            <h4 className="  text-lg font-medium underline">Info</h4>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <p>Aspiro a ingresar en una empresa donde pueda seguir adquiriendo nuevas habilidades, nutrirme de mi equipo y aportar valor constantemente.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default About