import './searchResult.css';
import Buslist from '../../components/bus-list/buslist';
import FilterResult from '../../components/filter-result/filterResult';


import React, { useState } from 'react';
import { AutoComplete, ConfigProvider, FloatButton, DatePicker, Button } from 'antd';
// import { dayjs, dateFormat, weekFormat } from '@ant-design/icons';

import { useSearchParams } from 'react-router-dom';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
  label: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <i class="fa-solid fa-tree-city" style={{ marginRight: 8 }}></i>
      {str.repeat(repeat)}
    </div>
  ),
});


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

function SearchResult() {

  const [searchParams] = useSearchParams();

  const fromParam = searchParams.get('from');
  const toParam = searchParams.get('to');
  const dojParam = searchParams.get('doj');
  console.log(fromParam, toParam, dojParam); //using this params for search bus.


  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);
  const [anotherOptions, setAnotherOptions] = useState([]);
  const getPanelValue = (searchText) =>
    !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
  const onSelect = (data) => {
    console.log('onSelect', data);
  };
  const onChange = (data) => {
    setValue(data);
  };

  return (
    <div style={{ width: '100%', height: '90vh', backgroundColor: '#e7e3e3' }}>
      <div className='search-pannel'>
        <div className='search-input' style={{ display: 'flex', justifyContent: 'space-around', width: '50%' }}>
          <AutoComplete
            prefix={<i class="fa-solid fa-bus-simple"></i>}
            defaultValue={'Bhubaneswar'}
            notFoundContent={'No Data Found!'}
            allowClear
            options={options}
            size='large'
            style={{
              width: '600px',
            }}
            onSelect={onSelect}
            onSearch={(text) => setOptions(getPanelValue(text))}
            placeholder="input here"
          />
          <div className='swap' style={{ position: 'relative', margin: '0 30px' }}>
            <ConfigProvider
              theme={{
                token: {
                  /* here is your global tokens */
                  zIndexPopupBase: 1
                },
              }}
            >
              <FloatButton
                zIndexPopupBase='1'
                icon={<span class="material-symbols-outlined" style={{ color: 'gray', zIndex: '10' }}>
                  sync_alt
                </span>}
                type="default"
                shape="square"
                style={{
                  insetInlineEnd: 94,
                  position: 'absolute',
                  left: '-20px',
                  top: '0px'
                }}
              />
            </ConfigProvider>
          </div>


          <AutoComplete
            prefix={<i class="fa-solid fa-location-dot"></i>}
            defaultValue={'Chandbali'}
            notFoundContent={'No Data Found!'}
            allowClear
            options={options}
            size='large'
            style={{
              width: 600
            }}
            onSelect={onSelect}
            onSearch={(text) => setOptions(getPanelValue(text))}
            placeholder="input here"
          />

          <DatePicker suffixIcon=''style={{
            minWidth: '150px',
              margin:'0 10px'
            }} superNextIcon='' prefix={<i class="fa-regular fa-calendar"></i>} superPrevIcon='' popupStyle='' inputReadOnly='true' size='large' defaultValue='' format={dateFormatList} placeholder=''  />

          <Button type='primary' size='large'> Modify</Button>
        </div>


      </div>

      <div className='main-container'>
        <div className='filter'>
          <div className='filter-container'>
            <FilterResult />
          </div>

        </div>

        <div className='result'>
          <div className='result-content'>
            <Buslist />
            <Buslist />
            <Buslist />
            <Buslist />
            <Buslist />
            <Buslist />
            <Buslist />
            <Buslist />
            <Buslist />
            <Buslist />
            <Buslist />
            <Buslist />

          </div>
        </div>
      </div>
      <div style={{width:'100%',height:'2vh', textAlign:'center',color:'#525151'}}> <span>All Rights Reserved to Track My Bus Pvt Ltd © 2025</span> </div>
    </div>
  )
}

export default SearchResult;