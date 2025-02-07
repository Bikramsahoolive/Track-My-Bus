import './searchResult.css';
import Buslist from '../../components/bus-list/buslist';
import FilterResult from '../../components/filter-result/filterResult';
function SearchResult(){

    return(
        <div style={{width:'100%',height:'90vh',backgroundColor:'#e7e3e3'}}>
            <div className='search-pannel'>
                
            </div>

            <div className='main-container'>
                <div className='filter'>
                    <div className='filter-container'>
                      <FilterResult/>
                    </div>

                </div>

                <div className='result'>
                    <div className='result-content'>
                        <Buslist/>
                        <Buslist/>
                        <Buslist/>
                        <Buslist/>
                        <Buslist/>
                        <Buslist/>
                        <Buslist/>
                        <Buslist/>
                        <Buslist/>
                        <Buslist/>
                        <Buslist/>
                        <Buslist/>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult;