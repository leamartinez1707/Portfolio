import './about.css'

const About = () => {

    return (
        <div className='flex flex-col about-bg gap-x-2 gap-y-4'>
            <div className='mx-auto max-w-4xl my-2'><h1 className='text-5xl my-2'>
                Sobre mi
            </h1></div>
            <div className="flex flex-wrap">

                <div className="p-4 max-w-md md:max-w-xs mx-auto">
                    <div className="flex rounded-lg h-full  p-8 flex-col info-div">
                        <div className="flex items-center mb-3">
                            <h4 className="text-lg font-medium underline">Info</h4>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">

                            <p>En 2022 inicié mi camino en la programación, cursando Fundamentos de la Programación y Programación Java en Bios.</p>

                        </div>
                    </div>
                </div>
                <div className="p-4 max-w-md md:max-w-xs mx-auto">
                    <div className="flex rounded-lg h-full p-8 flex-col info-div">
                        <div className="flex items-center mb-3">
                            <h4 className="text-lg font-medium underline">Info</h4>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">

                            <p>Recientemente egresado de la Carrera como Desarrollador Full Stack, realizada en Coderhouse.</p>

                        </div>
                    </div>
                </div>
                <div className="p-4 max-w-md md:max-w-xs mx-auto">
                    <div className="flex rounded-lg h-full  p-8 flex-col info-div">
                        <div className="flex items-center mb-3">
                            <h4 className="  text-lg font-medium underline">Info</h4>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">

                            <p>Mi objetivo principal en la actualidad, es adentrarme profesionalmente en el rubro de la tecnología.</p>

                        </div>
                    </div>
                </div>
                <div className="p-4 max-w-md md:max-w-xs mx-auto">
                    <div className="flex rounded-lg h-full  p-8 flex-col info-div">
                        <div className="flex items-center mb-3">
                            <h4 className="  text-lg font-medium underline">Info</h4>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">
                            <p>Desarrollarme como profesional y aportar lo mejor de mi, para el beneficio de la empresa y de los clientes.</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 max-w-md md:max-w-xs mx-auto">
                    <div className="flex rounded-lg h-full  p-8 flex-col info-div">
                        <div className="flex items-center mb-3">
                            <h4 className="text-lg font-medium underline">Info</h4>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">

                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium sapiente est dolor nam! Cupiditate illum molestias?</p>

                        </div>
                    </div>
                </div>
                <div className="p-4 max-w-md md:max-w-xs mx-auto">
                    <div className="flex rounded-lg h-full  p-8 flex-col info-div">
                        <div className="flex items-center mb-3">
                            <h4 className="text-lg font-medium underline">Info</h4>
                        </div>
                        <div className="flex flex-col justify-between flex-grow">

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere obcaecati in fuga fugit iste dolor officia voluptatum tempore odio id!</p>

                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default About