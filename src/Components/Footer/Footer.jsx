import { Typography } from "@material-tailwind/react";

export const Footer = () => {
    return (
        <footer className="w-full p-8 bottom-0 mt-20 md:mt-32">

            <Typography color="white" className="text-center font-normal">
                &copy; 2024 Desarrollada y diseñada por {''}
                <a
                    className="hover:underline"
                    href="https://www.linkedin.com/in/leandromartinezuy/">Leandro Martínez.</a>
            </Typography>

        </footer>
    )
}
