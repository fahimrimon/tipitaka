import Banner from './components/Banner';
import OnlineEducation from './components/OnlineEducation';
import Packages from './components/Packages';
import Navbar from './shared/Navbar';

function App() {
  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Packages></Packages>
      <OnlineEducation></OnlineEducation>
    </div>
  );
}

export default App;
