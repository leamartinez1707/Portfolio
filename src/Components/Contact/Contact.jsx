import { useTranslation } from "react-i18next"
import { ImWhatsapp } from "react-icons/im"

const Contact = () => {

    const { t } = useTranslation()
    return (
        <section
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            id="contactSection"
            className='mx-auto max-w-4xl my-2 mt-12 md:mt-24'>
            <div className="title">
                <h1 className="my-2 sm:my-4 text-4xl sm:text-5xl cursor-pointer uppercase text-left anta-regular text-titles">{t('contact')}</h1>
            </div>
            <div className="grid sm:grid-cols-1 max-w-full sm:max-w-lg items-center gap-4 sm:py-8 my-6 contact-info text-left">
                <h2 className="text-3xl font-extrabold">{t('contact-letstalk')}</h2>
                <p className="text-md text-gray-50 mt-3">{t('contact-interested')}<br /> {t('contact-interested-send')}</p>
                <div className="mt-6">
                    <h3 className="text-lg font-extrabold">{t('contact-send')}</h3>
                    <ul className="mt-3">
                        <li className="flex items-center">
                            <a target="blank" href="mailto:leandromartinez.dev@gmail.com">
                                <div className="size-10 rounded-full flex items-center justify-center shrink-0">
                                    <img src="data:image/png;base64,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" />
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mt-6">
                    <h3 className="text-lg font-extrabold">{t('contact-socialmedia')}</h3>
                    <ul className="flex mt-3 space-x-4">
                        <li className="size-8 rounded-full flex items-center justify-center shrink-0">
                            <a href="https://www.linkedin.com/in/leandromartinezuy/" target="_blank">
                                <img src="https://skillicons.dev/icons?i=linkedin" alt="Linkedin Icon" />
                            </a>
                        </li>
                        <li className="size-8 rounded-full flex items-center justify-center shrink-0">
                            <a href="https://www.github.com/leamartinez1707/" target="_blank">
                                <img src="https://skillicons.dev/icons?i=github" alt="Github Icon" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mt-6">
                    <h3 className="text-lg font-extrabold">{t('contact-phone')}</h3>
                    <ul className="flex mt-3 space-x-4">
                        <li className="flex items-center">
                            <a className="text-sm text-white hover:underline hover:cursor-pointer" href="https://wa.link/qroge1" target="_blank">
                                <ImWhatsapp className="text-4xl fill-green-500" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Contact