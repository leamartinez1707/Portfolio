import { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';

const DownloadCv = () => {
    const [showSelect, setShowSelect] = useState(false); // Estado para mostrar u ocultar el select
    const [language, setLanguage] = useState(''); // Estado para seleccionar el idioma
    const { t } = useTranslation();

    const handleDownload = () => {
        if (language === 'en') {
            window.open('/download/CV_english.pdf', '_blank'); // Abrir CV en inglés en una nueva pestaña
        } else if (language === 'es') {
            window.open('/download/CV_spanish.pdf', '_blank'); // Abrir CV en español en una nueva pestaña
        }
        setShowSelect(false); // Ocultar el select después de la descarga
    };


    return (
        <div className="relative">
            {/* Botón para abrir el select */}
            <Button
                variant='outlined' size='small' className="text-white bg-violet-800 hover:bg-violet-800 md:p-2"
                onClick={() => setShowSelect(!showSelect)} // Mostrar u ocultar el select al hacer clic
            >
                {t("download-cv")}
            </Button>

            {/* Mostrar el select solo si el usuario hizo clic en el botón */}
            {showSelect && (
                <div className="flex mt-2 mx-auto justify-center">
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="p-2 bg-violet-200 rounded-md text-black hover:cursor-pointer"
                    >
                        <option  value="">{t("select-language")}</option>
                        <option  value="en">{t('language-english')}</option>
                        <option value="es">{t('language-spanish')}</option>
                    </select>

                    {/* Botón de confirmación de descarga */}
                    <Button
                        variant="outlined"
                        size="small"
                        className="ml-2 text-white bg-violet-800 hover:bg-violet-800 md:p-2"
                        onClick={handleDownload}
                        disabled={!language} // Deshabilitar si no se selecciona un idioma
                    >
                        {t("confirm-download")}
                    </Button>
                </div>
            )}
        </div>
    );
};

export default DownloadCv;
