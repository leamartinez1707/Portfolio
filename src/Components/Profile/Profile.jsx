import Typewriter from 'typewriter-effect';
import DownloadCv from '../DownloadCvButton/DownloadCv';
import { useTranslation } from 'react-i18next';
import GithubIcon from '../Icons/GithubIcon';
import LinkedinIcon from '../Icons/LinkedinIcon';
import MailIcon from '../Icons/MailIcon';

const Profile = () => {

    const { t } = useTranslation();

    const socialLinks = [
        {
            url: "https://www.github.com/leamartinez1707/",
            icon: <GithubIcon />
        },
        {
            url: "https://www.linkedin.com/in/leandromartinezuy/",
            icon: <LinkedinIcon />
        },
        {
            url: "mailto:leandromartinez.dev@gmail.com",
            icon: <MailIcon />
        }
    ]

    return (
            <section className='flex flex-col mt-12 sm:mt-20 max-w-4xl mx-auto' data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500" >
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
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            rel="noopener noreferrer"
                            href={social.url} className='hover:cursor-pointer hover:scale-110 hover:transition-transform hover:duration-300 rounded-full fill-white hover:fill-violet-600' target='_blank'>
                            {social.icon}
                            </a>
                    ))
                    }
                </div>
                <DownloadCv />
            </section >
    )
}

export default Profile