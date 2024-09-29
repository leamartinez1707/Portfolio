import { HardSkills } from "./HardSkills"
import { SoftSkills } from "./SoftSkills"

const Habilities = () => {
    return (
        <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            className="max-w-4xl mx-auto mt-24">
            <HardSkills />
            <SoftSkills />
        </div>
    )
}

export default Habilities