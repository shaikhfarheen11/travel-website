import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";
// import frontImg from '../assets/front.jpg';

function Home () {
    return(
        <>
        <Navbar />
        <Hero cName="hero"
        heroImg="https://great-atmosphere.com/wp-content/uploads/2013/06/eiffel-tower-paris-france-at-night-landscape-photography-travel-destinations-beautiful-view-great-atmosphere-263.jpg"
        title="Your Journey you story" 
        text="Choose your favourite destination. "
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
        />
        <Destination />
        <Trip />
        <Footer />
        </>
    )
}
export default Home;