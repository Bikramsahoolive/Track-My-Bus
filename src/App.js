import logo from './logo.svg';
import {Button, Flex} from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import './App.css';
import Landing from './components/landing/landing';

function App() {
  return (
    <div>
    <nav style={{display:'flex', position:'fixed',top:0, width:'100%',alignItems:'center',justifyContent:'space-between',padding:'5px 0px', overflow:'hidden',boxShadow:'-1px 1px 5px 2px gray',backgroundColor:'white',zIndex:'5'}}>
      <h1 style={{padding:'0 10px'}}>Logo</h1>
      <ul style={{display:'flex',listStyle:'none',gap:'20px',cursor:'pointer'}}>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <Button type="primary" style={{marginRight:"20px"}}> <LoginOutlined /> Login</Button>
    </nav>
    <Landing/>
    </div>
  );
}

export default App;
