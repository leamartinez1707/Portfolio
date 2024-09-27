import Habilities from '../Habilities/Habilities'
import Profile from '../Profile/Profile'

const Home = () => {
    return (
        <div className="max-w-xs sm:max-w-2xl lg:max-w-6xl mx-auto">
            <Profile />
            <Habilities />
        </div>
    )

}

export default Home