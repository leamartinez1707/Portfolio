import i18n from 'i18next';

const LanguageSwitcher = () => {
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className='flex mx-4 gap-2'>
            <button className='size-8' onClick={() => changeLanguage('es')}>
                <img src="https://www.svgrepo.com/show/405610/flag-for-flag-spain.svg" alt="Bandera de españa para cambiar el idioma" />
            </button>
            <button className='size-8' onClick={() => changeLanguage('en')}>
                <img src="https://www.svgrepo.com/show/405643/flag-for-flag-united-kingdom.svg" alt="Bandera de inglaterra para cambiar el idioma" />
            </button>
        </div>
    );
};

export default LanguageSwitcher;
