import Banner from './components/Banner';
import Courses from './components/Courses';
import JoinUs from './components/JoinUs';
import OnlineEducation from './components/OnlineEducation';
import Packages from './components/Packages';
import Testimonial from './components/Testimonial';
import Footer from './shared/Footer';
import Navbar from './shared/Navbar';

function App() {
  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Packages></Packages>
      <OnlineEducation></OnlineEducation>
      <Courses></Courses>
      <Testimonial></Testimonial>
      <JoinUs></JoinUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
