import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'; 

export default class EmployeeDashboard extends Component {
    render() {
        let UserName=localStorage.getItem("userName");
        return (<>
        <div><h1>welcome {UserName}</h1></div>
           <div className="center">
           <div >
        <Row xs={1} md={2} className="g-1">
      
      <Col>
        <Card style={{ height:'8rem'  }}>
          
          <Card.Body>
            <Card.Title>My Details</Card.Title>
            <Card.Text>
             <Button href="/Searchbyid">Details</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ height:'8rem'  }}>
          
          <Card.Body>
            <Card.Title>Manager Details</Card.Title>
            <Card.Text>
              <Button>Detail</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      </Row>
      {/* NEW ROW */}
      <Col>
      
        <Card  style={{ height:'8rem'  }}>
          
          <Card.Body>
            <Card.Title>Apply Leave</Card.Title>
            <Card.Text>
              <Button href="/Addleave">Apply</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          
          <Card.Body>
            <Card.Title>My Leave</Card.Title>
            <Card.Text>
              <h3>display u r applied leaves</h3>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
       
            </div></div>
            </>
        )
    }
}
