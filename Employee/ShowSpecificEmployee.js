import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';

export default class ShowSpecificEmployee extends Component {
    constructor(){
        super();
        
       this.state={employee:null
    }
    this.show=this.show.bind(this);
    this.handleChanges=this.handleChange.bind(this);
        
    }
    show(e)
    {
        let employeeId=this.state.employeeId;
        fetch("http://localhost:50733​/api​/EmployeeDetails​/ShowSpecific​/"+employeeId).then(res=>res.json())
        .then(result=>{
            this.setState({employee:result})
        })
    }
    componentDidMount()
    {
        this.show();
    }
   
    handleChange(changeObject)
    {
        this.setState(changeObject);    
    }
    render() {
        return (
            // id displayer
          <>  <div className="App-header">
          <form>
            <table > 
            <tr >
                <td ><label >Employee ID</label>
                <input className="spacer" type="text" name="employeeId" onChange={(e)=>this.handleChange({employeeId:e.target.value})}></input></td>
                </tr>
                <tr>
                <td><button type="button" onClick={(e)=>this.show(e)}>show</button>
                
                 </td>
              
              </tr>
            </table> 
          
          </form>
          </div>
            {/* //id displayer */}
            
            <Table striped bordered hover>
                <thead>
                
            <tr>
            <th>Employee Id</th>
            <th>full name</th>
            {/* <th>First Name</th>
            <th>Last Name</th> */}
            <th>E_Mail</th>
            <th>Phone number</th>
            <th>Department</th>
            <th>Date Joined</th>
            <th>Manager Id</th>
            <th>Leave Balance</th>
            <th>Password</th>
            </tr>
           </thead>

            {
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
                }
            </Table>
            </>
        )
    }
}
