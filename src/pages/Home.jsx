import Navbar from "../components/navbar/Navbar";
import HomePage from "./HomePage";
import Overview from "./Overview";
import Testimonials from "./Testmonials";
import Pricing from "./Pricing";
import UpgradeFinance from "./UpgradeFinance";
import Footer from "../components/footer/Footer";


function Home() {
  return (
    <main>
      <Navbar/>
      <HomePage/>
      <Overview/>
      <Testimonials/>
      <Pricing/>
      <UpgradeFinance/>
      <Footer/>
    </main>
  );
}

export default Home;
