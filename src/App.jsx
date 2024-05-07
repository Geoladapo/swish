import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Header from './components/Header';
import Service from './components/Service';
import Footer from './components/Footer';
import Certified from './components/Certified';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';

const App = () => {
  return (
    <>
      <Header />
      <Service />
      <CaseStudies />
      <Clients />
      <Testimonials />
      <Contact />
      <Certified />
      <Footer />
    </>
  );
};

export default App;
