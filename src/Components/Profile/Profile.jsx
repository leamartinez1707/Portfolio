import Typewriter from 'typewriter-effect';
import './profile.css'
import { Button } from "@material-tailwind/react";

const Profile = () => {
    return (
        <>
            <section className='profile-info flex flex-col my-4 mx-auto' data-aos="fade-right">
                <div className='max-w-lg md:max-w-4xl mx-auto'>
                    <h3 className='my-2 text-sm md:text-lg'>Hola! Mi nombre es Leandro Martínez.</h3>
                    {/* <h1
                        data-aos="flip-left"
                        data-aos-duration="3000"
                        className='h1-title my-2 text-5xl sm:text-6xl'>Desarrollador Web Full Stack.</h1> */}

                </div>
                <div className='max-w-lg md:max-w-4xl mx-auto typewriterh1'>
                    <Typewriter
                        options={{
                            wrapperClassName: ' my-2 text-5xl sm:text-6xl',
                            strings: ['Desarrollador Web Full Stack'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>

                <div className="initialDescription max-w-4xl mx-auto">
                    <h3 className='my-2 text-sm md:text-lg'>
                        Me apasiona crear soluciones innovadoras donde la experiencia del usuario sea intuitiva y accesible. <br />
                    </h3>
                </div>
                <div className='max-w-lg md:max-w-4xl mx-auto py-4'>
                    <a
                        href="/download/CV.pdf" download>
                        <Button variant="gradient" className="flex items-center gap-3 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-download"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
                            Descargar CV
                        </Button>

                    </a>
                    <img
                        className='img-div w-3/4 max-w-xs sm:w-64 mx-auto justify-center align-center my-4 rounded-full '
                        src="/profile.webp" alt="Imagen de perfil" />
                </div>

            </section>
        </>
    )
}

export default Profile

// https://cdn.icon-icons.com/icons2/107/PNG/512/uruguay_18270.png