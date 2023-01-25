import Entry from './Entry'
import data from '../data'
import m from'../../assets/madman.jpg'
export default function Entries(){
  return (
    data.map(item=>(
      <Entry item={item}/>
    ))
    
  )
}