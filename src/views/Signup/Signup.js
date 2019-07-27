import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col,
  Form, FormGroup, Label, Input, FormText, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

export default class Signup extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      modalIAm: true,
      imAm: '',
      fullname: '',
      mobile: '',
      email: '',
      password: '',
      repeat_password: ''
    }
  }

  render(){
    return(
      <div>
        <center>
          <div style={{marginTop: 50, width: 400, marginBottom: 40}}>
            <h2 style={{color: '#3498db', marginBottom: 10}}>flymena</h2>
            <Card style={{textAlign: 'left'}}>
              <CardBody>
                <Form>
                  <FormGroup>
                    <Label>I Am</Label>
                    <Input type="text" name="imAm" value={this.state.imAm} disabled/>
                  </FormGroup>
                  <FormGroup>
                    <Label>Fullname</Label>
                    <Input type="text" name="fullname" value={this.state.fullname} onChange={this.onChangeTxt.bind(this)}/>
                  </FormGroup>
                  <FormGroup>
                    <Label>Mobile</Label>
                    <Input type="mobile" name="mobile" value={this.state.mobile} onChange={this.onChangeTxt.bind(this)}/>
                  </FormGroup>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" name="email" value={this.state.email} onChange={this.onChangeTxt.bind(this)}/>
                  </FormGroup>
                  <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" name="password" value={this.state.password} onChange={this.onChangeTxt.bind(this)}/>
                  </FormGroup>
                  <FormGroup>
                    <Label>Repeat Password</Label>
                    <Input type="password" name="repeat_password" value={this.state.repeat_password} onChange={this.onChangeTxt.bind(this)}/>
                  </FormGroup>
                  <Button color="warning" size="lg" onClick={() => this._submit()}>Submit</Button>
                  <br/><br/>
                  <p>Alreadt have an account? <a href="#/signin">Sign in</a></p>
                </Form>
              </CardBody>
            </Card>
          </div>
        </center>
        {this._renderModal()}
      </div>
    )
  }

  _renderModal() {
    return(
      <Modal isOpen={this.state.modalIAm} toggle={this.toggle.bind(this)}>
        <ModalHeader toggle={this.toggle.bind(this)}>I Am</ModalHeader>
        <ModalBody>
          <center>
            <Row>
              <Col style={{textAlign: 'center'}}>
                <Button color="primary" size="lg" onClick={() => this._choose('Individual')}>Individual</Button>
              </Col>
              <Col style={{textAlign: 'center'}}>
                <Button color="warning" size="lg" onClick={() => this._choose('Agent')}>Agent</Button>
              </Col>
            </Row>
          </center>
        </ModalBody>
      </Modal>
    )
  }

  _submit() {
    window.location.href = '#/';
  }

  _choose(type) {
    this.setState({imAm: type, modalIAm: false});
  }

  onChangeTxt(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  toggle() {
    this.setState(prevState => ({
      modalIAm: !prevState.modalIAm
    }));
  }
}
