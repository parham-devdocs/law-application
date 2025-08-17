

import { Navbar, Nav,  Button} from 'rsuite';
import ProfileBadge from './profileBadge';
import { FaHome } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
const loggedIn=true
const NavbarComponent = () => (
  <Navbar className=' border-b-2 border-blue-500 px-4 ' style={{backgroundColor:"ButtonFace"}} >
    <Navbar.Brand href="#" className=''><FaHome size={20}/></Navbar.Brand>
    <Nav className=' hidden md:flex' >
      <Nav.Item className=' hover:text-blue-500'  href='/docs'>مشاهده پرونده ها</Nav.Item>
    </Nav>
    <Nav className=' hidden md:flex' >
      <Nav.Item className=' hover:text-blue-500'  href='/profile'>مشاهده پروفایل</Nav.Item>
    </Nav>
    <Nav pullRight className=' flex items-center' >
  {loggedIn ?  <ProfileBadge/> : <Button appearance="primary" className=' flex items-center gap-1 justify-center' startIcon={<MdLogin size={20}/>}  style={{marginTop:"8px"}}>ورود</Button>}   
   {loggedIn && <Nav.Item className=' text-red-500' style={{color:"red"}} >خروج</Nav.Item>}
    </Nav>
    
  </Navbar>
);

export default NavbarComponent

