import '../src/content.css'
//page components
import Fileupload from './Components/Fileupload';

import Footer from './Components/Footer';
import Header from './Components/Header';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function Content() {
    return (
        <div className='content'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='viewer' element={<Fileupload />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}