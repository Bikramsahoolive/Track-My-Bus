import './searchBus.css';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

function SearchBus() {
    return (<>
        <div className="searchbus-container" >
            <h3 style={{ textAlign: 'center', fontSize: '50px', color: 'white', margin: '0', paddingTop: '50px' }}>
                Discover The Best Bus Routes and Schedule...
            </h3>
            <div style={{ width: '100%', height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='search-bar'>
                    <div className='from-pannel' style={{ width: '25%', height: '100px', backgroundColor: 'rgb(255 255 255)', borderRadius: '30px 0 0 30px', borderRight: '1px solid #d4d4d4' }}>
                    <i class="fa-solid fa-bus-simple"></i><i class="fa-solid fa-person-walking fa-flip-horizontal"></i>
                    </div>
                    <div className='to-pannel' style={{ width: '25%', height: '100px', backgroundColor: 'rgb(255 255 255)', borderRight: '1px solid #d4d4d4' }}>
                    <i class="fa-solid fa-bus-simple"></i><i class="fa-solid fa-person-running"></i>

                    </div>
                    <div className='date-pannel' style={{ width: '25%', height: '100px', backgroundColor: 'rgb(255 255 255)', borderRight: '1px solid #d4d4d4' }}></div>
                    <div className='button-pannel' style={{ width: '25%', height: '100px', backgroundColor: 'rgb(216, 78, 85)', borderRadius: '0px 30px 30px 0', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <h2>SEARCH BUSES</h2>
                    </div>

                    <FloatButton
                        icon={<span class="material-symbols-outlined" style={{ color: 'gray' }}>
                            sync_alt
                        </span>}
                        type="default"
                        style={{
                            insetInlineEnd: 94,
                            position:'absolute',
                            left:'245px',
                            top:'30px'
                        }}
                    />
                </div>
            </div>
        </div>
    </>)
}

export default SearchBus;