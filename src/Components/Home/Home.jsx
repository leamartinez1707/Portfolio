import About from '../About/About'
import Contact from '../Contact/Contact'
import Habilities from '../Habilities/Habilities'
import Profile from '../Profile/Profile'
import Proyects from '../Proyects/Proyects'

const Home = () => {
    return (
        <div className="mx-auto px-4 max-w-4xl">
            <Profile />
            <Habilities />
            <Proyects />
            <About />
            <Contact />
        </div>
    )

}

export default Home