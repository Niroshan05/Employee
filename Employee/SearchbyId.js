import axios from 'axios';
import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';

export default class SearchbyId extends Component {
    constructor(){
        super();
        this.state={
            // employee:[],
            employeeId: '',
            firstName: '',
            lastName: '',
            e_Mail: '',
            contactNumber: '',
            department: '',
            dateJoined: '',
            managerId: '',
            leaveBalance: '',
            password: ''         
        }
        this.SearchById=this.SearchById.bind(this);
    }
    SearchById(e){
        e.preventDefault();
        let employeeId=this.state.employeeId;
        axios.get('http://localhost:50734/api/EmployeeDetails/ShowSpecific/'+employeeId)
        .then(Response=>{
            this.setState({
                employeeId:Response.data.employeeId,
                firstName:Response.data.firstName,
                lastName:Response.data.lastName,
                e_Mail:Response.data.e_Mail,
                contactNumber:Response.data.contactNumber,
                department:Response.data.department,
                dateJoined:Response.data.dateJoined,
                managerId:Response.data.managerId,
                leaveBalance:Response.data.leaveBalance,
                password:Response.data.password 
            })

        })
    }
    render() {
        const{employeeId}=this.state;
        const{firstName}=this.state;
        const{lastName}=this.state;
        const{e_Mail}=this.state;
        const{contactNumber}=this.state;
        const{department}=this.state;
        const{dateJoined}=this.state;
        const{managerId}=this.state;
        const{leaveBalance}=this.state;
        const{password}=this.state;
        return (
            <>  <div className="App-header">
                <Card>
                    <Card.Body>
            <form>
              <table > 
                  <thead>
              <tr >
                  <td ><label >Employee ID</label>
                  <input className="spacer" type="text" name="employeeId" onChange={(e)=>this.setState({employeeId:e.target.value})}></input></td>
                  </tr>
                  <tr>
                  <td><Button variant="danger" onClick={(e)=>this.SearchById(e)}>search</Button>
                  
                   </td>
                
                </tr>
                </thead>
              </table> 
            
            </form>
            </Card.Body>
            </Card>
            </div >
            <div>
              {/* //id displayer */}
              <Card>
              <Table striped bordered hover >
                  <thead>
                  
              <tr>
              <th>Employee Id</th>
              <th>full name</th>
              
              <th>E_Mail</th>
              <th>Phone number</th>
              <th>Department</th>
              <th>Date Joined</th>
              <th>Manager Id</th>
              <th>Leave Balance</th>
              <th>Password</th>
              </tr>
             </thead>
             <tbody>
                 <tr>
                     <td>{employeeId}</td>
                     <td>{firstName+"  "+lastName}</td>
                     <td>{e_Mail}</td>
                     <td>{contactNumber}</td>
                     <td>{department}</td>
                     <td>{dateJoined}</td>
                     <td>{managerId}</td>
                     <td>{leaveBalance}</td>
                     <td>{password}</td>
                 </tr>
             </tbody>
             
  
              {/* {
              this.state.employee?this.state.employee.map(x=>
                  <tbody>
                  <tr>
                      
                  <td> {x.employeeId} </td>
                  <td>{x.firstName+"  "+x.lastName}</td>
                  
                  <td> {x.e_Mail} </td>
                  <td> {x.contactNumber} </td>
                  <td> {x.department} </td>
                  <td> {x.dateJoined} </td>
                  <td>{x.managerId}</td>
                  <td> {x.leaveBalance} </td>
                  <td> {x.password} </td>
                  </tr>
                  </tbody>
                  
                  ):null
                  } */}
              </Table>
              </Card>
              </div>
              </>
        )
    }
}
