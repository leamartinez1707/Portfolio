import { useTranslation } from 'react-i18next'
import { CarouselComponent } from '../Carousel/CarouselComponent'
import './proyects.css'


const Proyects = () => {

    const {t} = useTranslation()

    return (
        <div
            data-aos="fade-left"
            data-aos-anchor="example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            id='proyectsSection'>
            <div
                className="grid grid-cols-1 md:grid-cols-1 gap-x-2 gap-y-4 mt-8 md:mt-12">

                <div className='max-w-4xl my-2 text-left'>
                    <h1 className="my-2 sm:my-4 text-4xl sm:text-5xl cursor-pointer uppercase text-left anta-regular text-titles">{t('projects')}</h1>
                </div>

                <div className='gap-y-4 md:gap-y-12 flex flex-col'>
                    <CarouselComponent
                        img3='/proyects/proyect5_2.png'
                        img1='/proyects/proyect5_1.png'
                        img2='/proyects/proyect5_3.png'
                        alt1='Primera imagen del proyecto número cinco'
                        alt2='Segunda imagen del proyecto número cinco'
                        alt3='Tercera imagen del proyecto número cinco'
                        title='saludnet-title'
                        description='saludnet-description'
                        technologies={['NODE', 'EXPRESS', 'JWT', 'REACT', 'MONGODB', 'MONGOOSE', 'TAILWIND', 'VERCEL']}
                        weblink='https://c20-37-n-node-react.vercel.app/'
                        github='https://github.com/No-Country-simulation/c20-37-n-node-react'
                    />
                    <CarouselComponent
                        img1='/proyects/proyect2_1.webp'
                        img2='/proyects/proyect2_2.webp'
                        img3='/proyects/proyect2_3.webp'
                        alt1='Primera imagen del proyecto número tres'
                        alt2='Segunda imagen del proyecto número tres'
                        alt3='Tercera imagen del proyecto número tres'
                        title='ecommerce-fullstack-title'
                        description='ecommerce-fullstack-description'
                        technologies={['EXPRESS', 'HANDLEBARS', 'TAILWIND', 'MONGODB', 'STRIPE', 'SWAGGER', 'PASSPORTJS', 'MOCHA&CHAI', 'SOCKET.IO']}
                        weblink='https://backend-47290.onrender.com/'
                        github='https://github.com/leamartinez1707/backend-47290'
                    />
                    <CarouselComponent
                        img1='/proyects/project8_1.webp'
                        img3='/proyects/project8_3.webp'
                        img2='/proyects/project8_2.webp'
                        alt1='Primera imagen del proyecto número cinco'
                        alt2='Segunda imagen del proyecto número cinco'
                        alt3='Tercera imagen del proyecto número cinco'
                        title='uptask-title'
                        description='uptask-description'
                        technologies={['TYPESCRIPT', 'EXPRESS', 'JWT', 'REACT', 'MONGODB', 'MONGOOSE', 'REACT QUERY', 'TAILWIND']}
                        weblink='https://mytasks-phi.vercel.app/'
                        github='https://github.com/leamartinez1707/mytasks-frontend'
                    />
                    <CarouselComponent
                        img1='/proyects/proyect1_1.webp'
                        img2='/proyects/proyect1_2.webp'
                        img3='/proyects/proyect1_3.webp'
                        alt="Primera imágen del proyecto número uno"
                        alt2="Segunda imágen del proyecto número uno"
                        alt3="Tercera imágen del proyecto número uno"
                        title='ecommerce-frontend-title'
                        description='ecommerce-frontend-description'
                        technologies={['HTML', 'CSS', 'JAVSCRIPT', 'REACT', 'FIREBASE']}
                        weblink='https://react-proyect2023.vercel.app/'
                        github='https://github.com/leamartinez1707/reactProyect2023'
                    />
                    <CarouselComponent
                        img1='/proyects/proyect6_1.png'
                        img3='/proyects/proyect6_2.png'
                        img2='/proyects/proyect6_3.png'
                        alt1='Primera imagen del proyecto número seis'
                        alt2='Segunda imagen del proyecto número seis'
                        alt3='Tercera imagen del proyecto número seis'
                        title='cryptostatus-title'
                        description='cryptostatus-description'
                        technologies={['REACT', 'TYPESCRIPT', 'ZOD', 'ZUSTAND', 'TAILWIND']}
                        weblink='https://criptomoneda-divisas.netlify.app/'
                        github='https://github.com/leamartinez1707/cripto-status'
                    />
                    <CarouselComponent
                        img1='/proyects/proyect3_1.webp'
                        img2='/proyects/proyect3_2.webp'
                        img3='/proyects/proyect3_3.webp'
                        alt="Primera imagen del proyecto número dos"
                        al2="Segunda imagen del proyecto número dos"
                        alt3="Tercera imagen del proyecto número dos"
                        title='myrestaurant-title'
                        description='myrestaurant-description'
                        technologies={['VITE', 'REACT', 'TAILWIND', 'JWT', 'NOTISTACK', 'HEADLESSUI', 'TYPESCRIPT']}
                        weblink='https://mirestauranteuy.netlify.app/'
                        github='https://github.com/leamartinez1707/mirestaurante'
                    />
                </div>
            </div>
        </div>
    )
}


export default Proyects