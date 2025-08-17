import { Sidenav, Nav } from 'rsuite';

const Sidebar = () => (
  <div>
    <Sidenav defaultOpenKeys={['3', '4']}>
      <Sidenav.Body>
        <Nav activeKey="1">
          <Nav.Item eventKey="1" > مشاهده پرونده ها </Nav.Item>
          <Nav.Item eventKey="2" >  </Nav.Item>
        
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  </div>
);


export default Sidebar