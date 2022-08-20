 import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css' 
import Client from './Component/Client';
import Carousel from './Component/comp/Carousel';
import CompanyLogo from './Component/comp/CompanyLogo';
import Section2 from './Component/comp/section2';
import Home from './Component/Home';
import RemoteSupport from './Component/RemoteSupport';
 

function App() {
  return (<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<Carousel/>} />
      <Route path="blockpage" element={<CompanyLogo/>}/>
      <Route path='*' element={<Home/>}/>
      <Route path="Clients" element={<Client/>}/>
      <Route path="RemoteSupport" element={<RemoteSupport/>}/>
    </Routes>
  </BrowserRouter>
  
  </>);
}

export default App
