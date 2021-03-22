import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
// import './App.css';
import './assets/styles/styles.scss';
import Footer from './cmps/Footer.jsx'
import  Header  from './cmps/Header'
import  Home  from './pages/Home'


export default function App() {
  return (
    <div className="App">
     <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}


