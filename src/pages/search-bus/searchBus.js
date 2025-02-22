import './searchBus.css';
// import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton, DatePicker,Select, Space,ConfigProvider } from 'antd';
import React, { useState } from 'react';
import jsonp from 'fetch-jsonp';
import qs from 'qs';

import { useNavigate } from 'react-router-dom';


import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';


dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';

/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY'];
const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
const customWeekStartEndFormat = (value) =>
  `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
    .endOf('week')
    .format(weekFormat)}`;


let timeout;
let currentValue;
const fetch = (value, callback) => {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;
  const fake = () => {
    const str = qs.stringify({
      code: 'utf-8',
      q: value,
    });
    jsonp(`https://suggest.taobao.com/sug?${str}`)
      .then((response) => response.json())
      .then((d) => {
        if (currentValue === value) {
          const { result } = d;
          const data = result.map((item) => ({
            value: item[0],
            text: item[0],
          }));
          callback(data);
        }
      });
  };
  if (value) {
    timeout = setTimeout(fake, 300);
  } else {
    callback([]);
  }
};
const SearchInput = (props) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState();
  const handleSearch = (newValue) => {
    fetch(newValue, setData);
  };
  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <Select
      showSearch
      value={value}
      placeholder={props.placeholder}
      style={props.style}
      defaultActiveFirstOption={false}
      suffixIcon={null}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={null}
      options={(data || []).map((d) => ({
        value: d.value,
        label: d.text,
      }))}
    />
  );
};

function SearchBus() {
  const [searchClass, setSearchClass] = useState('search-bar');
  const navigate = useNavigate();
  function searchAllBuses() {
    // setSearchClass('search-bar hide-search');
    navigate("/search-result?from=chandbali&to=bhubaneswar&doj=10/02/2025");
  }
  return (<>
    <div className="searchbus-container" >
      <h3 style={{ textAlign: 'center', fontSize: '50px', color: 'white', margin: '0', paddingTop: '50px' }}>
        Discover The Best Bus Routes and Schedule...
      </h3>
      <div style={{ width: '100%', height: '25vh', display: 'flex', justifyContent: 'center', marginTop: '55px' }}>
        <div className={searchClass}>
          <div className='from-pannel' style={{ width: '27%', minWidth: '200px', height: '100px', backgroundColor: 'rgb(255 255 255)', borderRadius: '30px 0 0 30px', borderRight: '1px solid #d4d4d4', display: 'flex', alignItems: 'center' }}>
            <div style={{ padding: '10px 0 10px 20px', width: '20%', minWidth: '50px' }}>
              <i class="fa-solid fa-bus-simple" style={{ fontSize: '25px', backgroundColor: 'white', position: 'relative', zIndex: '2' }}></i><i class="fa-solid fa-person-walking fa-flip-horizontal" style={{ fontSize: '25px', color: 'gray', position: 'relative', left: '-1px', zIndex: '1' }}></i>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
              <label>From</label>
              <SearchInput
                placeholder=""
                style={{ border: 'none', outline: 'none', fontSize: '15px', fontWeight: '600' }}
              />
            </div>
          </div>
          <div className='swap' style={{ position: 'relative' }}>

            <ConfigProvider
              theme={{
                token: {
                  /* here is your global tokens */
                  zIndexPopupBase:1
                },
              }}
            >
              <FloatButton
          zIndexPopupBase='1'
            icon={<span class="material-symbols-outlined" style={{ color: 'gray',zIndex:'10' }}>
              sync_alt
            </span>}
            type="default"
            style={{
              insetInlineEnd: 94,
              position: 'absolute',
              left: '-20px',
              top: '30px'
            }}
          />
            </ConfigProvider>

          </div>
          <div className='to-pannel' style={{ width: '27%', minWidth: '200px', height: '100px', backgroundColor: 'rgb(255 255 255)', borderRight: '1px solid #d4d4d4', display: 'flex', alignItems: 'center' }}>
            <div style={{ padding: '10px 0 10px 25px', width: '20%', minWidth: '50px' }}>
              <i class="fa-solid fa-bus-simple" style={{ fontSize: '25px', backgroundColor: 'white', position: 'relative', zIndex: '2' }}></i><i class="fa-solid fa-person-running" style={{ fontSize: '25px', color: 'gray', position: 'relative', left: '-5px', zIndex: '1' }}></i>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
              <label>To</label>
              <SearchInput
                placeholder=""
                style={{ border: 'none', outline: 'none', fontSize: '15px', fontWeight: '600' }}
              />
            </div>

          </div>
          <div className='date-pannel' style={{ width: '27%', minWidth: '200px', height: '100px', backgroundColor: 'rgb(255 255 255)', borderRight: '1px solid #d4d4d4', display: 'flex', alignItems: 'center' }}>
            <div style={{ padding: '10px 0 10px 25px', width: '20%', minWidth: '50px' }}>
              <i class="fa-regular fa-calendar-days" style={{ fontSize: '25px', backgroundColor: 'white', position: 'relative', zIndex: '2' }}></i>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
              <DatePicker suffixIcon='' superNextIcon='' superPrevIcon='' popupStyle='' inputReadOnly='true' size='large' defaultValue='' format={dateFormatList} placeholder='' style={{ fontSize: '25px', fontWeight: '600' }} />
            </div>
          </div>
          <div className='button-pannel' onClick={searchAllBuses}>
            <h2>SEARCH BUSES</h2>
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default SearchBus;