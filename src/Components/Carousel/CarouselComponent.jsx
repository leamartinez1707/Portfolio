/* eslint-disable react/prop-types */
import { Carousel, IconButton, Dialog, DialogBody, DialogHeader, Button } from '@material-tailwind/react'
import { useState } from "react";
export const CarouselComponent = ({ img1, img2, img3, alt1, alt2, alt3, description, technologies, title, weblink, github }) => {

    const [open, setOpen] = useState(false);
    const [image, setImage] = useState(0)

    const handleOpen = (img) => {
        setOpen(!open)
        setImage(img)
    }
    return (
        <>
            <div
                className="max-w-4xl mx-auto block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div className="relative overflow-hidden bg-cover bg-no-repeat">
                    <Carousel
                        className="rounded-t-xl"
                        prevArrow={({ handlePrev }) => (
                            <IconButton
                                variant="text"
                                color="white"
                                size="lg"
                                onClick={handlePrev}
                                className="!absolute top-2/4 left-4 -translate-y-2/4 hover:bg-gray-100/20"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="size-8 text-black md:text-white"
                                >
                                    <path d="M15 6l-6 6l6 6" />
                                </svg>
                            </IconButton>
                        )}
                        nextArrow={({ handleNext }) => (
                            <IconButton
                                variant="text"
                                color="white"
                                size="lg"
                                onClick={handleNext}
                                className="!absolute top-2/4 !right-4 -translate-y-2/4 hover:bg-gray-100/20"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="size-8 text-black md:text-white"
                                >
                                    <path d="M9 6l6 6l-6 6" />
                                </svg>
                            </IconButton>
                        )}
                        navigation={({ setActiveIndex, activeIndex, length }) => (
                            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                {new Array(length).fill("").map((_, i) => (
                                    <span
                                        key={i}
                                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-black" : "w-4 bg-black/50"
                                            }`}
                                        onClick={() => {
                                            setActiveIndex(i);
                                        }}

                                    />
                                ))}
                            </div>
                        )}
                    >
                        <img
                            src={img1}
                            alt={alt1}
                            className="h-full w-full object-cover hover:cursor-pointer"
                            onClick={() => handleOpen(img1)}
                        />
                        <img
                            src={img2}
                            alt={alt2}
                            className="h-full w-full object-cover hover:cursor-pointer"
                            onClick={() => handleOpen(img2)}
                        />
                        <img
                            src={img3}
                            alt={alt3}
                            className="h-full w-full object-cover hover:cursor-pointer"
                            onClick={() => handleOpen(img3)}
                        />
                    </Carousel>
                    <Dialog size="xl" open={open} handler={handleOpen}>
                        <DialogHeader
                            className='flex justify-end items-end'
                        >
                            <Button
                                onClick={() => setOpen(false)}
                                color="red" size="sm">
                                Cerrar
                            </Button>
                        </DialogHeader>
                        <DialogBody>
                            <img
                                alt="nature"
                                className="h-[28rem] md:h-[48rem] w-full rounded-lg object-contain md:object-fit object-center"
                                src={image}
                            />
                        </DialogBody>
                    </Dialog>
                </div>
                <div className="p-2 md:p-10 flex flex-col bg-white text-black ">
                    <h4
                        className="text-xl leading-tight font-bold">
                        {title}

                    </h4>
                    <p className="py-4 text-base">
                        {description}
                        <br />
                        {technologies}
                    </p>
                    <div className="flex mx-auto items-center">
                        <a href={weblink} className="btn-ver mx-4 text-lg p-2 sm:w-48 overflow-hidden rounded-lg  text-white shadow" target="_blank">WEB
                        </a>
                        <a
                            target="_blank"
                            className="mx-4"
                            href={github}>
                            <img src="https://skillicons.dev/icons?i=github" alt="Github Icon" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
