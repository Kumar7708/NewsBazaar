import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  pagesize=6
  countryCode="in"
  apiKey=process.env.REACT_APP_API_KEY

  state = {
    progress : 0
  }

  setProgress = (progress) => {
    this.setState({progress : progress})
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <LoadingBar
          height = {3}
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key = "general" pageSize = {this.pagesize} country = {this.countryCode} category = "general"/>} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key = "business" pageSize = {this.pagesize} country = {this.countryCode} category = "business"/>} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key = "entertainment" pageSize = {this.pagesize} country = {this.countryCode} category = "entertainment"/>} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key = "general" pageSize = {this.pagesize} country = {this.countryCode} category = "general"/>} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key = "health" pageSize = {this.pagesize} country = {this.countryCode} category = "health"/>} />
            <Route exct path="/science" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key = "science" pageSize = {this.pagesize} country = {this.countryCode} category = "science"/>} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key = "sports" pageSize = {this.pagesize} country = {this.countryCode} category = "sports"/>} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey ={this.apiKey} key = "technology" pageSize = {this.pagesize} country = {this.countryCode} category = "technology"/>} />
          </Routes>
        </Router>
        
        
      </div>
    )
  }
}

export default App

// "26171f3214da4a5abb9a8a62f8883568"