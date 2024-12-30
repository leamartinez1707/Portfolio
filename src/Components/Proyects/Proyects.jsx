import { CarouselComponent } from '../Carousel/CarouselComponent'
import './proyects.css'


const Proyects = () => {

    return (
        <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            id='proyectsSection'>
            <div
                className="grid grid-cols-1 md:grid-cols-1 gap-x-2 gap-y-4 mt-8 md:mt-12">

                <div className='max-w-4xl my-2 text-left'>
                    <h1 className="my-2 sm:my-4 text-4xl sm:text-5xl cursor-pointer uppercase text-left anta-regular text-titles">Proyectos</h1>
                </div>

                <div className='gap-y-4 md:gap-y-12 flex flex-col'>
                    <CarouselComponent
                        img3='/proyects/proyect5_2.png'
                        img1='/proyects/proyect5_1.png'
                        img2='/proyects/proyect5_3.png'
                        alt1='Primera imagen del proyecto número cinco'
                        alt2='Segunda imagen del proyecto número cinco'
                        alt3='Tercera imagen del proyecto número cinco'
                        title='SaludNet | Telemedicina'
                        description='SaludNet es una plataforma digital de telemedicina diseñada para simplificar y optimizar el acceso a servicios de salud. Permite a los pacientes recibir atención médica a distancia y a los proveedores administrar consultas de manera más eficiente. 
                        Con funcionalidades avanzadas para programar citas, emitir órdenes y recetas digitales, acceder a historiales clínicos y realizar videoconsultas, SaludNet mejora la experiencia tanto para los pacientes como para los profesionales médicos, y también facilita la administración de servicios.'
                        technologies={['#NODE', '#EXPRESS', '#JWT', '#REACT', '#MONGODB', '#MONGOOSE', '#TAILWIND', '#VERCEL']}
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
                        title='E-commerce Full Stack'
                        description='Proyecto final del curso Programación Backend, Coderhouse. Creamos una API REST funcional, utilizando vistas con Handlebars.js. Permitiendo a los usuarios poder realizar compras, con pasarela de pago STRIPE. El usuario ADMIN puede realizar CRUD de productos y editar o eliminar usuarios. Documentación de la API con Swagger.'
                        technologies={['#EXPRESS', '#HANDLEBARS', '#TAILWIND', '#MONGODB', '#STRIPE', '#SWAGGER', '#PASSPORTJS', '#MOCHA&CHAI', '#SOCKET.IO']}
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
                        title='UpTask | Administrador de Proyectos'
                        description='Aplicación de tareas, incluyendo un sistema de autenticación. Se utilizó Express para el Backend y Mongoose para conectarlo con la base de datos MongoDB. React para el Frontend y fue estilizado con Tailwind, Chakra, Headlessui y se implemenentó Drag and drop con DND Kit. El proyecto utiliza TypeScript en ambos stacks y React Query para el manejo de datos.'
                        technologies={['#TYPESCRIPT', '#EXPRESS', '#JWT', '#REACT', '#MONGODB', '#MONGOOSE', '#REACTQUERY', '#TAILWIND']}
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
                        title='E-commerce Frontend'
                        description='En nuestro proyecto final de React en Coderhouse, creamos un E-commerce donde la consigna era poder comprar los productos seleccionados. Contando con un carrito y un formulario de compra. Alojando los datos en Firebase.
                    Aprendiendo así las bases de esta biblioteca.'
                        technologies={['#HTML', '#CSS', '#JAVSCRIPT', '#REACT', '#FIREBASE']}
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
                        title='Cripto Status'
                        description='Información sobre criptomonedas en tiempo real, conectado a CryptoCompare API. La idea de este proyecto fue seguir practicando con React, sumando TypeScript para aprender sus conceptos básicos. Se utilizó Tailwind para el diseño, Zod para la validación de datos y Zustand para el manejo de estados.'
                        technologies={['#REACT', '#TYPESCRIPT', '#ZOD', '#ZUSTAND', '#TAILWIND']}
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
                        title='Mi Restaurante'
                        description='Simula la gestión de un restaurante. El empleado puede interactuar con la carta, añadir productos a la lista de pedidos, calcular la propina del cliente y generar el total para emitir un ticket.
Este proyecto tiene como objetivo reforzar mis habilidades en React y profundizar en los conceptos básicos de TypeScript. Además, TailwindCSS se utilizó para crear un diseño limpio y responsivo.
Planeo ampliar sus funcionalidades en el futuro para seguir desarrollando y mejorando esta aplicación, explorando nuevas tecnologías y casos de uso.'
                        technologies={['#VITE', '#REACT', '#TAILWIND', '#JWT', '#NOTISTACK', '#HEADLESSUI', '#TYPESCRIPT']}
                        weblink='https://mirestauranteuy.netlify.app/'
                        github='https://github.com/leamartinez1707/mirestaurante'
                    />
                </div>
            </div>
        </div>
    )
}


export default Proyects