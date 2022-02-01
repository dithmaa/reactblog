import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import GalleryContent from './components/GalleryContent/GalleryContent';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import GalleryMain from './components/GalleryContent/GalleryMain/GalleryMain';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import React from 'react';

export default function App (props){
  return (
    <div className="App">
        
      
      
        
        <Header />

        
        <div className='container'>
        <Routes>
    
            <Route path={'login/'} element={<Login/>} />
            <Route path={'/'} element={<GalleryMain/>} />
    
        </Routes> 
        </div>

        <Footer year={new Date().getFullYear()} />

      

    </div>
  );
}
