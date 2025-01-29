import React from 'react';
import { Button, Select } from 'antd';

function Landing(){
    function navigate(){
        alert('clicked');
    }
    return(

        <>
        <div style={{display:'flex', width:'100%',marginTop:'90px'}}>
            <div style={{width:'50%',borderRadius: "30px",backgroundColor: "#b6b644",margin: "21px",padding:'100px'}}>
            <span>
            <h1 style={{fontSize:'60px'}}>Book Your Bus Today</h1>
            Stay on track with real time bus timings to plan your journey with confidence. <br></br>
            Never miss a bus again !!!
            </span>
            <Button onClick={navigate} type="default" style={{backgroundColor:'green',color:'white',border:'none',marginTop:'20px'}} block>
      Explore
    </Button>
            </div>
            <div style={{width:'50%'}}>
                <img src="https://i.pinimg.com/736x/d3/ab/7e/d3ab7e69dd4ed4daca74ee06633cc084.jpg"></img>
            </div>
        </div>

        <div style={{width:'100%'}}>
            <h1 style={{fontSize:'50pxs',textAlign:'center',fontSize:'50px'}}>
                Discover The Best Bus Routes and Schedule...
            </h1>
            <div style={{backgroundColor:'whitesmoke',width:'100%'}}></div>
        </div>
        </>
    );
}

export default Landing;
