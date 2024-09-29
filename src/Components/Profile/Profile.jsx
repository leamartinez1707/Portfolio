import Typewriter from 'typewriter-effect';
// import './profile.css'
import { useNavigate } from 'react-router-dom';
import { Button } from "@material-tailwind/react";

const Profile = () => {

    const navigate = useNavigate()
    return (
        <section className='flex flex-col mt-10 sm:mt-28 max-w-4xl mx-auto' data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500">
            <div className='text-left max-w-xl md:max-w-4xl flex'>
                <h3 className='my-2 text-sm md:text-2xl'>Hola! Mi nombre es Leandro Martínez.</h3>            </div>
            <div className='max-w-lg h-20 md:max-w-4xl text-left text-violet-400 typewriterh1'>
                <Typewriter
                    options={{
                        wrapperClassName: 'my-2 text-5xl sm:text-6xl anta-regular',
                        strings: ['Desarrollador Full Stack'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <div
                className="w-3/4 mt-12 text-gray-light">
                <p className='my-2 text-left text-sm md:text-xl'>
                    Nacido en Uruguay, actualmente residiendo en Montevideo.
                </p>
                <p className='my-2 text-left text-sm md:text-xl '>
                    Me apasiona crear soluciones innovadoras donde la experiencia del usuario sea intuitiva y accesible.
                </p>
                <p className='my-2 text-left text-sm md:text-xl '>
                    Me motiva aprender nuevas tecnologías y enfrentar desafíos creativos.
                </p>
            </div>
            <a className='className="inline-flex items-center size-fit py-1 px-2 justify-center mb-2 text-sm text-green-800 bg-green-100 rounded-sm cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap"' href="https://www.linkedin.com/in/leandromartinezuy/" target="_blank">
                <p > Disponible para trabajar </p>
            </a>


            <div className='flex mx-auto py-4 align-middle items-center mt-12 gap-x-7 w-full'>
                <Button onClick={() => navigate('/Contacto')} className='bg-violet-400 hover:bg-violet-800 size-fit p-4 rounded-md duration-300'>Contactarme</Button>
            </div>
        </section>
    )
}

export default Profile