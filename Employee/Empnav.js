import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import ShowAllEmp from './ShowAllEmp';
import AddEmployee from './AddEmployee';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UpdateEmployee from './/UpdateEmployee';
import DeleteEmployee from './DeleteEmployee';
import ShowSpecificEmployee from './ShowSpecificEmployee';

export default function Empnav() {
    return (
        <>
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
                      <Link className="nav-link" to={'/ShowSpecificEmployee'}>
                        showw specific emp
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/AddEmployee'}>
                        Sign-up
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/UpdateEmployee'}>
                        edit Emp profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/DeleteEmployee'}>
                        delete Emp profile
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              </div>
              
            </nav>
             </Navbar>
        
          <Routes>
            <Route path='/ShowAllEmp' element={<ShowAllEmp/>}></Route>
            <Route path='/AddEmployee' element={<AddEmployee/>}></Route>
            <Route path='/UpdateEmployee' element={<UpdateEmployee/>}></Route>
            <Route path='/DeleteEmployee' element={<DeleteEmployee/>}></Route>
            <Route path='/ShowSpecificEmployee' element={<ShowSpecificEmployee/>}></Route>
         
          </Routes>
    
        </div>
        </BrowserRouter>
        </>
    );
}
