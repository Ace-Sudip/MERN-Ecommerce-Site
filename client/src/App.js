import Header from './components/Header';
import Homescreen from './screens/Homescreen';
import {Route, Routes} from 'react-router-dom'
import ProductView from './features/product/ProductView';
import Cartscreen from './screens/Cartscreen';



function App() {
  return (
    <div className="App">
      
      <Header/>

   <Routes>
        <Route path='/' element={<Homescreen/>}/>

        <Route path='/product/:productid' element={<ProductView/>} />
        <Route path='/cart' element={<Cartscreen />}/>



      </Routes> 
      

    </div>
  );
}

export default App;
