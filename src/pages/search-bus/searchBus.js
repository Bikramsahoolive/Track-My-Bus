import './searchBus.css';
// import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton, DatePicker, ConfigProvider, AutoComplete } from 'antd';
import React, { useState } from 'react';

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



const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
  label: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <i class="fa-solid fa-tree-city" style={{ marginRight: 8 }}></i>
      {str.repeat(repeat)}
    </div>
  ),
});


function SearchBus() {

  const navigate = useNavigate();
  function searchAllBuses() {
    // console.log(fromValue,toVal);
    if (!fromValue || !toVal || !dateVal) return alert('Invalid Input.');

    navigate(`/search-result?from=${fromValue}&to=${toVal}&doj=${dateVal}`);
  }


  const [fromValue, setFromValue] = useState('');
  const [fromOptions, setFromOptions] = useState([]);
  // const [anotherOptions, setAnotherOptions] = useState([]);
  const getFromPanelValue = (searchText) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  const onFromSelect = (data) => {
    console.log('onSelect', data);
  };
  const onFromChange = (data) => {
    setFromValue(data);
  };



  const [toVal, setToVal] = useState('');
  const [toOptions, setToOptions] = useState([]);
  // const [anotherOptions, setAnotherOptions] = useState([]);
  const getToPanelValue = (searchText) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  const onToSelect = (data) => {
    console.log('onSelect', data);
  };
  const onToChange = (data) => {
    setToVal(data);
  };

  const [dateVal, setDateVal] = useState('');
  const onDateChange = (date, dateString) => {
    // console.log(date, dateString);
    setDateVal(dateString)
  };

  function swapVal() {
    let swap = fromValue
    setFromValue(toVal);
    setToVal(swap);
  }

  return (<>
    <div className="searchbus-container" >
      <h3 style={{ textAlign: 'center', fontSize: '50px', color: 'white', margin: '0', paddingTop: '50px' }}>
        Discover The Best Bus Routes and Schedule...
      </h3>
      <div style={{ width: '100%', height: '25vh', display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <div className="search-bar">
          <div className='from-pannel' style={{ width: '27%', minWidth: '200px', height: '100px', backgroundColor: 'rgb(255 255 255)', borderRadius: '30px 0 0 30px', borderRight: '1px solid #d4d4d4', display: 'flex', alignItems: 'center' }}>
            <div style={{ padding: '10px 0 10px 20px', width: '20%', minWidth: '50px' }}>
              <i class="fa-solid fa-bus-simple" style={{ fontSize: '25px', backgroundColor: 'white', position: 'relative', zIndex: '2' }}></i><i class="fa-solid fa-person-walking fa-flip-horizontal" style={{ fontSize: '25px', color: 'gray', position: 'relative', left: '-1px', zIndex: '1' }}></i>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
              <label>From</label>

              <AutoComplete
                // prefix={<i class="fa-solid fa-bus-simple"></i>}
                // defaultValue={''}
                value={fromValue}
                onChange={onFromChange}
                notFoundContent={'No Data Found!'}
                allowClear
                options={fromOptions}
                size='large'
                onSelect={onFromSelect}
                onSearch={(text) => setFromOptions(getFromPanelValue(text))}
              // placeholder="input here"
              />
            </div>
          </div>
          <div className='swap' style={{ position: 'relative' }}>

            <ConfigProvider
              theme={{
                token: {
                  /* here is your global tokens */
                  zIndexPopupBase: 1
                },
              }}
            >
              <FloatButton
                onClick={swapVal}
                zIndexPopupBase='1'
                icon={<span class="material-symbols-outlined" style={{ color: 'gray', zIndex: '10' }}>
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

              <AutoComplete
                // prefix={<i class="fa-solid fa-bus-simple"></i>}
                // defaultValue={''}
                value={toVal}
                onChange={onToChange}
                notFoundContent={'No Data Found!'}
                allowClear
                options={toOptions}
                size='large'
                onSelect={onToSelect}
                onSearch={(text) => setToOptions(getToPanelValue(text))}
              // placeholder="input here"
              />

            </div>

          </div>
          <div className='date-pannel' style={{ width: '27%', minWidth: '200px', height: '100px', backgroundColor: 'rgb(255 255 255)', borderRight: '1px solid #d4d4d4', display: 'flex', alignItems: 'center' }}>
            <div style={{ padding: '10px 0 10px 25px', width: '20%', minWidth: '50px' }}>
              <i class="fa-regular fa-calendar-days" style={{ fontSize: '25px', backgroundColor: 'white', position: 'relative', zIndex: '2' }}></i>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
              <DatePicker suffixIcon='' superNextIcon='' superPrevIcon='' onChange={onDateChange} popupStyle='' inputReadOnly='true' size='large' defaultValue='' format={dateFormatList} placeholder='' style={{ fontSize: '25px', fontWeight: '600' }} />
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