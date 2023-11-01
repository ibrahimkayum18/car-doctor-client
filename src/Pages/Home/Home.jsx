
import Footer from "../../Components/Footer";
import Banner from "./Banner";
import ContactH from "./ContactH";
import HomeAbout from "./HomeAbout";
import Services from "./Services";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeAbout></HomeAbout>
            <Services></Services>
            <ContactH></ContactH>


            <Footer></Footer>
        </div>
    );
};

export default Home;