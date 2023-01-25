import React from'react'
import './styles.css'
//import {nanoid} from'nanoid'

function Die(props){
 const {isHeld,value,hold}=props
 function dots(){
     const dots=[]
     
   switch(value){
     default:
      
      for(let i=0;i<value;i++)
        dots.push(<span className='dot'></span>)
        
      return (<div 
        className={value!==1?'die-face':'al-center'}>{dots}</div>)
     case 3:
       return(
         <div className='flex jc-space'>
          <span className='dot al-begin'></span>
         <span className='dot al-center'></span>
         <span className='dot al-end'></span>
         </div>
       )
     case 5:
       return(
        <div className='flex'>
         <div className='flex-column w,,jc-space'>
          <span className='dot'></span>
          <span className='dot'></span>
         </div>
         <span className='dot al-center'></span>
         <div className='flex-column jc-space'>
          <span className='dot'></span>
          <span className='dot'></span>
         </div>
        </div>
       )
   
       
   }
 }
  return(<div className={`die shadow ${isHeld?"held":''}`} onClick={hold}>
      {dots()}
    </div>)
}
/*
const ID={
  
  IDs:[],
  get:()=>{
    let id=Math.random()
    while (IDs.has(id))id=Math.random()
    IDs.push(id)
    return id
  }
}*/
export default function App(){
  const randDieNum=()=>Math.ceil(Math.random()*6)
  function setup(){
    const diceDat=[]
    for(let i=0;i<10;i++)diceDat.push({
      isHeld:false,
      value:randDieNum(),
      id:Math.random()*Math.random()/Math.random()+Math.random()
    })
    return (diceDat)
  }
  function check(){
    let val=dice[0].value
    return !dice.filter(die=>die.value!==val).length
  }
  function currTime(){
    const d=new Date();
    console.log(d.getSeconds())
  }
  const [tenzies, setTenzies]=React.useState()
  const [dice,setDice]=React.useState(setup())
  const [time,setTime]=React.useState({start:0,elapsed:0})
  
  React.useEffect(function(){
     check()&&setTenzies(true)
  },[dice])
  function roll(holding){
    if(!tenzies)
      setDice(pDice=>pDice.map(die=>(!die.isHeld?{...die,value:randDieNum()}:die)))
    else {
      setDice(setup())
      setTenzies(false)
    }
  }
  function toggleHeld(id){
    setDice(pDice=>pDice.map(die=>(die.id===id?{...die,isHeld:!die.isHeld}:die)))
  }
  return(
    <div className={`container shadow ${tenzies?"held":""}`}>
      <h1>Tenzies</h1>
      <p>Some cool paragraph text about the game</p>
      <div className='dice'>
        {dice.map((die)=>(<Die key={die.id} {...die} hold={()=>toggleHeld(die.id)}/>))}
      </div>
      <button class='roll shadow' onClick={roll}>
         {!tenzies?'Roll':'Reset'}
      </button>
      <h3>{}</h3>
    </div>
  )
}