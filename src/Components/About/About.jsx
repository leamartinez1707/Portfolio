import { useTranslation } from "react-i18next"

const About = () => {
    const {t} =  useTranslation()

    return (
        <div
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            id="infoSection"
            className='flex flex-col mt-12 md:mt-24 max-w-xs sm:max-w-2xl lg:max-w-6xl'>
            <div
                className='my-2'>
                <h1 className="my-2 sm:my-4 text-4xl sm:text-5xl cursor-pointer uppercase text-left anta-regular text-titles">
                {t('about')}
                </h1>
            </div>
            <div
                className="flex flex-wrap text-left my-6 gap-x-6 gap-y-2"
            >
                <div className="max-w-sm   p-2 border-gray-300">
                    <h4 className="font-semibold text-xl">{t('about-beginning')}</h4>
                    <p className="py-4" >{t('about-beginning-description')}</p>
                </div>
                <div className="max-w-sm  p-2 border-gray-300">
                    <h4 className="font-semibold text-xl">{t('about-bios')}</h4>
                    <p className="py-4" >{t('about-bios-description')}</p>
                </div>
                <div className=" max-w-sm border-t-2  p-2 border-gray-300">
                    <h4 className="font-semibold text-xl">{t('about-coderhouse')}</h4>
                    <p className="py-4" >{t('about-coderhouse-description')}</p>
                </div>
                <div className="max-w-sm border-t-2  p-2 border-gray-300">
                    <h4 className="font-semibold text-xl">{t('about-udemy')}</h4>
                    <p className="py-4" >{t('about-udemy-description')}</p>
                </div>
                <div className="max-w-sm border-t-2  p-2 border-gray-300">
                    <h4 className="font-semibold text-xl">{t('about-language')}</h4>
                    <p className="py-4" >{t('about-language-description')}</p>
                </div>
                <div className="max-w-sm border-t-2  p-2 border-gray-300">
                    <h4 className="font-semibold text-xl">{t('about-objetives')}</h4>
                    <p className="py-4" >{t('about-objetives-description')}</p>
                </div>
                <div className="max-w-sm border-t-2  p-2 border-gray-300">
                    <h4 className="font-semibold text-xl">{t('about-vision')}</h4>
                    <p className="py-4" >{t('about-vision-description')}</p>
                </div>
            </div>
        </div>

    )
}

export default About