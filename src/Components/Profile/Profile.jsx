import Typewriter from 'typewriter-effect';
import DownloadCv from '../DownloadCvButton/DownloadCv';
import { useTranslation } from 'react-i18next';

const Profile = () => {

    const { t } = useTranslation();

    return (
        <section className='flex flex-col mt-12 sm:mt-20 max-w-4xl mx-auto' data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500">
            <div className='text-left max-w-xl md:max-w-4xl flex'>
                <h3 className='my-2 text-4xl md:text-7xl'>{t("welcome-name")} <span className='text-violet-400'>Leandro Martínez.</span></h3></div>
            <div className='max-w-lg h-16 sm:min-h-32 md:max-w-4xl text-left text-white typewriterh1 mb-4 sm:mb-2'>
                <Typewriter
                    options={{
                        wrapperClassName: 'my-2 text-4xl sm:text-7xl anta-regular',
                        strings: [`${t('stack-frontend')}`, `${t('stack-fullstack')}`],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
            <div
                className="w-full mt-2 text-gray-light">
                <p className='my-2 text-left text-lg md:text-2xl tracking-wide'>
                    {t("welcome-first-description")}
                    <br />
                    {t("welcome-second-description")} <br />
                    {t("welcome-third-description")}

                </p>
            </div>

            <span className="animate animate-bounce inline-flex items-center size-fit py-1 px-2 justify-center my-2 text-sm text-gray-900 bg-green-100 rounded-sm backdrop-blur-3xl whitespace-nowrap ">
                {t("able-to-work")}
            </span>


            <div className='flex mx-auto my-2 mb-4 py-4 items-center justify-center gap-x-8 w-1/2'>
                <a href="https://www.github.com/leamartinez1707/" className='hover:cursor-pointer hover:scale-110 hover:transition-transform hover:duration-300 rounded-full fill-white hover:fill-violet-600' target='_blank'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github size-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" alt="github"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg></a>

                <a href="https://www.linkedin.com/in/leandromartinezuy/" className='hover:cursor-pointer hover:scale-110 hover:transition-transform hover:duration-300 rounded-lg fill-white hover:fill-violet-600' target='_blank'><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" className="svg-inline--fa fa-linkedin size-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" alt="linkedin"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a>

                <a href="mailto:leandromartinez.dev@gmail.com" className='hover:cursor-pointer hover:scale-110 hover:transition-transform hover:duration-300 rounded-full fill-white hover:fill-violet-600' target='_blank'><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" className="svg-inline--fa fa-paper-plane size-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" alt="email"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path></svg></a>

            </div>
            <DownloadCv />
        </section >
    )
}

export default Profile