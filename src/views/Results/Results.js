import React from 'react';
import {
  Container, Row, Col,
  Form, FormGroup, Label, Input, FormText, Button,
  ListGroup, ListGroupItem, Progress
} from 'reactstrap';
import MainHeader from '../../components/Header/MainHeader.js';

export default class Results extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      departure: '',
      arrival: '',
      date_from: '',
      date_to: '',
      flight_class: 'Economy',
      adult: '1',
      children: '0',
      adult_list: [],
      child_list: []
    }
  }

  componentWillMount() {
    var adult = [];
    for(var i=1; i<=50;i++) {
      adult.push({count: i.toString()});
    }
    this.setState({adult_list: adult});

    var child = [];
    for(var i=0; i<=10;i++) {
      child.push({count: i.toString()});
    }
    this.setState({child_list: child});
  }

  onChangeTxt(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    return(
      <div>
        <MainHeader />
        <Container style={{marginTop: 20}}>
          <Row>
            <Col xs="3">
              <div className="right-content">
                <Form>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label style={{color: '#fff'}}>Departure</Label>
                        <Input type="text" name="departure" value={this.state.departure} placeholder="Ex: Manila" onChange={this.onChangeTxt.bind(this)}/>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label style={{color: '#fff'}}>Arrival</Label>
                        <Input type="text" name="arrival" value={this.state.arrival} placeholder="Ex: Jeddah" onChange={this.onChangeTxt.bind(this)}/>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label style={{color: '#fff'}}>From</Label>
                        <Input type="date" name="date_from" value={this.state.date_from} onChange={this.onChangeTxt.bind(this)}/>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label style={{color: '#fff'}}>To</Label>
                        <Input type="date" name="date_to" value={this.state.date_to} onChange={this.onChangeTxt.bind(this)}/>
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup>
                    <Label style={{color: '#fff'}}>Class</Label>
                    <Input type="select" name="flight_class" value={this.state.flight_class} onChange={this.onChangeTxt.bind(this)}>
                      <option>Economy</option>
                      <option>Business</option>
                      <option>First</option>
                    </Input>
                  </FormGroup>

                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label style={{color: '#fff'}}>Adult</Label>
                        <Input type="select" name="adult" value={this.state.adult} onChange={this.onChangeTxt.bind(this)}>
                          {this.state.adult_list.map((item, k) => {
                            return <option key={k}>{item.count}</option>
                          })}
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label style={{color: '#fff'}}>Children</Label>
                        <Input type="select" name="children" value={this.state.children} onChange={this.onChangeTxt.bind(this)}>
                          {this.state.child_list.map((item, k) => {
                            return <option key={k}>{item.count}</option>
                          })}
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <br />
                  <Button color="light" style={{float: 'right'}} onClick={() => this._search()}>Search</Button>
                </Form>
              </div>
            </Col>
            <Col>
              <ListGroup>
                <ListGroupItem style={{backgroundColor: '#ecf0f1'}}>
                  <Row>
                    <Col xs="3">
                      <img src={require('../../assets/img/image3.jpg')} className="imgWrapper"/>
                    </Col>
                    <Col>
                      <h3>Destination</h3>
                      <br/>
                      <Row>
                        <Col xs="3" style={{textAlign: 'right'}}>
                          <h4>05:15</h4>
                          MNL
                        </Col>
                        <Col style={{textAlign: 'center'}}>
                          <span style={{fontSize: 12}}>13h 15</span>
                          <Progress value="5" max="5" color="success"/>
                          <span style={{color: 'red', fontSize: 12}}>1 stop</span>
                        </Col>
                        <Col xs="3">
                          <h4>23:30</h4>
                          JED
                        </Col>
                      </Row>
                    </Col>
                    <Col xs="3" style={{textAlign: 'right'}}>
                      <p style={{color: '#3498db', fontSize: 25, fontWeight: 'bold', marginBottom: 20}}>
                        1,200 SAR
                      </p>
                      <Button color="warning" size="lg" block onClick={() => this._book()}>Book</Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

  _book() {
    
  }
}
