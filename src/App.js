import './App.css';
import Navbar from './component/Navbar.js'
import Sendreport from './component/Sendreport.js';
import "bootstrap/dist/css/bootstrap.min.css"
import ShowData from './component/ShowData';

function App() {
  return (
    <div >
      <Navbar/>
      <Sendreport/>
      <ShowData/>
    </div>
  );
}

export default App;
