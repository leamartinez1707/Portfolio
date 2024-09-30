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
                className="grid grid-cols-1 md:grid-cols-1 gap-x-2 gap-y-4 mt-12 md:mt-24">

                <div className='mx-auto max-w-4xl my-2 text-left'>
                    <h1 className="my-2 sm:my-4 text-4xl sm:text-5xl cursor-pointer uppercase text-left anta-regular text-titles">Proyectos</h1>
                    <p className='text-xl py-4 text-pretty'>A lo largo de mi camino como Desarrollador Web, he creado varios proyectos que me han ayudado a pulir mis conocimientos, conocer nuevas tecnologías e impulsarme en nuevas ideas.</p>
                    <p className='text-xl py-4 text-pretty'>Gracias a ello, he aprendido mucho en el ámbito de Frontend y Backend, agregandole dinamismo y funcionalidades a las webs realizadas, uniendo ambos Stacks.</p>
                </div>

                <div className='gap-y-4 flex flex-col'>
                    <CarouselComponent
                        img3='/proyects/proyect5_2.png'
                        img1='/proyects/proyect5_1.png'
                        img2='/proyects/proyect5_3.png'
                        alt1='Primera imagen del proyecto número cinco'
                        alt2='Segunda imagen del proyecto número cinco'
                        alt3='Tercera imagen del proyecto número cinco'
                        title='SaludNet | Telemedicina | Express | React | MongoDB'
                        description='SaludNet es una plataforma digital de telemedicina diseñada para simplificar y optimizar el acceso a servicios de salud. Permite a los pacientes recibir atención médica a distancia y a los proveedores administrar consultas de manera más eficiente. Con funcionalidades avanzadas para programar citas, emitir órdenes y recetas digitales, acceder a historiales clínicos y realizar videoconsultas, SaludNet mejora la experiencia tanto para los pacientes como para los profesionales médicos, y también facilita la administración de servicios.'
                        technologies='#NODE #EXPRESS #JWT #REACT #MONGODB #MONGOOSE #TAILWIND #VERCEL'
                        weblink='https://c20-37-n-node-react.vercel.app/'
                        github='https://github.com/No-Country-simulation/c20-37-n-node-react'
                    />
                    <CarouselComponent
                        img1='/proyects/proyect1_1.webp'
                        img2='/proyects/proyect1_2.webp'
                        img3='/proyects/proyect1_3.webp'
                        alt="Primera imágen del proyecto número uno"
                        alt2="Segunda imágen del proyecto número uno"
                        alt3="Tercera imágen del proyecto número uno"
                        title='E-commerce | React & Firebase'
                        description='En nuestro proyecto final de React en Coderhouse, creamos un E-commerce donde la consigna era poder comprar los productos seleccionados. Contando con un carrito y un formulario de compra.
                    Aprendiendo así las bases de esta biblioteca.'
                        technologies='#HTML #CSS #JAVSCRIPT #REACT #FIREBASE'
                        weblink='https://react-proyect2023.vercel.app/'
                        github='https://github.com/leamartinez1707/reactProyect2023'
                    />
                    <CarouselComponent
                        img1='/proyects/proyect2_1.webp'
                        img2='/proyects/proyect2_2.webp'
                        img3='/proyects/proyect2_3.webp'
                        alt1='Primera imagen del proyecto número tres'
                        alt2='Segunda imagen del proyecto número tres'
                        alt3='Tercera imagen del proyecto número tres'
                        title='API REST | Express & Handlebars'
                        description='Proyecto final del curso Programación Backend, Coderhouse. Creamos una API REST funcional, utilizando vistas con Handlebars.js. Permitiendo a los usuarios poder realizar compras, con pasarela de pago STRIPE. El usuario ADMIN puede realizar CRUD de productos y editar o eliminar usuarios. Documentación de la API con Swagger.'
                        technologies='#EXPRESS #HANDLEBARS #TAILWIND #MONGODB #STRIPE #SWAGGER #PASSPORTJS #MOCHA&CHAI #SOCKET.IO '
                        weblink='https://backend-47290.onrender.com/'
                        github='https://github.com/leamartinez1707/backend-47290'
                    />
                    <CarouselComponent
                        img1='/proyects/proyect4_1.webp'
                        img3='/proyects/proyect4_5.webp'
                        img2='/proyects/proyect4_6.webp'
                        alt1='Primera imagen del proyecto número cinco'
                        alt2='Segunda imagen del proyecto número cinco'
                        alt3='Tercera imagen del proyecto número cinco'
                        title='To Do App | NestJS | React | MySQL | Prisma'
                        description='Prueba técnica para entevista. Creación de una aplicación de tareas, incluyendo un sistema de autenticación, donde cada usuario puede crear, editar, eliminar y marcar como completada una tarea. Se utilizó NestJS para el Backend y Prisma para conectarlo con la base de datos. React para el Frontend y MySQL para la base de datos. Estilizado con Tailwind y Css. El proyecto utiliza Turborepo para unificar los paquetes de Frontend y Backend y ejecutar ambos desde una misma terminal.'
                        technologies='#NEST #JWT #REACT #MYSQL #PRISMA #CSS #TAILWIND'
                        weblink='https://backend-47290.onrender.com/'
                        github='https://github.com/leamartinez1707/backend-47290'
                    />

                    <CarouselComponent
                        img1='/proyects/proyect6_1.png'
                        img3='/proyects/proyect6_2.png'
                        img2='/proyects/proyect6_3.png'
                        alt1='Primera imagen del proyecto número seis'
                        alt2='Segunda imagen del proyecto número seis'
                        alt3='Tercera imagen del proyecto número seis'
                        title='Cripto App | React & TypeScript'
                        description='Proyecto de una aplicación web, donde se simula un sitio de criptomonedas, con la posibilidad de ver el precio de las mismas en tiempo real. La idea de este proyecto fue seguir practicando con React, sumando TypeScript para aprender sus conceptos básicos. Se utilizó Tailwind para el diseño, Zod para la validación de datos y Zustand para el manejo de estados.'
                        technologies='#REACT #TYPESCRIPT #ZOD #ZUSTAND #TAILWIND'
                        weblink='https://criptomoneda-divisas.netlify.app/'
                        github='https://github.com/leamartinez1707/cripto-status'
                    />

                    <CarouselComponent
                        img1='/proyects/proyect7_1.png'
                        img3='/proyects/proyect7_2.png'
                        img2='/proyects/proyect7_3.png'
                        alt1='Primera imagen del proyecto número cuatro'
                        alt2='Segunda imagen del proyecto número cuatro'
                        alt3='Tercera imagen del proyecto número cuatro'
                        title='App de clima | React & TypeScript'
                        description='Prueba técnica para entevista. Creación de una aplicación de tareas, incluyendo un sistema de autenticación, donde cada usuario puede crear, editar, eliminar y marcar como completada una tarea. Se utilizó NestJS para el Backend y Prisma para conectarlo con la base de datos. React para el Frontend y MySQL para la base de datos. Estilizado con Tailwind y Css. El proyecto utiliza Turborepo para unificar los paquetes de Frontend y Backend y ejecutar ambos desde una misma terminal.'
                        technologies='#NEST #JWT #REACT #MYSQL #PRISMA #CSS #TAILWIND'
                        weblink='https://backend-47290.onrender.com/'
                        github='https://github.com/leamartinez1707/backend-47290'
                    />
                    <CarouselComponent
                        img1='/proyects/proyect3_1.webp'
                        img2='/proyects/proyect3_2.webp'
                        img3='/proyects/proyect3_3.webp'
                        alt="Primera imagen del proyecto número dos"
                        al2="Segunda imagen del proyecto número dos"
                        alt3="Tercera imagen del proyecto número dos"
                        title='Mi Restaurante | React & Tailwind'
                        description='Proyecto de una aplicación web, donde se simula un restaurante y el empleado puede trabajar con la carta, agregando productos a la lista, y la propina dejada por su cliente, para luego sumar el total y enviar el ticket.
                        La idea de este proyecto continuar con la práctica de React, sumando TypeScript para aprender sus conceptos básicos. Se utilizó Tailwind para el diseño.
                        Se le sumaran funciones con el tiempo para seguir desarrollando la App.'
                        technologies='#VITE #REACT #TYPESCRIPT #TAILWIND'
                        weblink='https://mirestauranteuy.netlify.app/'
                        github='https://github.com/leamartinez1707/mirestaurante'
                    />
                </div>
            </div>
        </div>
    )
}


export default Proyects