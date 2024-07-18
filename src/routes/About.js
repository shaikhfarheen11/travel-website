import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutImg from "../assets/about.jpg";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";

function About(){
    return (
        <>
        <Navbar />
        <Hero cName="hero-mid"
        heroImg={AboutImg}
        title="About"
        btnClass="hide"
        />
        <AboutUs />
        <Footer />
        </>
    )
}
export default About