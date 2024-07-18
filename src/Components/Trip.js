import TripData from "./TripData";
import Trip1  from '../assets/Trip1.jpg';
import Trip2 from '../assets/Trip2.jpg';
import Trip3 from '../assets/Trip3.jpg';
import "./TripStyles.css";

function Trip() {
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading = "Trip in Switzerland"
                text="Switzerland, a stunning country in the heart of Europe, captivates with its breathtaking natural beauty,
                 rich cultural heritage, and impeccable order. The majestic Swiss Alps, with world-class skiing and hiking 
                 trails, offer some of the most awe-inspiring landscapes on Earth. Cities like Zurich, Bern, Geneva, and 
                 Lucerne blend modernity and tradition, featuring medieval architecture, vibrant arts scenes, and 
                 international significance. Switzerland’s cultural diversity is reflected in its four official languages and 
                 its delectable cuisine, including famous cheeses and chocolates. Renowned for its cleanliness and efficiency,
                  Switzerland promises a travel experience that combines adventure, relaxation, and cultural immersion."
 />
                   <TripData
                image={Trip2}
                heading = "Trip in Dubai"
                text="Dubai, a dazzling gem in the UAE, is renowned for its futuristic skyline, luxurious lifestyle, and 
                vibrant culture. This city boasts iconic landmarks like the Burj Khalifa, the tallest building in the world,
                 and the Palm Jumeirah, a man-made island. Visitors can indulge in world-class shopping at the Dubai Mall, 
                 explore the rich history in the Al Fahidi Historical District, or experience thrilling desert safaris.
                  Dubai's blend of traditional souks and cutting-edge architecture, along with its diverse culinary scene and 
                  endless entertainment options, make it a captivating destination for travelers seeking both adventure and 
                  luxury."
                />
                <TripData
                image={Trip3}
                heading = "Trip in Singapore"
                text="Singapore, a dynamic city-state in Southeast Asia, is celebrated for its harmonious blend of modernity 
                and tradition. Known as the Lion City, it boasts a stunning skyline, immaculate cleanliness, and efficient 
                public transport. Visitors can explore iconic attractions such as Marina Bay Sands, Gardens by the Bay, and
                 Sentosa Island. Singapore's multicultural heritage is evident in its diverse neighborhoods like Chinatown, 
                 Little India, and Kampong Glam. The city offers a culinary paradise with its famous hawker centers and
                  Michelin-starred restaurants. With its lush green spaces, vibrant arts scene, and rich history, Singapore 
                  is a captivating destination for all travelers."

                />
            </div>
        </div>
    );
}
export default Trip;