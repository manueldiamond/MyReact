import React from 'react'
import boxes from './boxes.js'
import './css.css'

function Form(props){
  const {login}=props
  const [dat,setDat]=React.useState
  ({
    name:"",
    pass:"",
    confirmpass:'',
    remeber:true,
    acct:"",
    favColor:'alpha'
    
  })
  
  function handle(e){
    const {name,value,type,checked}=e.target
     setDat(prevDat=>({...prevDat,
       [name]:type==='checkbox'?checked:value}))
  }
  function submit(e){
    e.preventDefault()
    if(dat.pass!=''&dat.pass==dat.confirmpass){
      login(dat)
    }
  }
  return(
    <form onSubmit={submit}>
      <input type='text' placeholder='Full Name'name='name' value={dat.name} onChange={handle}/>
     {(dat.pass===''||dat.pass!=dat.confirmpass)&&<p style={{color:'red'}}>passwords must {dat.pass===''?'not be empty':'match'}</p>}
     <input type='password' placeholder='password'name='pass' value={dat.pass} onChange={handle}/>
     <input type='password' placeholder='Confirm password' name='confirmpass' value={dat.confirmpass} onChange={handle}/>
      <input id='remeber' type='checkbox' name='remeber' checked={dat.remeber} onChange={handle}/>
      <label htmlfor='remeber'>Remember me</label>
      <br/>
      <fieldset>
       <legend>I'm using this Account as a</legend>
        <input type='radio' id='radio-personal'value='personal' name='acct' onChange={handle} checked={dat.acct==='personal'}/>
       <label htmlfor='radio-personal'>Personal Account</label>
        <input type='radio' id='radio-group'value='group' name='acct' onChange={handle} checked={dat.acct==='group'}/>
        <label htmlfor='radio-group'>Group Account</label>
        <input type='radio' id='radio-business'value='business' name='acct' onChange={handle} checked={dat.acct==='business'}/>
        <label htmlfor='radio-business'>Business Account</label>
      </fieldset>
      <label htmlfor='favColor'>Preferred color-sceme</label>
      <select id='favColor'name='favColor' value={name.favColor}>
        <option value='alpha'>Alpha</option>
        <option value='alien'>Alien</option>
        <option value='dark'>Dark</option>
      </select>
      <br/>
      <button>Create Account</button>
    </form>
  )
}


export default function App(){
  function login(dat){
    alert(`Welcome ${dat.name}, to your ${dat.acct} Account`)
  }
  return(
    <div className='contanier'>
     <div className='header'>
      <h3>Forms.. Stuff</h3>
     </div>
     <Form login={login}/>
    </div>
  )
}