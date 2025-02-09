import './filterResult.css';
import React, { useState } from 'react'

import { Checkbox,Slider } from 'antd';

const priceDrop = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

export default function FilterResult() {


  let [clearData , setClearData] = useState(false);

  function changeBusType(e){
    
    const classname = e.target.className;
    if(classname.includes('active')){
      e.target.className = 'filter-btn';
    }else{
      e.target.className = 'filter-btn active'
    }
    
    
  }

  function filterData({filterType,filterValue}){
        
        
  }
  function nothing(e){e.stopPropagation();}
  return (
    <>
        <div className='filter-content'>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', padding:'0 20px'}}>
          <h4 style={{textAlign:'left',paddingLeft:'20px'}}>Filters</h4>

          {clearData ? <span style={{cursor:'pointer'}}>Clear All</span>:''}
          
          </div>

      <hr style={{width:'100%'}}/>

        <div className='price-drop'>
            <h5 style={{fontSize:'18px',margin:'15px'}}>Price Drop</h5>
            <Checkbox onChange={priceDrop}></Checkbox>
        </div>


      <div className='bus-type'>
      <h5 style={{fontSize:'18px',margin:'15px'}}>Bus Type</h5>
        <div style={{width:'100%',display:'flex',flexWrap:'wrap', justifyContent:'center', gap:'10px'}}>
          
        <div className='filter-btn ' onClick={(e)=>changeBusType(e)}> 
          <img src='https://cdn-icons-png.flaticon.com/512/112/112516.png' width={30} onClick={(e)=>nothing(e)}></img>
          <small onClick={(e)=>nothing(e)}>AC</small>
        </div>

        <div className='filter-btn'>
           <img src='https://cdn-icons-png.flaticon.com/512/78/78257.png' width={30}/>
           <small>Sleeper</small>
           </div>

        <div className='filter-btn'>
           <img src='https://static.thenounproject.com/png/2776009-200.png' width={30}/>
           <small>Pushback</small>
           </div>

           <div className='filter-btn'>
           <img src='https://cdn-icons-png.flaticon.com/512/512/512967.png' width={30}/>
           <small>NonAC</small>
           </div>

        </div>
      </div>

      <div className='price-range'>
      <h5 style={{fontSize:'18px',margin:'15px'}}>Price Range</h5>
      <Slider range defaultValue={[100, 5000]} min={100} max={5000} allowCross={false} />
      </div>

      <div className='departure-time'>
      <h5 style={{fontSize:'18px',margin:'15px'}}>Departure Time</h5>
        <div style={{width:'100%',display:'flex',flexWrap:'wrap',justifyContent:'center', gap:'10px'}}>
          
        <div className='timeing-btn'> 
          <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/morning-1763645-1503034.png?f=webp&w=128' width={30}></img>
          <small>Beffore 10 AM</small>
        </div>

        <div className='timeing-btn'>
           <img src='https://cdn-icons-png.flaticon.com/128/10206/10206955.png' width={30}/>
           <small>10 AM to 5 PM</small>
           </div>

        <div className='timeing-btn'>
           <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/morning-47-648044.png?f=webp&w=128' width={30}/>
           <small>5 PM to 11 PM</small>
           </div>

           <div className='timeing-btn'>
           <img src='https://static-00.iconduck.com/assets.00/night-icon-256x256-0o1ef13t.png' width={30}/>
           <small>After 11 PM</small>
           </div>

        </div>
      </div>

      {/* <div className='bus-partner'>
        <p>Dolphin / shyamoli parivahan / Radharani / jagakalia </p>
      </div> */}



      </div>
    </>
  )
}
