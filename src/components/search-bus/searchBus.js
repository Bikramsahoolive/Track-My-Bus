import './searchBus.css';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';
import React, { useState } from 'react';
import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import qs from 'qs';
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
  return (<>
    <div className="searchbus-container" >
      <h3 style={{ textAlign: 'center', fontSize: '50px', color: 'white', margin: '0', paddingTop: '50px' }}>
        Discover The Best Bus Routes and Schedule...
      </h3>
      <div style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className='search-bar'>
          <div className='from-pannel' style={{ width: '25%', height: '100px', backgroundColor: 'rgb(255 255 255)', borderRadius: '30px 0 0 30px', borderRight: '1px solid #d4d4d4', display: 'flex', alignItems: 'center' }}>
            <div style={{ padding: '17px', width: '15%' }}>
              <i class="fa-solid fa-bus-simple" style={{ fontSize: '25px', backgroundColor: 'white', position: 'relative', zIndex: '2' }}></i><i class="fa-solid fa-person-walking fa-flip-horizontal" style={{ fontSize: '25px', color: 'gray', position: 'relative', left: '-1px', zIndex: '1' }}></i>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
              <label>From</label>
              <SearchInput
                placeholder="input search text"
                style={{ border: 'none', outline: 'none', fontSize: '15px', fontWeight: '600' }}
              />
            </div>
          </div>
          <div className='to-pannel' style={{ width: '25%', height: '100px', backgroundColor: 'rgb(255 255 255)', borderRight: '1px solid #d4d4d4', display: 'flex', alignItems: 'center' }}>
            <div style={{ padding: '17px', width: '25%' }}>
              <i class="fa-solid fa-bus-simple" style={{ fontSize: '25px', backgroundColor: 'white', position: 'relative', zIndex: '2' }}></i><i class="fa-solid fa-person-running" style={{ fontSize: '25px', color: 'gray', position: 'relative', left: '-5px', zIndex: '1' }}></i>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
              <label>To</label>
              <SearchInput
                placeholder="input search text"
                style={{ border: 'none', outline: 'none', fontSize: '15px', fontWeight: '600' }}
              />
            </div>

          </div>
          <div className='date-pannel' style={{ width: '25%', height: '100px', backgroundColor: 'rgb(255 255 255)', borderRight: '1px solid #d4d4d4' }}></div>
          <div className='button-pannel' style={{ width: '25%', height: '100px', backgroundColor: 'rgb(78 137 216)', borderRadius: '0px 30px 30px 0', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <h2>SEARCH BUSES</h2>
          </div>

          <FloatButton
            icon={<span class="material-symbols-outlined" style={{ color: 'gray' }}>
              sync_alt
            </span>}
            type="default"
            style={{
              insetInlineEnd: 94,
              position: 'absolute',
              left: '245px',
              top: '30px'
            }}
          />
        </div>
      </div>
    </div>
  </>)
}

export default SearchBus;