import logo from './logo.svg';
import {Button, Flex} from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import './App.css';
import Landing from './components/landing/landing';
import{Outlet,Link} from 'react-router-dom'
function App() {
  return (
    <>
    <nav style={{display:'flex', position:'fixed',zIndex:'10',top:0, width:'100%',height:'10vh',alignItems:'center',justifyContent:'space-between',padding:'5px 0px', overflow:'hidden',boxShadow:'-1px 1px 5px 2px gray',backgroundColor:'white'}}>
      <h1 style={{padding:'0 10px'}}>Logo</h1>
      <ul style={{display:'flex',listStyle:'none',gap:'20px',cursor:'pointer'}}>
        <li><Link style={{textDecoration:'none'}} to={'/'}>Home</Link></li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <Button type="primary" style={{marginRight:"20px"}}> <LoginOutlined /> Login</Button>
    </nav>
    <div style={{height:'10vh',width:'100%'}}></div>
    <Outlet/>
    </>
  );
}

export default App;
