import React, { Component } from 'react'
import axios from 'axios';

export default class EditEmp extends Component {
    constructor(){
        super();
        this.state={
            Employee:[],
            employeeid:'',
            firstName:'',
            lastName:'',
            e_Mail:'',
            contactNumber:'',
            department:'',
            dateJoined:'',
            managerId:'',
            leaveBalance:'',
            password:'',
            checkPassword:''
        
        }
        this.editEmp=this.editEmp.bind(this);
        this.handleChanges=this.handleChange.bind(this);
    }
    
    editEmp(e)
    {
        e.preventDefault(this);
        let employeeId=this.state.employeeId;
        axios.patch('http://localhost:50734/api/EmployeeDetails/UpdateEmployee/'+employeeId,{

            firstName:this.state.firstName,
            lastName:this.state.lastName ,
            e_Mail:this.state.e_Mail,
            contactNumber:this.state.contactNumber,
            department:this.state.department,
            dateJoined:this.state.dateJoined ,
            managerId:this.state.managerId,
            leaveBalance:this.state.leaveBalance ,
            password:this.state.password ,
            checkPassword:this.state.checkPassword

    }).then(response=>{
        console.warn(response);
        alert("employee "+employeeId+" updated");
    })
    .catch(error=>{
        alert("error");
    })
    }

    handleChange(changeObject)
    {
        this.setState(changeObject);    
    }

    
    render() {
        
        return (
            
            <><div className="App-header">
          <form>
            <table  >
            <tbody>
            <tr >
                <td ><label >employeeId</label>
                <input className="spacer" type="text" name="employeeId" onChange={(e)=>this.handleChange({employeeId:e.target.value})}></input></td>
                </tr>
              <tr >
                <td ><label >First Name</label>
                <input className="spacer" type="text" name="firstName" onChange={(e)=>this.handleChange({firstName:e.target.value})}></input></td>
                </tr>
                <tr>
                <td ><label >Last Name</label>
                <input className="spacer" type="text" name="lastName" onChange={(e)=>this.handleChange({lastName:e.target.value})}></input></td>
                </tr>
                <tr>
                <td><label >E Mail</label>
                <input className="spacer" type="text" name="e_Mail" onChange={(e)=>this.handleChange({e_Mail:e.target.value})}></input></td>
                </tr>
                <tr>
                <td>
                  <label >Contact Number</label>
                  <input className="spacer" type="text" name="contactNumber"  onChange={(e)=>this.handleChange({contactNumber:e.target.value})}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label >Department</label>
                  <input className="spacer" type="text" name="department"  onChange={(e)=>this.handleChange({department:e.target.value})}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label >dateJoined</label>
                  <input className="spacer" type="date" name="dateJoined"  onChange={(e)=>this.handleChange({dateJoined:e.target.value})}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label >Manager id</label>
                  <input className="spacer" type="text" name="managerId"  onChange={(e)=>this.handleChange({managerId:e.target.value})}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label >leaveBalance</label>
                  <input className="spacer" type="text" name="leaveBalance"  onChange={(e)=>this.handleChange({leaveBalance:e.target.value})}></input>
                </td>
              </tr>
              <tr>
                <td>
                  <label >password</label>
                  <input className="spacer" type="password" name="password"  onChange={(e)=>this.handleChange({password:e.target.value})} ></input>
                  </td>
              </tr>
              <tr>
                <td>
                  <label >check password</label>
                  <input className="spacer" type="password"  name="checkPassword"  onChange={(e)=>this.handleChange({checkPassword:e.target.value})}></input>
                </td>
              </tr>        
              <tr>
                <td><button type="button" onClick={this.editEmp}>signup</button> 
                </td>
              </tr>
              </tbody>
            </table>
          
          </form>
          </div>
          </> 
          

          
        );
        

        }
}
