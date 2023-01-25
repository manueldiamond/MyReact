
export default function Entry(props){
 const {loc,title,gmaps,start,end,desc,img}=props.item
  return (
    <div className='Entry'>
     <div className='flex'>
      <img src={`../../assets/${img}`} className='entry-img'/>
      <div className='text'>
        <div className='flex gray'>
          <h6>{loc}</h6>
          <a href={gmaps}>view on google maps</a>
        </div>
        <h4>{title}</h4>
        <h6>{start} - {end}</h6>
        <p>{desc}</p>
      </div>
     </div>
     <hr className='entry-rule'/>
    </div>
  )
}