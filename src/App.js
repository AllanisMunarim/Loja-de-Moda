import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './Components/Home'
//import ModaMasculina from './Components/ModaMasculina'
//import ModaFeminina from './Components/ModaFeminina'
//import ModaInfantil from './Components/ModaInfatil'

export default function App(){
    return(
        <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home/>}/>       
         </Routes>
        </BrowserRouter>
       
    )
}