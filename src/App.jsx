import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Header from './components/Header';
import Service from './components/Service';
import Footer from './components/Footer';
import Certified from './components/Certified';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
// import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Header />
      <Service />
      <CaseStudies />
      <Clients />
      <Testimonials />
      <Contact />
      <Certified />
      <Footer />
    </div>
  );
};

export default App;
