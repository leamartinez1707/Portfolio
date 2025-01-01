import { Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export const Footer = () => {

    const {t} = useTranslation();

    const date = new Date();
    return (
        <footer className="w-full p-8 bottom-0 mt-20 md:mt-32">

            <Typography color="white" className="text-center font-normal">
                &copy; {date.getFullYear()} {t('footer-developedby')} {''}
                <a
                    className="hover:underline"
                    href="https://www.linkedin.com/in/leandromartinezuy/">Leandro Martínez.</a>
            </Typography>

        </footer>
    )
}
