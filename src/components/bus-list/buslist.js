import './buslist.css';
import React, { useEffect, useState } from 'react'
import {Tooltip} from 'antd';
function Buslist() {
  const [avlSeat,setAvlSeat] = useState(5);
  const[lowSeat,setLowseat] = useState('');

  useEffect(()=>{
    if(avlSeat<10){
      setLowseat('low-seat');
    }else{
      setLowseat('avl-seat');
    }
  },[avlSeat])
  return (
    <div className='search-card'>

      <div className='bus-info'>
        <small style={{position:'absolute',top:'20px',left:'63px', color:'white',fontStyle:'italic',fontWeight:600}}>Assured</small>
      <div> <img src='https://static.vecteezy.com/system/resources/previews/024/158/642/non_2x/blank-sale-label-or-tag-sticky-in-blue-and-chrome-yellow-color-vector.jpg' width={100}></img></div>
      
      <div className='bus-detail'>

        <div className='bus-name'>
          <h5 className='bus-title'>Raja Bus</h5>
          <p className='sub-title'>2x2, Sleeper, AC</p>
        </div>

        <div className='bus-time'>

          <div className='departure'>
            <span>03:40</span>
            <div>Chandbali</div>
          </div>

          <div className='duration'>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'0 25px'}}>
              <div className='dot'></div>
              <hr style={{width:'50px'}}/>
            <div className='duration-text'>05h.50m</div>
            <hr style={{width:'50px'}}/>
            <div className='dot'></div>
            </div>
          </div>

          <div className='arival'>
          <span>09:30</span>
          <div>Bhubaneswar</div>
          </div>

        </div>

      </div>

      <div style={{padding:'10px 10px', display:'flex', alignItems:'center', gap:'10px'}}>
        
        <div className='vehicle-number'>
          <div className='dot'></div>
          <strong>OD 34 D 6454</strong>
          <div className='dot'></div>
        </div>
        
         <i class="fa-solid fa-location-crosshairs"></i> <span style={{color:'gray',cursor:'not-allowed'}}> Live Tracking</span>
         </div>

      <hr className='divider'></hr>
      <div style={{display:'flex',alignItems:'center'}}>
        <span className='rating'> 4.3  <i class="fa-solid fa-star" style={{fontSize:'10px', color:'gold',padding:5}}></i></span>
        <span className='rating-user'><i class="fa-regular fa-user" style={{padding:'0 5px'}}></i> 1238</span>
        <div style={{display:'flex',justifyContent:'space-around' ,width:'100%'}}>
          <span className='extra-info'>Travel Policy</span> |
          <span className='extra-info'>Booking Policy</span> |
          <span className='extra-info'>Cancelation Policy</span> 
        </div>
      </div>

      </div>

      <div className='price-details'>
        <div className='price-container'>
          <div className='price-value'>
            <span> Only On <small style={{fontSize:'15px',textAlign:'end',textDecoration:'line-through'}}>₹ 250</small></span>
            <strong style={{fontSize:'30px',color:'#36343'}}>₹ 220/-</strong>
          </div>
          <div className='booking-btn'>
            <Tooltip placement="top" title={'Coming Soon!'}>
            <button className='book-btn'>Seat Book</button>
        </Tooltip>
            <span className={lowSeat} style={{display:'block',textAlign:'center', padding:'0 10px'}}>{avlSeat} Seats Available</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buslist

