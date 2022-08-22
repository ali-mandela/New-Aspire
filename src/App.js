 import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css' 
import Client from './Component/Client';
import CarouSel from './Component/comp/Carousel';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Mission from './Component/Mission';
import RemoteSupport from './Component/RemoteSupport';
import TenReason from './Component/TenReason';
import AspireGaurantee from './Component/AspireGaurantee';
import ProjectService from './Component/ProjectService'
import BlockPage from './Component/BlockPage';
 

function App() {
  return (<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="about" element={<CarouSel/>} />
      <Route path="BlockPage" element={<BlockPage/>}/>
      <Route path='*' element={<Home/>}/>
      <Route path="Clients" element={<Client/>}/>
      <Route path="RemoteSupport" element={<RemoteSupport/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='TenReason' element={<TenReason/>} />
      <Route path='Mission' element={<Mission/>} />
      <Route path='AspireGaurantee' element={<AspireGaurantee/>} />
      <Route path='ProjectService' element={<ProjectService/>}/>
    </Routes>
  </BrowserRouter>
  
  </>);
}

export default App
