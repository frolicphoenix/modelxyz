import React, { useState } from 'react';
import '../src/content.css'
//page components
import Fileupload from './Components/Fileupload';

import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Header from './Components/Header';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Experience from './Experience';


export default function Content() {

    const [viewerVisible, setViewerVisible] = useState(false);

    return (
        <div className='content'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='fileupload' element={<Fileupload setViewerVisible={setViewerVisible} />} />
                    <Route path='gallery' element={<Gallery/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}