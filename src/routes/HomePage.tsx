import  '../App.css'
import Footer from '../components/common/Footer'
import LearnMore from '../components/common/LearnMore'
import NavBar from '../components/common/NavBar'
import Profile from '../components/common/Profile'
function HomePage(){
    return(
        <>
            <NavBar />
            <Profile />
            <LearnMore />
            <Footer />
        </>
    )
}

export default HomePage