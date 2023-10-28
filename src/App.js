import './App.css';
//import classes from '../src/App.module.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
//import ItemList from './components/ItemList/ItemList';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

function App() {
  return (
   
  <div className="Apps" > 
      <BrowserRouter>
            <NavBar/>

            <Routes>
                <Route path='/' element={<ItemListContainer greetings={'Bienvenidos a Croqueteando Web'}/>}/>
                <Route path='/categoria/:categoriaId' element={<ItemListContainer greetings={' Usted se encuentra en la Cateogría : '}/>}/>
                <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                <Route path='*' element={<h1>404 PAGE NOT FOUND</h1>}/>
            </Routes>
  
        </BrowserRouter>
   </div>
   
  );
}
export default App;
