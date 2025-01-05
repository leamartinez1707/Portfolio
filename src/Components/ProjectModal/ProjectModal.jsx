/* eslint-disable react/prop-types */
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { useTranslation } from "react-i18next";


const ProjectModal = ({ openModal, setOpenModal, setCloseModal, modalObject }) => {

    const { t } = useTranslation();
    return (
        <>
            <Dialog className="bg-gray-700/90 text-white" open={openModal} handler={setOpenModal}>
                <DialogHeader><p className="border-b-2 border-gray-500 text-2xl font-bold w-full">
                    {modalObject?.title ? t(`${modalObject?.title}`) :
                        <p className="">No hay datos, recargue el modal nuevamente</p>
                    }
                </p></DialogHeader>
                <DialogBody className="text-lg"
                >
                    {modalObject?.descriptionInfo ? t(`${modalObject?.descriptionInfo}`) :
                        <p className="">Sin datos</p>
                    }
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        onClick={setCloseModal}
                        className="mr-1 bg-violet-500 text-white hover:bg-violet-800 duration-200 transition-colors"
                    >
                        <span>Cerrar</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}

export default ProjectModal;