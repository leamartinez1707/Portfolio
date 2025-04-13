/* eslint-disable react/prop-types */

export const HabilitiesCard = ({ image, alt, link, title }) => {
    return (
        <div
            className="slide my-2 max-w-28 sm:max-w-40">
            <img
                className="py-2 mx-auto min-w-20 w-full max-w-20 sm:max-w-22" src={image} alt={alt} />
            <h6>
                <a className="hover:text-violet-500 hover:cursor-pointer" href={link} target="_blank">{title}</a>
            </h6>
        </div>
    )
}
