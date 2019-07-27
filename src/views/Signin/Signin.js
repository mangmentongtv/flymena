import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col,
  Form, FormGroup, Label, Input, FormText, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

export default class Signup extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      repeat_password: ''
    }
  }

  render(){
    return(
      <div>
        <center>
          <div style={{marginTop: 50, width: 400}}>
            <h2 style={{color: '#3498db', marginBottom: 10}}>flymena</h2>
            <Card style={{textAlign: 'left'}}>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" name="email" value={this.state.email} onChange={this.onChangeTxt.bind(this)}/>
                  </FormGroup>
                  <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" name="password" value={this.state.password} onChange={this.onChangeTxt.bind(this)}/>
                  </FormGroup>
                  <Button color="warning" size="lg" onClick={() => this._submit()}>Submit</Button>
                </Form>
              </CardBody>
            </Card>
          </div>
        </center>
      </div>
    )
  }

  _submit() {
    window.location.href = '#/';
  }

  onChangeTxt(e) {
    this.setState({[e.target.name]: e.target.value});
  }

}
