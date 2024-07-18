import view1 from "../assets/view1.jpg";
import view2 from "../assets/view2.jpg";
import view3 from "../assets/view3.jpg";
import view4 from "../assets/view4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
    return(
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you the opportunity to see a lot within a time frame</p>
            

            <DestinationData
            className="first-des"
            heading="Taal Volcano, Batangas
            " 
            text="One of the most iconic views in luzan, Mt. Taal boasts a volcano inside a lake inside 
                If you fancy a closer look the hike up to the crater is a mere 45 minutes and is easy enough for beginners.
                Guide will assist you most of the way and you will see the pecular environment found on an active volcano, including
                volcanic rocks and stream vents. The hike can be dusty and hot, so plan for an early morning trip, and then 
                unwind with same bulalo before heading back home!" 
                img1={view1}
                img2={view2}
                />

            <DestinationData 
            className="first-des-reverse"
            heading="Mt. Daguldul, Batangas"
            text="If you're looking for a hike that's a little more challenging but still good for a beginner mountaineer,
            check out Mt. Daguldul in San Juan, Batangas you will start your hike from the beach and pass through tropical forest,
            different rock formations and small streams there is a small store halfway up the trall where you can take a 
            break and drink buko juice and best view, the breeze is fantanstic. Once you've made it back down, head straight
            to the beach for a refreshing well-deserved swim"
            img1={view3}
            img2={view4}
            />

        </div>
    );
};
export default Destination;