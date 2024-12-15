import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';
import { Button } from "@material-tailwind/react";

const Profile = () => {

    const navigate = useNavigate()
    return (
        <section className='flex flex-col mt-12 sm:mt-20 max-w-4xl mx-auto' data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500">
            <div className='text-left max-w-xl md:max-w-4xl flex'>
                <h3 className='my-2 text-4xl md:text-7xl'>Hola! Mi nombre es <span className='text-violet-400'>Leandro Martínez.</span></h3></div>
            <div className='max-w-lg h-12 sm:min-h-32 md:max-w-4xl text-left text-white typewriterh1'>
                <Typewriter
                    options={{
                        wrapperClassName: 'my-2 text-4xl sm:text-7xl anta-regular',
                        strings: ['Desarrollador Full Stack'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <div
                className="w-3/4 mt-2 text-gray-light">
                <p className='my-2 text-left text-lg md:text-2xl tracking-wide'>
                    Bienvenida/o a mi portafolio! Con experiencia en tecnologías como React, Node, Express y MongoDB. Me apasiona el desarrollo web y la creación de aplicaciones modernas y escalables.
                </p>
            </div>

            <span className="animate animate-bounce inline-flex items-center size-fit py-1 px-2 justify-center my-2 text-sm text-gray-900 bg-green-100 rounded-sm backdrop-blur-3xl whitespace-nowrap">
                Disponible para trabajar
            </span>


            <div className='flex mx-auto py-4 align-middle items-center gap-x-7 w-full'>
                <a href="#contactSection">
                    <Button onClick={() => navigate('#contactSection')} className='bg-violet-400 hover:bg-violet-800 size-fit p-4 rounded-md duration-300'>Contactarme</Button>
                </a>
            </div>
        </section >
    )
}

export default Profile