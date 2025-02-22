import './filterResult.css';
import React, { useRef, useState } from 'react'

import { 
  Checkbox,
   Slider 
  } from 'antd';


let filterValues = {
  from: '', //url query from value
  to: '', //url query to value
  doj: '', //url query date of journey value
  priceDrop: false,
  busType: [],
  priceRange:[],
  timing: []
}

export default function FilterResult() {

  
    //put dynamic value [lowest, highest] price.
  const [priceRangevalue,setpriceRangeValue] = useState([100,5000]);


  const acType = useRef(null);
  const sleeperType = useRef(null);
  const pushbackType = useRef(null);
  const nonAcType = useRef(null);

  const morning = useRef(null);
  const afternoon = useRef(null);
  const evening = useRef(null);
  const night = useRef(null);


  let [clearData, setClearData] = useState(false);


  const accrued = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  function changeBusType(e) {
    if (e === 'ac-type') {
      if (acType.current.className.includes('active')) {
        acType.current.className = 'filter-btn';
        const index = filterValues.busType.indexOf('AC');
        filterValues.busType.splice(index, index + 1);
        console.log('clicked');
      } else {
        acType.current.className = 'filter-btn active';
        filterValues.busType.push('AC');
      }
    }

    if (e === 'sleeper-type') {
      if (sleeperType.current.className.includes('active')) {
        sleeperType.current.className = 'filter-btn';
        const index = filterValues.busType.indexOf('SLEEPER');
        filterValues.busType.splice(index, index + 1);
      } else {
        sleeperType.current.className = 'filter-btn active';
        filterValues.busType.push('SLEEPER');
      }
    }

    if (e === 'pushback-type') {
      if (pushbackType.current.className.includes('active')) {
        pushbackType.current.className = 'filter-btn';
        const index = filterValues.busType.indexOf('PUSHBACK');
        filterValues.busType.splice(index, index + 1);
      } else {
        pushbackType.current.className = 'filter-btn active';
        filterValues.busType.push('PUSHBACK');
      }
    }

    if (e === 'nonac-type') {
      if (nonAcType.current.className.includes('active')) {
        nonAcType.current.className = 'filter-btn';
        const index = filterValues.busType.indexOf('NONAC');
        filterValues.busType.splice(index, index + 1);
      } else {
        nonAcType.current.className = 'filter-btn active';
        filterValues.busType.push('NONAC');
      }
    }

    filterData();
  }

  function priceChanged(e) {
    setpriceRangeValue(e);
    filterValues.priceRange =e;
    filterData();
  }

  function filterTimeWise(e) {
    if (e === 'morning') {
      if (morning.current.className.includes('active')) {
        morning.current.className = 'timeing-btn';
        const index = filterValues.timing.indexOf('MORNING');
        filterValues.timing.splice(index, index + 1);
      } else {
        morning.current.className = 'timeing-btn active';
        filterValues.timing.push('MORNING');
      }
    }

    if (e === 'afternoon') {
      if (afternoon.current.className.includes('active')) {
        afternoon.current.className = 'timeing-btn';
        const index = filterValues.timing.indexOf('AFTERNOON');
        filterValues.timing.splice(index, index + 1);
      } else {
        afternoon.current.className = 'timeing-btn active';
        filterValues.timing.push('AFTERNOON');
      }
    }

    if (e === 'evening') {
      if (evening.current.className.includes('active')) {
        evening.current.className = 'timeing-btn';
        const index = filterValues.timing.indexOf('EVENING');
        filterValues.timing.splice(index, index + 1);
      } else {
        evening.current.className = 'timeing-btn active';
        filterValues.timing.push('EVENING');
      }
    }

    if (e === 'night') {
      if (night.current.className.includes('active')) {
        night.current.className = 'timeing-btn';
        const index = filterValues.timing.indexOf('NIGHT');
        filterValues.timing.splice(index, index + 1);
      } else {
        night.current.className = 'timeing-btn active';
        filterValues.timing.push('NIGHT');
      }
    }
    filterData();
  }

  function filterData() {

    if (filterValues.busType.length > 0 || filterValues.priceDrop || filterValues.timing.length > 0 || filterValues.priceRange.length > 0) {
      setClearData(true);
    } else {
      setDefaultData();
    }
    console.log(filterValues);
    //make a API Call.

  }

  function setDefaultData() {
    setClearData(false);
    setpriceRangeValue([100,5000]);

    acType.current.className = 'filter-btn';
    sleeperType.current.className = 'filter-btn';
    pushbackType.current.className = 'filter-btn';
    nonAcType.current.className = 'filter-btn';

    morning.current.className = 'timeing-btn';
    afternoon.current.className = 'timeing-btn';
    evening.current.className = 'timeing-btn';
    night.current.className = 'timeing-btn';

    filterValues = {
      from: '', //url query from value
      to: '', //url query to value
      doj: '', //url query date of journey value
      busType: [],
      priceRange:[],
      timing: [],
      accrued: 'all'
    }

    // make a API Call.
    console.log(filterValues);
  }

  return (
    <>
      <div className='filter-content'>
      <h4 style={{ textAlign: 'left', paddingLeft: '20px' }}>  Sort: </h4>
      <div className='shot-input'>
                        <div className='shot-input' style={{width:'100%',display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center',gap:'10px',padding:0,margin:0}}>
                         <p> <span>💶</span> <span>Price <span className='up-arrow hide'>🡹</span> <span className='down-arrow hide'>🡻</span></span> </p> 
                         <p> <span>💺</span> <span>Seat <span className='up-arrow hide'>🡹</span> <span className='down-arrow hide'>🡻</span></span> </p> 
                         <p> <span>⭐</span> <span>Rating <span className='up-arrow hide'>🡹</span> <span className='down-arrow hide'>🡻</span></span> </p>
                         <p> <span>🛬</span> <span>Arival <span className='up-arrow hide'>🡹</span> <span className='down-arrow hide'>🡻</span></span> </p>
                         <p> <span>🛫</span> <span>Departure <span className='up-arrow hide'>🡹</span> <span className='down-arrow hide'>🡻</span> </span>  </p>
                        </div>
                    </div>
                    <hr/>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
          <h4 style={{ textAlign: 'left' }}>Filters:</h4>

          {clearData ? <span style={{ cursor: 'pointer' }} onClick={setDefaultData}>Clear All</span> : ''}

        </div>

        {/* <hr style={{ width: '100%' }} /> */}
        
        <div className='assured'>
            <h5 style={{fontSize:'18px',margin:'15px'}}>Assured Buses</h5>
            <Checkbox onChange={accrued}></Checkbox>
        </div>

        <div className='bus-type'>
          <h5 style={{ fontSize: '18px', margin: '15px' }}>Bus Type</h5>
          <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>

            <div className='filter-btn ' ref={acType} onClick={() => changeBusType('ac-type')}>
              <img src='https://cdn-icons-png.flaticon.com/512/112/112516.png' alt='ac' width={30}></img>
              <small>AC</small>
            </div>

            <div className='filter-btn' ref={sleeperType} onClick={() => changeBusType('sleeper-type')}>
              <img src='https://cdn-icons-png.flaticon.com/512/78/78257.png' alt='sleeper' width={30} />
              <small>Sleeper</small>
            </div>

            <div className='filter-btn' ref={pushbackType} onClick={() => changeBusType('pushback-type')}>
              <img src='https://static.thenounproject.com/png/2776009-200.png' alt='pushback' width={30} />
              <small>Pushback</small>
            </div>

            <div className='filter-btn' ref={nonAcType} onClick={() => changeBusType('nonac-type')}>
              <img src='https://cdn-icons-png.flaticon.com/512/512/512967.png' alt='nonac' width={30} />
              <small>NonAC</small>
            </div>

          </div>
        </div>

        <div className='price-range'>
          <h5 style={{ fontSize: '18px', margin: '15px' }}>Price Range</h5>
          <Slider onChange={(e)=>setpriceRangeValue(e)} onChangeComplete={(value) => priceChanged(value)} range defaultValue={priceRangevalue} min={100} max={5000} allowCross={false} value={priceRangevalue} />
        </div>

        <div className='departure-time'>
          <h5 style={{ fontSize: '18px', margin: '15px' }}>Departure Time</h5>
          <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>

            <div className='timeing-btn' ref={morning} onClick={() => filterTimeWise('morning')}>
              <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/morning-1763645-1503034.png?f=webp&w=128' alt='morning' width={30}></img>
              <small>Beffore 10 AM</small>
            </div>

            <div className='timeing-btn' ref={afternoon} onClick={() => filterTimeWise('afternoon')}>
              <img src='https://cdn-icons-png.flaticon.com/128/10206/10206955.png' alt='afternon' width={30} />
              <small>10 AM to 5 PM</small>
            </div>

            <div className='timeing-btn' ref={evening} onClick={() => filterTimeWise('evening')}>
              <img src='https://cdn.iconscout.com/icon/premium/png-256-thumb/morning-47-648044.png?f=webp&w=128' alt='evening' width={30} />
              <small>5 PM to 11 PM</small>
            </div>

            <div className='timeing-btn' ref={night} onClick={() => filterTimeWise('night')}>
              <img src='https://static-00.iconduck.com/assets.00/night-icon-256x256-0o1ef13t.png' alt='night' width={30} />
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
