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
            id='projectsSection'>
            <div
                className="grid grid-cols-1 md:grid-cols-1 gap-x-2 gap-y-4 mt-8 md:mt-12">

                <div className='max-w-4xl my-2 text-left'>
                    <h1 className="my-2 sm:my-4 text-4xl sm:text-5xl cursor-pointer uppercase text-left anta-regular text-titles">{t('projects')}</h1>
                </div>

                <div className='gap-y-4 md:gap-y-12 flex flex-col'>
                    <CarouselComponent
                        img3='/projects/aasa_1.png'
                        img1='/projects/aasa_2.png'
                        img2='/projects/aasa_3.png'
                        alt1='Primera imagen del proyecto número cinco'
                        alt2='Segunda imagen del proyecto número cinco'
                        alt3='Tercera imagen del proyecto número cinco'
                        title='aasa-title'
                        description='aasa-description'
                        descriptionInfo='aasa-description-info'
                        technologies={['NODE', 'EXPRESS', 'JWT', 'REACT', 'MONGODB', 'MONGOOSE', 'TAILWIND', 'VERCEL', 'RENDER', 'WSP-API']}
                        weblink='https://avelinoacevedo.com.uy/'
                        github='#'
                        handleOpenModal={handleOpenModal}
                        handleCloseModal={handleCloseModal}
                        modalObject={modalObject}
                        openModal={openModal}
                    />
                    <CarouselComponent
                        img1='/projects/todomuebles_1.png'
                        img2='/projects/todomuebles_2.png'
                        img3='/projects/todomuebles_3.png'
                        alt="Primera imagen del proyecto número dos"
                        al2="Segunda imagen del proyecto número dos"
                        alt3="Tercera imagen del proyecto número dos"
                        title='todomuebles-title'
                        description='todomuebles-description'
                        descriptionInfo='todomuebles-description-info'
                        technologies={['NEXT', 'TAILWIND', 'TYPESCRIPT', 'HEADLESSUI', 'NODEMAILER']}
                        weblink='https://todomueblesuy.vercel.app/home'
                        github='#'
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
                </div>
            </div>
            <ProjectModal openModal={openModal} setOpenModal={handleOpenModal} setCloseModal={handleCloseModal} modalObject={modalObject} />
        </div>
    )
}
export default Projects