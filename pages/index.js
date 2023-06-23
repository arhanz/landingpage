import Navbar from "../Components/Navbar"
import Tabs from "../Components/tabs"
import AboutUs from "../Components/AboutUs"
import Achievement from "../Components/Achievement"
import WhyChooseUs from "../Components/WhyChooseUs"
import Offers from "../Components/Offers"
import FeatureTour from "../Components/FeatureTour"
import Testimonial from "../Components/Testmonial"

export default function Home() {
  return (    
    <>
    <Navbar />
    <br />
    <AboutUs />
    <Tabs />
    <Achievement />
    <WhyChooseUs />
    <Offers />
    <FeatureTour />
    <Testimonial />
    </>
  )
}
