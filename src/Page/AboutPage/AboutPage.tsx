import AboutUs from "../../Components/AboutUs";
import Facts from "../../Components/Facts";
import SubscribeNewsletter from "../../Components/SubscribeNewsletter";
import Team from "../../Components/Team";
import WhyChooseUs from "../../Components/WhyChooseUs";

const AboutPage = () => {
    return (
        <>
          <AboutUs></AboutUs>  
          <Facts></Facts>
          <WhyChooseUs></WhyChooseUs>
          <SubscribeNewsletter></SubscribeNewsletter>
          <Team></Team>
        </>
    );
};

export default AboutPage;