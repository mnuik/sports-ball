import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Arsenal from './pages/Arsenal';
import Finland from './pages/Finland';
import Minnesota from './pages/Minnesota';
import OtherSports from './pages/OtherSports';
import TablesScores from './pages/TablesScores';
import Viljar from './pages/Viljar';
import NoPage from './pages/NoPage';

export default function TheRoutes() {
    return (
        <BrowserRouter>
        <Navigation />
            <Routes>
                
                <Route path='/' exact element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/arsenal' element={<Arsenal />} />
                <Route path='/finland' element={<Finland />} />
                <Route path='/minnesota' element={<Minnesota />} />
                <Route path='/other-sports' element={<OtherSports />} />
                <Route path='/tables-scores' element={<TablesScores />} />
                <Route path='/viljar' element={<Viljar />} />
                <Route path='/*' element={<NoPage />} />
                
            </Routes>
        </BrowserRouter>
    );
}