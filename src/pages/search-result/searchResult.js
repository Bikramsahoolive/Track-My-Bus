import './searchResult.css';
import Buslist from '../../components/bus-list/buslist';
import FilterResult from '../../components/filter-result/filterResult';


import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { useSearchParams  } from 'react-router-dom';


const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
    label: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <UserOutlined style={{ marginRight: 8 }} />
        {str.repeat(repeat)}
      </div>
    ),
  });


function SearchResult() {

    const [searchParams] = useSearchParams();

    const fromParam = searchParams.get('from');
    const toParam = searchParams.get('to');
    const dojParam = searchParams.get('doj');
    console.log(fromParam,toParam,dojParam); //using this params for search bus.


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
                <AutoComplete
                    prefix={<UserOutlined />}
                    defaultValue={'Bhubaneswar'}
                    notFoundContent={'No Data Found!'}
                    allowClear
                    options={options}
                    style={{
                        width: 200,
                    }}
                    onSelect={onSelect}
                    onSearch={(text) => setOptions(getPanelValue(text))}
                    placeholder="input here"
                />

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
        </div>
    )
}

export default SearchResult;