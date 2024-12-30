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
        <article className='mb-4'>
            <div
                className="flex flex-col md:flex-row max-w-4xl mx-auto rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] justify-between rounded-t-xl">
                <div className="relative overflow-hidden size-full max-h-full my-auto mx-auto rounded-t-xl align-middle items-center flex justify-center">
                    <Carousel
                        className=""
                        prevArrow={({ handlePrev }) => (
                            <IconButton
                                variant="text"
                                color="white"
                                size="md"
                                onClick={handlePrev}
                                className="!absolute top-2/4 left-4 -translate-y-2/4 bg-gray-300/20 hover:bg-gray-100/50"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="size-8 text-black"
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
                                className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-gray-300/20 hover:bg-gray-100/50"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="size-8 text-black"
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
                                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-black" : "w-4 bg-white/50"
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
                            className="size-full object-cover hover:cursor-pointer"
                            onClick={() => handleOpen(img1)}
                        />
                        <img
                            src={img2}
                            alt={alt2}
                            className="size-full object-cover hover:cursor-pointer"
                            onClick={() => handleOpen(img2)}
                        />
                        <img
                            src={img3}
                            alt={alt3}
                            className="size-full object-cover hover:cursor-pointer"
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
            </div>
            <div className="p-2 flex flex-col gap-y-4 text-white justify-between items-start w-full mx-auto">
                <h4
                    className="text-4xl my-2 leading-tight font-bold text-left">
                    {title}

                </h4>
                <p className="text-left text-lg md:text-xl">
                    {description}
                </p>
                <div className='flex w-full flex-wrap gap-1'>
                    {technologies?.map((techName, index) => (

                        <p className='text-white border-2 px-2 border-white ' key={index}>{techName}</p>
                    )
                    )}
                </div>


                {/* <p className='bg-black/20 text-white rounded-sm text-left p-1'>
                    {technologies}
                </p> */}
                <div className="flex w-full">
                    <a href={weblink} className="border-violet-800 bg-violet-800 hover:bg-violet-900 duration-300 transition-colors border-2 px-2 text-md align-middle items-center flex justify-center w-full sm:w-48 overflow-hidden rounded-lg shadow hover:cursor-pointer" target="_blank">VISITAR WEB
                    </a>
                    <a
                        target="_blank"
                        className="px-4"
                        href={github}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github sm:size-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" alt="github"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                    </a>
                </div>
            </div>
        </article>
    )
}
