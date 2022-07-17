import React, { Component } from 'react'

export default class DeleteEmployee extends Component {
    constructor()
    {
        super();
        this.state={
            Employee:[],
            employeeId:'',
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
    this.delete=this.delete.bind(this);
    this.handleChanges=this.handleChange.bind(this);
}
    delete(){
        let employeeId=this.state.employeeId;
        fetch("http://localhost:50733/api/EmployeeDetails/DeleteEmployee/"+employeeId,{
            "method":"DELETE",
            "headers": 
            {
                "content-type":"application/json",
                "accept":"application/json"
            }
    }).then(Response=>Response.json()).then(Response=>{
        alert("data deleted");
})
.catch(err=>{console.warn(err)
})

}
handleChange(changeObject)
    {
        this.setState(changeObject);

        
    }

    render() {
        const {Employee}=this.state;
        return (
            <div className="App-header">
          <form>
            <table  >
            <tr >
                <td ><label >Employee ID</label>
                <input className="spacer" type="text" name="employeeId" onChange={(e)=>this.handleChange({employeeId:e.target.value})}></input></td>
                </tr>
                <tr>
                <td><button type="button" onClick={(e)=>this.delete(e)}>Delete</button>
                
                 </td>
              
              </tr>
            </table>
          
          </form>
          </div>
            
        )
    }
}
