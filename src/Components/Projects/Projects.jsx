import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { CarouselComponent } from '../Carousel/CarouselComponent'
import ProjectModal from '../ProjectModal/ProjectModal'
import './projects.css'


const Projects = () => {

    const [openModal, setOpenModal] = useState(false);
    const [modalObject, setModalObject] = useState({
        title: '',
        description: '',
        descriptionInfo: ''
    })

    const handleOpenModal = (title, description, descriptionInfo) => {
        setOpenModal(true)
        setModalObject({
            title: title,
            description: description,
            descriptionInfo: descriptionInfo
        })
    }
    const handleCloseModal = () => {
        setOpenModal(false)
        setModalObject({
            title: '',
            description: '',
            descriptionInfo: ''
        })
    }

    const { t } = useTranslation()

    return (
        <div
            data-aos="fade-left"
            data-aos-anchor="example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            id='projectsSection'>
            <div
                className="grid grid-cols-1 md:grid-cols-1 gap-x-2 gap-y-4 mt-8 md:mt-12">

                <div className='max-w-4xl my-2 text-left'>
                    <h1 className="my-2 sm:my-4 text-4xl sm:text-5xl cursor-pointer uppercase text-left anta-regular text-titles">{t('projects')}</h1>
                </div>

                <div className='gap-y-4 md:gap-y-12 flex flex-col'>
                    <CarouselComponent
                        img3='/projects/project5_2.png'
                        img1='/projects/project5_1.png'
                        img2='/projects/project5_3.png'
                        alt1='Primera imagen del proyecto número cinco'
                        alt2='Segunda imagen del proyecto número cinco'
                        alt3='Tercera imagen del proyecto número cinco'
                        title='saludnet-title'
                        description='saludnet-description'
                        descriptionInfo='saludnet-description-info'
                        technologies={['NODE', 'EXPRESS', 'JWT', 'REACT', 'MONGODB', 'MONGOOSE', 'TAILWIND', 'VERCEL']}
                        weblink='https://saludnet.vercel.app/'
                        github='https://github.com/leamartinez1707/c20-37-n-node-react.'
                        handleOpenModal={handleOpenModal}
                        handleCloseModal={handleCloseModal}
                        modalObject={modalObject}
                        openModal={openModal}
                    />
                    <CarouselComponent
                        img1='/projects/project8_1.webp'
                        img3='/projects/project8_3.webp'
                        img2='/projects/project8_2.webp'
                        alt1='Primera imagen del proyecto número cinco'
                        alt2='Segunda imagen del proyecto número cinco'
                        alt3='Tercera imagen del proyecto número cinco'
                        title='uptask-title'
                        description='uptask-description'
                        descriptionInfo='uptask-description-info'
                        technologies={['TYPESCRIPT', 'EXPRESS', 'JWT', 'REACT', 'MONGODB', 'MONGOOSE', 'REACT QUERY', 'TAILWIND']}
                        weblink='https://uptask-projectmanagement-phi.vercel.app/auth/login'
                        github='https://github.com/leamartinez1707/mytasks-frontend'
                        handleOpenModal={handleOpenModal}
                        handleCloseModal={handleCloseModal}
                        modalObject={modalObject}
                        openModal={openModal}
                    />
                    <CarouselComponent
                        img1='/projects/project6_1.png'
                        img3='/projects/project6_2.png'
                        img2='/projects/project6_3.png'
                        alt1='Primera imagen del proyecto número seis'
                        alt2='Segunda imagen del proyecto número seis'
                        alt3='Tercera imagen del proyecto número seis'
                        title='cryptostatus-title'
                        description='cryptostatus-description'
                        descriptionInfo='cryptostatus-description-info'
                        technologies={['REACT', 'TYPESCRIPT', 'ZOD', 'ZUSTAND', 'TAILWIND']}
                        weblink='https://criptomoneda-divisas.netlify.app/'
                        github='https://github.com/leamartinez1707/cripto-status'
                        handleOpenModal={handleOpenModal}
                        handleCloseModal={handleCloseModal}
                        modalObject={modalObject}
                        openModal={openModal}
                    />
                    <CarouselComponent
                        img1='/projects/project3_1.webp'
                        img2='/projects/project3_2.webp'
                        img3='/projects/project3_3.webp'
                        alt="Primera imagen del proyecto número dos"
                        al2="Segunda imagen del proyecto número dos"
                        alt3="Tercera imagen del proyecto número dos"
                        title='myrestaurant-title'
                        description='myrestaurant-description'
                        descriptionInfo='myrestaurant-description-info'
                        technologies={['VITE', 'REACT', 'TAILWIND', 'JWT', 'NOTISTACK', 'HEADLESSUI', 'TYPESCRIPT']}
                        weblink='https://mirestauranteuy.netlify.app/'
                        github='https://github.com/leamartinez1707/mirestaurante'
                        handleOpenModal={handleOpenModal}
                        handleCloseModal={handleCloseModal}
                        modalObject={modalObject}
                        openModal={openModal}
                    />
                </div>
            </div>
            <ProjectModal openModal={openModal} setOpenModal={handleOpenModal} setCloseModal={handleCloseModal} modalObject={modalObject} />
        </div>
    )
}
export default Projects