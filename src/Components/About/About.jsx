import './about.css'

const About = () => {

    return (
        <div className='flex flex-col about-bg gap-x-2 gap-y-4 max-w-5xl mx-auto'>
            <div className='my-2'>
                <h1 className='text-5xl my-2'>
                    Sobre mi
                </h1>
            </div>
            <div className="flex flex-wrap gap-2 mx-auto">
                <div className=" max-w-md mx-auto info-div">
                    <p className="p-4" >A fines de 2022 inicié mi camino en la programación, ya que me atraía el poder resolver problemas creando aplicaciones web.</p>
                </div>
                <div className=" max-w-md mx-auto info-div">
                    <p className="p-4" >A fines de 2022 inicié mi camino en la programación, ya que me atraía el poder resolver problemas creando aplicaciones web.</p>
                </div>
                <div className=" max-w-md mx-auto info-div">
                    <p className="p-4" >A fines de 2022 inicié mi camino en la programación, ya que me atraía el poder resolver problemas creando aplicaciones web.</p>
                </div>
                <div className=" max-w-md mx-auto info-div">
                    <p className="p-4" >A fines de 2022 inicié mi camino en la programación, ya que me atraía el poder resolver problemas creando aplicaciones web.</p>
                </div>
            </div>
        </div>

    )
}

export default About