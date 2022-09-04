import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import React from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';

function App(){
    const [progress,setProgress]=useState(0);
    const [mode,setMode]=useState('light');
    const changeMode=()=>{
        if(mode==='light')
          setMode('dark');
        else
          setMode('light');
        // console.log(mode);
    }
    let pageSize=15;
    let country='in';
    let myKey=process.env.REACT_APP_API_KEY;
    return (
      <div>
        <Router>
          <Navbar mode={mode} toggleMode={changeMode} />
          <LoadingBar color='#f11946' progress={progress} height={3}/>
          <Routes>
            <Route exact path="/" element={<NewsComponent mode={mode} setProgress={setProgress} key="general" pageSize={pageSize} country={country} category='general' apiKey={myKey}/>} />
            <Route exact path="/science" element={<NewsComponent mode={mode} setProgress={setProgress} key="science" pageSize={pageSize} country={country} category='science' apiKey={myKey}/>} />
            <Route exact path="/business" element={<NewsComponent mode={mode} setProgress={setProgress} key="business" pageSize={pageSize} country={country} category='business' apiKey={myKey}/>} />
            <Route exact path="/entertainment" element={<NewsComponent mode={mode} setProgress={setProgress} key="entertainment" pageSize={pageSize} country={country} category='entertainment' apiKey={myKey}/>} />
            <Route exact path="/health" element={<NewsComponent mode={mode} setProgress={setProgress} key="health" pageSize={pageSize} country={country} category='health' apiKey={myKey}/>} />
            <Route exact path="/sports" element={<NewsComponent mode={mode} setProgress={setProgress} key="sports" pageSize={pageSize} country={country} category='sports' apiKey={myKey}/>} />
            <Route exact path="/technology" element={<NewsComponent mode={mode} setProgress={setProgress} key="technology" pageSize={pageSize} country={country} category='technology' apiKey={myKey}/>} />
          </Routes> 
        </Router>
      </div>
    )
    }
//read more abput what key is doing in the NewsComponent.
//why we had to make setProgress function as arrow? class based component question.
export default App;
