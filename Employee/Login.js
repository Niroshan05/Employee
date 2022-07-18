import axios from 'axios';
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'; 



export default class Login extends Component {
    constructor(){
        super();
        this.state={
        employee:[],
        e_Mail:'',
        password:''
        }
        this.Login=this.Login.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    Login(e){
        e.preventDefault();
        let e_Mail=this.state.e_Mail;
        let password=this.state.password;
        axios.get('http://localhost:50734/api/EmployeeDetails/Login/'+e_Mail+'/'+password)
        .then(res=>res)
        .then(result=>{
            console.log(result);
            alert(result);
            if(result=1){
                alert("Valid");
                window.location="/ShowAllEmp";
              }
              else{
                alert("InValid");
              }
        })
            .catch(err=>{
                console.log(err);
                alert(err);
            });
    }
    handleChange(e)
    {
        this.setState(e);    
    }
    render() {
        return (
             <div className="App-header">
                 
                 <Card  style={{ height:'22rem',width:'23rem'  }} >
                 <Card.Header className="text-center">Sign in</Card.Header>
                 <Card.Body>
            <form>
            <Form.Group className="mb-0" controlId="formGroupEmail">
            <Form.Label >Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="e_Mail" onChange={(e)=>this.handleChange({e_Mail:e.target.value})} /><br/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" onChange={(e)=>this.handleChange({password:e.target.value})} /><br/>
            </Form.Group>
      <Button  variant="danger" onClick={this.Login}>Sign in</Button>

             
            
            </form>
            </Card.Body>
            </Card>
            
            </div>
            
        )
    }
}
