import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nave from './components/navebar'
import PrPage from './pages/produtos'
import RegisterNewPrd from './pages/registerprd'
function App() {
   return(
          <BrowserRouter>
                <Routes>
                   <Route path='/' element={<Nave/>}></Route>
                   <Route path='/produtos' element={<PrPage/>}></Route>
                   <Route path='socialmidia' element={<PrPage/>}></Route>
                   <Route path='register/new/prd' element={<RegisterNewPrd/>}></Route>
                </Routes>
              </BrowserRouter>
   )

};

export default App;
