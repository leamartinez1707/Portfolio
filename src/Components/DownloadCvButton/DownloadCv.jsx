import { useState } from 'react';
import { Button } from '@material-tailwind/react';

const DownloadCv = () => {
    const [showSelect, setShowSelect] = useState(false); // Estado para mostrar u ocultar el select
    const [language, setLanguage] = useState(''); // Estado para seleccionar el idioma

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
                Descargar CV
            </Button>

            {/* Mostrar el select solo si el usuario hizo clic en el botón */}
            {showSelect && (
                <div className="flex mt-2">
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="p-2 bg-violet-200 rounded-md text-black"
                    >
                        <option value="">Seleccionar idioma</option>
                        <option value="en">Inglés</option>
                        <option value="es">Español</option>
                    </select>

                    {/* Botón de confirmación de descarga */}
                    <Button
                        variant="outlined"
                        size="small"
                        className="ml-2 text-white bg-violet-800 hover:bg-violet-800 md:p-2"
                        onClick={handleDownload}
                        disabled={!language} // Deshabilitar si no se selecciona un idioma
                    >
                        Confirmar descarga
                    </Button>
                </div>
            )}
        </div>
    );
};

export default DownloadCv;
