import react from 'react'
import rlogo from '../assets/react.svg'
import vite from '../../public/vite.svg'
import manuel from '../assets/madman.jpg'
import './styles.css'

const Info=()=>(
  <div>
    <div className="profile">
      <img className='pp' src={manuel}/>
    </div>
    <h3 className='name'>Manuel Diamond</h3>
    <div className='title'>Frontend Developer</div>
    <small>unintelligeble</small>
   <div className='connect'>
    <button><img src={rlogo}/>Email</button>
    <button><img src={rlogo}/>Linkedin</button>
   </div>
  </div>
)
const About=()=>(
  <div className='about'>
  <h5>About</h5>
  <p>I'm a 19 year old self-taught progammer /game developer currently on the path to aquire a Computer Science degree. I have worked on a few personal and scool related frontend web-dev projects like this one mostly using HTML, CSS and JavaScript. I once dabbled in of back end programming with PHP and MySQL for a Database Server school project.</p><p> I'm currently learning the React Javascript Library in an attempt to broaden my skillset.</p>
  </div>
)
const Interests=()=>(
  <div className='interests'>
  <h5>Interests</h5>
  <p>I enjoy woking on my game projects more than anyting. I've wanted to become a fulltime game developer since I was 13 when I first started learning Java. At the time i mostly played mobile games and so naturally I wanted to make my own mobile game so I learnt the LibGDX framework so I could do cross platform game development. I move to the Godot game engine eventaully and thats what I do now with most of my spare time.</p><p> Aside that I also enjoy watching YouTube and of course playing games</p>
  </div>
)
const Footer=()=>(
  <footer>
    <div className='socials'>
    <button className='fb'></button>
    <button className='wa'></button>
    <button className='li'></button>
    <button className='ig'></button>
    </div>
  </footer>
)
const App=()=>(
  <div className='card'>
   <Info/>
   <About/>
   <Interests/>
   <Footer/>
  </div>
  )
 
export default App