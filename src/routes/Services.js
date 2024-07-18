import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Trip from "../Components/Trip";
import ServiceImg from "../assets/services.jpg";
import Footer from "../Components/Footer";

function Services(){
    return(
        <>
        <Navbar />
        <Hero cName="hero-mid"
        heroImg={ServiceImg}
        title="Services"
        btnClass="hide"
        />
        <Trip />
        <Footer />
        </>
    )
}
export default Services;