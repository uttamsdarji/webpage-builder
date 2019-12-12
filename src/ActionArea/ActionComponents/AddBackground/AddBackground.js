import React from 'react';
import './AddBackground.scss';
import {Modal, Button, Form, Col, OverlayTrigger, Popover, ListGroup, Tooltip, Dropdown} from 'react-bootstrap';


export default class AddBackground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showImage: true,
      showColor: false,
      backgroundRepeat: "",
      backgroundAttachment: "",
      backgroundPosition: ""
    }
  }
  toggleModal = (flag) => {
    this.setState({
      showModal: flag
    })
    let styleKeys = ["backgroundRepeat","backgroundImage","backgroundAttachment","backgroundPosition","backgroundColor"];
    styleKeys.forEach((key) => {
      if(this.state[key]) {
        this.setState({
          [key]: ""
        })
      }
    })
  }
  onFormChange = (e,style) => {
    this.setState({
      [style]: e.target.value ? e.target.value : ""
    })
  }
  addBackground = () => {
    let element = document.getElementsByClassName("working-area-container")[0]
    let style = {}
    let styleKeys = ["backgroundRepeat","backgroundImage","backgroundAttachment","backgroundPosition","backgroundColor"];
    styleKeys.forEach((key) => {
      if(this.state[key]) {
        if(key == 'backgroundImage') {
          element.style[key] = `url("${this.state[key]}")`;  
          style[key] = `url("${this.state[key]}")`;
        } else {
          element.style[key] = this.state[key];
          style[key] = this.state[key];
        }
      }
    })
    this.props.addBackground(style);
    this.toggleModal(false)
  }
  render() {
    return (
      <React.Fragment>
        <Button variant="primary" onClick={()=>this.toggleModal(true)}>Add Background</Button>
        <Modal show={this.state.showModal} onHide={()=>this.toggleModal(false)} restoreFocus={false} dialogClassName={"add-background-modal"} enforceFocus={false}>
          <Modal.Header>
            Background
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Check inline label="Image" type="checkbox" id={`inline-chechbox-1`} checked={this.state.showImage} onChange={()=>this.setState({showImage: !this.state.showImage})}/>
              <Form.Check inline label="Color" type="checkbox" id={`inline-chechbox-2`} checked={this.state.showColor} onChange={()=>this.setState({showColor: !this.state.showColor})}/>
              {this.state.showImage &&
              <React.Fragment>
                <Form.Row>
                  <Form.Group as={Col} controlId="image">
                    <Form.Label>Image Url</Form.Label>
                    <Form.Control type="text" placeholder="image url" size="sm" onChange={(e)=>this.onFormChange(e,'backgroundImage')} autoComplete={'off'}/>
                  </Form.Group>
                  <Form.Group as={Col} controlId="repeat">
                    <Form.Label>Background Repeat</Form.Label>
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                       <Form.Control type="text" placeholder="background repeat" value={this.state.backgroundRepeat} size="sm" onChange={(e)=>this.onFormChange(e,'backgroundRepeat')} autoComplete={'off'}/>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={()=>this.setState({backgroundRepeat:"inherit"})}>inherit</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setState({backgroundRepeat:"initial"})}>initial</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setState({backgroundRepeat:"no-repeat"})}>no-repeat</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setState({backgroundRepeat:"repeat"})}>repeat</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setState({backgroundRepeat:"repeat-x"})}>repeat-x</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setState({backgroundRepeat:"repeat-y"})}>repeat-y</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setState({backgroundRepeat:"round"})}>round</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setState({backgroundRepeat:"space"})}>space</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setState({backgroundRepeat:"unset"})}>unset</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} controlId="attachment">
                    <Form.Label>Background Attachment</Form.Label>
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                       <Form.Control type="text" placeholder="background attachment" value={this.state.backgroundAttachment} size="sm" onChange={(e)=>this.onFormChange(e,'backgroundAttachment')} autoComplete={'off'}/>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={()=>this.setState({backgroundAttachment:"inherit"})}>inherit</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setState({backgroundAttachment:"initial"})}>initial</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setState({backgroundAttachment:"fixed"})}>fixed</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setState({backgroundAttachment:"local"})}>local</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setState({backgroundAttachment:"scroll"})}>scroll</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setState({backgroundAttachment:"unset"})}>unset</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>
                  <Form.Group as={Col} controlId="position">
                    <Form.Label>Background Position</Form.Label>
                    <Dropdown>
                      <Dropdown.Toggle id="dropdown-basic">
                       <Form.Control type="text" placeholder="background position" value={this.state.backgroundPosition} size="sm" onChange={(e)=>this.onFormChange(e,'backgroundPosition')} autoComplete={'off'}/>
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={()=>this.setState({backgroundPosition:"inherit"})}>inherit</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setState({backgroundPosition:"initial"})}>initial</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setState({backgroundPosition:"bottom"})}>bottom</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setState({backgroundPosition:"center"})}>center</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setState({backgroundPosition:"left"})}>left</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setState({backgroundPosition:"right"})}>right</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setState({backgroundPosition:"top"})}>top</Dropdown.Item>
                        <Dropdown.Item onClick={()=>this.setState({backgroundPosition:"unset"})}>unset</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Form.Group>
                </Form.Row>
                </React.Fragment>
              }
              {
                this.state.showColor && 
                <Form.Group controlId="color">
                  <Form.Label>Background Color</Form.Label>
                  <Form.Control type="text" placeholder={`Enter color`} size="sm" onChange={(e)=>this.onFormChange(e,"backgroundColor")} autoComplete={'off'}/>
                </Form.Group>
              }
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>this.toggleModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.addBackground}>
              Add Background
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    )
  }
}