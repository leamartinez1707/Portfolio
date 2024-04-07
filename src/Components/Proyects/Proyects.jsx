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
                <div
                    className="sm:max-w-md lg:max-w-3xl mx-auto block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="rounded-t-lg "
                            src="/pro1.webp"
                            alt="" />
                    </div>
                    <div className="p-2 md:p-10 flex flex-col ">
                        <h4
                            className="text-xl leading-tight font-bold">
                            E-commerce | React & Firebase
                        </h4>
                        <p className="py-4 text-base">
                            En nuestro proyecto final de React, creamos un E-commerce donde la consigna era poder comprar los productos seleccionados. Contando con un carrito y un formulario de compra.
                            Aprendiendo así las bases de este Framework.
                        </p>
                        <a href="https://react-proyect2023.vercel.app/" className="btn-ver mx-auto text-lg p-2 h-12 w-48 overflow-hidden rounded-lg  text-white shadow" target="blank">VER
                        </a>
                    </div>
                </div>
                <div
                    className="sm:max-w-md lg:max-w-3xl mx-auto block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="rounded-t-lg "
                            src="/proyect1.webp"
                            alt="" />
                    </div>
                    <div className="p-2 md:p-10 flex flex-col ">
                        <h4
                            className="text-xl leading-tight font-bold">
                            API REST | Express & Handlebars
                        </h4>
                        <p className="py-4 text-base">
                            Proyecto final del curso Backend. Creamos una API REST funcional, utilizando vistas con Handlebars.js. Permitiendo a los usuarios poder realizar compras, con pasarela de pago STRIPE. El usuario ADMIN puede realizar CRUD de productos y editar o eliminar usuarios. Documentación de la API con Swagger.
                        </p>
                        <a href="https://elemshop.up.railway.app/" className="btn-ver mx-auto text-lg p-2 h-12 w-48 overflow-hidden rounded-lg  text-white shadow" target="blank">VER
                        </a>
                    </div>
                </div>
                <div
                    className="sm:max-w-md lg:max-w-3xl mx-auto block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="rounded-t-lg "
                            src="/617shots_so.webp"
                            alt="" />
                    </div>
                    <div className="p-2 md:p-10 flex flex-col ">
                        <h4
                            className="text-xl leading-tight font-bold">
                            APP Clima | React & Tailwind
                        </h4>
                        <p className="py-4 text-base">
                            Mini proyecto de una App del clima, donde se puede consultar el tiempo en cualquier ciudad del mundo. <br />
                            La idea de este proyecto es prácticar React y su ecosistema. Se utilizó Tailwind para el diseño. <br />
                            Se le sumaran funciones con el tiempo para seguir desarrollando la App.
                        </p>
                        <a href="https://appclima-lemon.vercel.app/" className="btn-ver mx-auto text-lg p-2 h-12 w-48 overflow-hidden rounded-lg  text-white shadow" target="blank">VER
                        </a>
                    </div>
                </div>
                <div
                    className="sm:max-w-md lg:max-w-3xl mx-auto block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-white">
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                        <img
                            className="rounded-t-lg "
                            src="/mirestaurante.webp"
                            alt="" />
                    </div>
                    <div className="p-2 md:p-10 flex flex-col ">
                        <h4
                            className="text-xl leading-tight font-bold">
                            Mi Restaurante | React & Tailwind
                        </h4>
                        <p className="py-4 text-base">
                            Proyecto de una aplicación web, donde se simula un restaurante y el empleado puede trabajar con la carta, agregando productos a la lista, y la propina dejada por su cliente, para luego sumar el total y enviar el ticket. <br />
                            La idea de este proyecto continuar con la práctica de React, sumando TypeScript para aprender sus conceptos básicos. Se utilizó Tailwind para el diseño. <br />
                            Se le sumaran funciones con el tiempo para seguir desarrollando la App.
                        </p>
                        <a href="https://mirestauranteuy.netlify.app/" className="btn-ver mx-auto text-lg p-2 h-12 w-48 overflow-hidden rounded-lg  text-white shadow" target="blank">VER
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Proyects