import AboutUs from "../../Components/AboutUs";
import Facts from "../../Components/Facts";
import RecentBlog from "../../Components/RecentBlog";
import Services from "../../Components/Services";
import SubscribeNewsletter from "../../Components/SubscribeNewsletter";
import Team from "../../Components/Team";
import Testimonial from "../../Components/Testimonial";
import WhyChooseUs from "../../Components/WhyChooseUs";

const HomPage = () => {
  return (
    <>
      <AboutUs></AboutUs>
      <Services></Services>
      <Facts></Facts>
      <WhyChooseUs></WhyChooseUs>
      <SubscribeNewsletter></SubscribeNewsletter>
      <Team></Team>
      <Testimonial></Testimonial>
      <RecentBlog></RecentBlog>
    </>
  );
};

export default HomPage;
