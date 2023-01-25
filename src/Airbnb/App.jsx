import React from 'react';
import react from '../assets/react.svg';
import grid from '../assets/grid.jpg'
import madman from '../assets/madman.jpg'
import vite from '../../public/vite.svg'
import './styles.css';
const Nav=()=>(
  <nav>
    <img src={react}/><span className='logo-text'>React</span>
  </nav>
  )
const Main=()=>(
  <section className='main'>
    <img src={grid}/>
    <h3>Online Experiences</h3>
    <p>Join unique interactive activities led by one-of-a-kind hosts all without leaving home.</p>
  </section>
  )
const Card=()=>(
  <div className='card'>
    <p className='card-status'>SOLD OUT</p>
    <img className='card-img' src={madman}/>
    <div className='ratings flex'>
      <img className='icon' src={vite}/>
      <h4 className='ratings-stars d-gray'>5.0</h4><p className='ratings-extras gray'>(6).USA</p>
    </div>
    <p className='card-desc'>life lessons with Mad Man</p>
    <div className='pricing flex'>
      <h4>From $136</h4><p className="gray">/person</p>
    </div>
  </div>
)
const Cards=()=>(
  <section className='cards flex'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </section>
  
)
const App=()=>(
  <div>
  <Nav/>
  <Main/>
  <Cards/>
  </div>
)
export default App