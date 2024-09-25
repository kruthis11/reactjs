import React from 'react';
import Get from './about';

import Escopg from "./re-direct/esco";
import Etcpg from "./re-direct/etc";
import Plcpg from "./re-direct/plc";
import Finalpg from "./re-direct/final";
import Login from './logi-page/login';
import { BrowserRouter , Route , Routes} from "react-router-dom";


function final() {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='home' element={<Get/>} />
                    <Route path='/home/escopage' element={<Escopg/>}/>
                    <Route path="/home/etcpage" element={<Etcpg/>} />
                    <Route path="/home/plcpage" element={<Plcpg/>} />
                    <Route path='final' element={<Finalpg/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default final;