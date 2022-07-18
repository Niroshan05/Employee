import axios from 'axios';
import React, { Component } from 'react'

export default class DeleteEmp extends Component {
    constructor()
    {
        super();
        this.state={
            
            employeeId:''
            
    }
    this.delete=this.delete.bind(this);
    
}
    delete(){
        let employeeId=this.state.employeeId;
        axios.delete('http://localhost:50734/api/EmployeeDetails/DeleteEmployee/'+employeeId)
       .then(Response=>{
        alert("data deleted");
})
.catch(err=>{
    alert(err);
})

}

    render() {
        
        return (
            <div className="App-header">
          <form>
            <table  >
            <tr >
                <td ><label >Employee ID</label>
                <input className="spacer" type="text" name="employeeId" onChange={(e)=>this.setState({employeeId:e.target.value})}></input></td>
                </tr>
                <tr>
                <td><button type="button" onClick={this.delete}>Delete</button>
                
                 </td>
              
              </tr>
            </table>
           
          </form>
          </div>
            
        )
    }
}
