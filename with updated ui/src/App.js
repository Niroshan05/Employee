
import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import ShowAllEmp from './Employee/ShowAllEmp';
import SearchbyId from './Employee/SearchbyId';
import CreateEmp from './Employee/CreateEmp';
import EditEmp from './Employee/EditEmp';
import DeleteEmp from './Employee/DeleteEmp';
import Login from './Employee/Login';
 
function App() {
  return (
    <>
    <div style={{ 
      
      
    }}>
    <BrowserRouter> 
    <div className="App"> 
    <Navbar bg="dark" variant="dark">
        <nav className="me-auto">
              <div className="collapse navbar-collapse">
                <Link className="navbar-brand" to={'/Login'}>
                     LMS 
                </Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={'/ShowAllEmp'}>
                        All emp
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/SearchbyId'}>
                        show specific emp
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/CreateEmp'}>
                        Sign-up
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/EditEmp'}>
                        edit Emp profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/DeleteEmp'}>
                        delete Emp profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={'/Login'}>
                        Sign-in
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              </div>
              
            </nav>
             </Navbar>
      <Routes>
        <Route path="/ShowAllEmp" element={<ShowAllEmp/>}></Route>
        <Route path="/SearchbyId" element={<SearchbyId/>}></Route>
        <Route path="/CreateEmp" element={<CreateEmp/>}></Route>
        <Route path="/EditEmp" element={<EditEmp/>}></Route>
        <Route path="/DeleteEmp" element={<DeleteEmp/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
