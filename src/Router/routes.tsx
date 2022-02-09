import  {BrowserRouter, Routes, Route} from 'react-router-dom';

import { Home } from '../pages/Home';
import { SelectTrack } from '../pages/SelectTrack';

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/SelectTrack' element={<SelectTrack />} />
            </Routes>
        

        </BrowserRouter>
        
    )

}