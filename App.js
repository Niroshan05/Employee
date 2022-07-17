import './App.css';
import ShowAllEmp from './Employee/ShowAllEmp';
import AddEmployee from './Employee/AddEmployee';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UpdateEmployee from './Employee/UpdateEmployee';
import DeleteEmployee from './Employee/DeleteEmployee';
import ShowSpecificEmployee from './Employee/ShowSpecificEmployee';
import AddCeo from './Ceo/AddCeo';
import ShowAllCeo from './Ceo/ShowAllCeo';
import UpdateCeo from './Ceo/UpdateCeo';
import DeleteCeo from './Ceo/DeleteCeo';
import ShowSpecificCeo from './Ceo/ShowSpecificCeo';
import ShowAllManager from './Manager/ShowAllManager';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import { Form } from 'react-bootstrap';
import Empnav from './Employee/Empnav';

function App() {
  return (
   <>
   
   <Empnav/>
    <BrowserRouter>
    <div className="App">
    <Navbar bg="dark" variant="dark">
    <nav className="me-auto">
          <div className="collapse navbar-collapse">
            <Link className="navbar-brand" to={'/sign-in'}>
              RemoteStack
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/ShowAllEmp'}>
                    show all emp
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/ShowAllCeo'}>
                    showw all ceo
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/ShowAllManager'}>
                    show all manager
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/ShowSpecificEmployee'}>
                    showw specific
                  </Link>
                </li>
              </ul>
            </div>
          </div>
         
        </nav>
         </Navbar>
    {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">LMS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href='/ShowAllEmp'>All Employees</Nav.Link>
            <Nav.Link href="Contactus">Contactus</Nav.Link>
            <Nav.Link href="Login">Login</Nav.Link>
            <Nav.Link href="AddEmployee">Add new</Nav.Link>
            <Nav.Link href="UpdateEmployee">Update Employee</Nav.Link>
            <Nav.Link href="DeleteEmployee">delete Employee</Nav.Link>
            <Nav.Link href="ShowSpecificEmployee">show specific Employee</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar> */}
      <Routes>
        <Route path='/ShowAllEmp' element={<ShowAllEmp/>}></Route>
        <Route path='/AddEmployee' element={<AddEmployee/>}></Route>
        <Route path='/UpdateEmployee' element={<UpdateEmployee/>}></Route>
        <Route path='/DeleteEmployee' element={<DeleteEmployee/>}></Route>
        <Route path='/ShowSpecificEmployee' element={<ShowSpecificEmployee/>}></Route>
        <Route path='/AddCeo' element={<AddCeo/>}></Route>
        <Route path='/ShowAllCeo' element={<ShowAllCeo/>}></Route>
        <Route path='/UpdateCeo' element={<UpdateCeo/>}></Route>
        <Route path='/DeleteCeo' element={<DeleteCeo/>}></Route>
        <Route path='/ShowSpecificCeo' element={<ShowSpecificCeo/>}></Route>
        <Route path='/ShowAllManager' element={<ShowAllManager/>}></Route>
      </Routes>

    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
