import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import Analyze from './pages/Analyze'
import Humanize from './pages/Humanize'
import Interview from './pages/Interview'
import TheFAQ from './pages/TheFAQ'
import NotFound from './pages/NotFound'
function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/analyze' element={<Analyze />}></Route>
      <Route path='/humanize' element={<Humanize />}></Route>
      <Route path='/interviews' element={<Interview />}></Route>
      <Route path='/theFAQ' element={<TheFAQ />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default App
