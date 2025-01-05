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
            <Button onClick={setOpenModal} variant="gradient">
                Open Dialog
            </Button>
            <Dialog className="bg-white" open={openModal} handler={setOpenModal}>
                <DialogHeader><p className="text-black">{t(`${modalObject?.title}`)}</p></DialogHeader>
                <DialogBody>
                    <p className="text-black">{t(`${modalObject?.descriptionInfo}`)}</p>
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