/* eslint-disable react/prop-types */

export const HabilitiesCard = ({ image, alt, link, title, animate }) => {
    return (
        <div
            data-aos={animate}
            data-aos-duration="2000"
            className="mx-4 my-2 size-18">
            <img
                className="icon-habilities py-2 hover:cursor-pointer mx-auto" src={image} alt={alt} />
            <h6>
                <a href={link} target="_blank">{title}</a>
            </h6>
        </div>
    )
}
