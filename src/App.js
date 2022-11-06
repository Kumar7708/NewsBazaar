import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pagesize = 6
  const countryCode = "in"
  const apiKey = process.env.REACT_APP_API_KEY

  const [progres, setProgres] = useState(0)

  const setProgress = (progress) => {
    setProgres(progress)
  }

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progres}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pagesize} country={countryCode} category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pagesize} country={countryCode} category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pagesize} country={countryCode} category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pagesize} country={countryCode} category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pagesize} country={countryCode} category="health" />} />
          <Route exct path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pagesize} country={countryCode} category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pagesize} country={countryCode} category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pagesize} country={countryCode} category="technology" />} />
        </Routes>
      </Router>


    </div>
  )
}

export default App

// "26171f3214da4a5abb9a8a62f8883568"