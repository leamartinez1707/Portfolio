import { CarouselComponent } from '../Carousel/CarouselComponent'
import './proyects.css'


const Proyects = () => {

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-x-2 gap-y-4">
                <div className='mx-auto max-w-4xl my-2'>
                    <h1 className='text-5xl my-2'>Proyectos educativos</h1>
                    <h2 className='text-xl p-4 text-pretty'>A lo largo de mi camino como Desarrollador Web, he creado varios proyectos que me han ayudado a pulir mis conocimientos, conocer nuevas tecnologías e impulsarme en nuevas ideas.</h2>
                    <h2 className='text-xl p-4 text-pretty'>Gracias a ello, he aprendido mucho en el ámbito de Frontend y Backend, agregandole dinamismo y funcionalidades a las webs realizadas, uniendo ambos Stacks.</h2>
                </div>
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
                    technologies='#EXPRESS #HANDLEBARS #MONGODB #STRIPE #SWAGGER #PASSPORTJS #MOCHA&CHAI #SOCKET.IO '
                    weblink='https://elemshop.up.railway.app/'
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
                    technologies='#VITE #REACT #TYPESCRIPT #TAILWIND '
                    weblink='https://mirestauranteuy.netlify.app/'
                    github='https://github.com/leamartinez1707/mirestaurante'
                />
            </div>
        </>
    )
}


export default Proyects