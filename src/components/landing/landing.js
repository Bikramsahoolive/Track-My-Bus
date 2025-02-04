import React from 'react';
import { Button, Select } from 'antd';
import {Link} from 'react-router-dom'

function Landing(){
    function navigate(){
        alert('clicked');
    }
    return(

        <>
        <div style={{display:'flex', width:'100%'}}>
            <div style={{width:'50%',borderRadius: "30px",backgroundColor: "rgb(68 132 182)",color:'white',margin: "21px",padding:'70px'}}>
            <span >
            <h1 style={{fontSize:'60px'}}>Book Your Bus Today</h1>
            Stay on track with real time bus timings to plan your journey with confidence. <br></br>
            Never miss a bus again !!!
            </span>
            
            <Button  type="default" style={{backgroundColor:'green',color:'white',border:'none',marginTop:'20px'}} block>
            <Link to={'search'}>Track Your Bus</Link>
    </Button>
            </div>
            <div style={{width:'50%', display:'flex',alignItems:'center',justifyContent:'center'}}>
                <img src="https://banner2.cleanpng.com/20180127/ube/av2pxk00y.webp" width={500}></img> //https://banner2.cleanpng.com/20180725/xtl/21a1e435f98afd6c1e577c8b572d2ae4.webp
            </div>
        </div>

        <div style={{width:'100%'}}>
            
            <div style={{backgroundColor:'whitesmoke',width:'100%'}}></div>
        </div>
        </>
    );
}

export default Landing;
