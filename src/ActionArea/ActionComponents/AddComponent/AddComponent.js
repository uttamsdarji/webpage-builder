import React from 'react';
import './AddComponent.scss';
import {Modal, Button, Form, Col, OverlayTrigger, Popover, ListGroup, Tooltip} from 'react-bootstrap';
import options from './cssStyles';

export default class AddComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      text: "",
      componentName: "",
      optionsAdded: [],
      optionsSelected: [],
      moreStyleOptions: {...options},
      showMoreStyles: false,
      searchValue: "",
      searchedOptions: {}
    }
  }
  toggleModal = (flag) => {
    this.setState({
      showModal: flag,
      searchedOptions: {},
      searchValue: ""
    })
  }
  onFormChange = (e,field) => {
    this.setState({
      [field]: e.target.value ? e.target.value : undefined
    })
  }
  styleOptionSelect = (option) => {
    let optionsSelected = [...this.state.optionsSelected]
    if(optionsSelected.indexOf(option) == -1) {
      optionsSelected.push(option)
    } else {
      optionsSelected = optionsSelected.slice(0,optionsSelected.indexOf(option)).concat(optionsSelected.slice(optionsSelected.indexOf(option)+1))
    }
    this.setState({
      optionsSelected
    })
  }
  addStyles = () => {
    let moreStyleOptions = this.state.moreStyleOptions;
    let optionsAdded = [...this.state.optionsAdded];
    this.state.optionsSelected.forEach((option) => {
      if(moreStyleOptions.hasOwnProperty(option)) {
        delete moreStyleOptions[option]
      }
    })
    optionsAdded = optionsAdded.concat(this.state.optionsSelected);
    this.setState({
      optionsAdded,
      moreStyleOptions,
      optionsSelected: [],
      showMoreStyles: false,
      searchedOptions: {},
      searchValue: ""
    })
  }
  removeStyle = (option) => {
    let moreStyleOptions = {...this.state.moreStyleOptions}
    let optionsAdded = [...this.state.optionsAdded]
    moreStyleOptions[option] = options[option];
    optionsAdded = optionsAdded.slice(0,optionsAdded.indexOf(option)).concat(optionsAdded.slice(optionsAdded.indexOf(option)+1))
    this.setState({
      optionsAdded,
      moreStyleOptions,
      option: undefined
    })
  }
  handleSearchChange = (e) => {
    this.setState({
      searchValue: e.target ? e.target.value : ""
    }, () => this.searchStyles(this.state.searchValue))
  }
  searchStyles = (value) => {
    if(value) {
      let moreStyleOptions = {...this.state.moreStyleOptions}
      let searchedOptions = {}
      Object.keys(moreStyleOptions).forEach((key) => {
        if(key.includes(value)) {
          searchedOptions[key] = moreStyleOptions[key]
        }
      })
      this.setState({
        searchedOptions
      })
    }
  }
  moreStylePopover = () => {
    let data = this.state.searchValue ? this.state.searchedOptions : this.state.moreStyleOptions
    return(
      <Popover id="more-styles-popover">
        <Popover.Title as="h3">Add More Styles
        <div className="search-holder">
          <input placeholder="Search Styles" type="text" name="name" id="name" className="form-control input-md" value={this.state.searchValue} onChange={this.handleSearchChange} autoComplete={'off'} />
        </div>
        </Popover.Title>
        <Popover.Content>
          {data && Object.keys(data).length > 0 &&
            <React.Fragment>
            <ListGroup>
              {Object.keys(data).map((option,index) => {
                let checked = this.state.optionsSelected.indexOf(option) > -1;
                return (
                  <ListGroup.Item key={index} onClick={()=>this.styleOptionSelect(option)}>{data[option]}<Form.Check aria-label={option} inline onChange={()=>this.styleOptionSelect(option)} checked={checked}/></ListGroup.Item>
                )
              })}
            </ListGroup>
            </React.Fragment>
          }
        </Popover.Content>
        {this.state.optionsSelected.length > 0 &&
          <Button variant="success" onClick={()=>this.addStyles()} size="sm">Add Styles</Button>
        }
      </Popover>
    );
  }
  createComponent = () => {
    let {className, text, componentName, id} = this.state
    let styleKeys = (Object.keys(options))
    styleKeys.push("width","height")
    styleKeys.filter((key) => this.state[key] != undefined);
    let style={}
    let pxInclude = ["width","height","fontSize","lineHeight"];
    styleKeys.forEach((key) => {
      style[key] = this.state[key];
    })
    style.position="absolute";
    style.top = this.props.position.y+'px';
    style.left = this.props.position.x+'px';
    let container = <div style={style} id={id} className={className} dangerouslySetInnerHTML={{ __html: text }}></div>
    this.props.createComponent(container,id,componentName);
    styleKeys.forEach((key) => {
      this.setState({
        [key]: undefined
      })
    })
    this.setState({
      text: "",
      componentName: "",
      className: ""
    })
    this.toggleModal(false)
  }
  render() {
    let {optionsAdded, moreStyleOptions} = this.state;
    return (
      <React.Fragment>
        <Button variant="primary" onClick={()=>this.toggleModal(true)}>Add Component</Button>
        <Modal show={this.state.showModal} onHide={()=>this.toggleModal(false)} restoreFocus={false} dialogClassName={"add-component-modal"} enforceFocus={false}>
          <Modal.Header>
            Add Component
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="id">
                  <Form.Label>Id</Form.Label>
                  <Form.Control type="text" placeholder="Enter id (Must be unique)" size="sm" onChange={(e)=>this.onFormChange(e,'id')} autoComplete={'off'}/>
                </Form.Group>
                <Form.Group as={Col} controlId="componentName">
                  <Form.Label>Component Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" size="sm" onChange={(e)=>this.onFormChange(e,'componentName')} autoComplete={'off'}/>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="width">
                  <Form.Label>Width</Form.Label>
                  <Form.Control type="text" placeholder="Enter width" size="sm" onChange={(e)=>this.onFormChange(e,'width')} autoComplete={'off'}/>
                  <Form.Text className="text-muted">
                    in px
                  </Form.Text>
                </Form.Group>
                <Form.Group as={Col} controlId="height">
                  <Form.Label>Height</Form.Label>
                  <Form.Control type="text" placeholder="Enter height" size="sm" onChange={(e)=>this.onFormChange(e,'height')} autoComplete={'off'}/>
                  <Form.Text className="text-muted">
                    in px
                  </Form.Text>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="text">
                  <Form.Label>Content</Form.Label>
                  <Form.Control type="text" placeholder="Enter text or HTML snippet" size="sm" onChange={(e)=>this.onFormChange(e,'text')} autoComplete={'off'}/>
                </Form.Group>
                <Form.Group as={Col} controlId="className">
                  <Form.Label>Class Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter class name" size="sm" onChange={(e)=>this.onFormChange(e,'className')} autoComplete={'off'}/>
                </Form.Group>
              </Form.Row>
              {
                optionsAdded && optionsAdded.length > 0 && !!optionsAdded.length%2 &&
                  optionsAdded.map((option,index) => {
                    let type1 = "text";
                    let type2 = "text";
                    {/* if(["fontSize","fontWeight","lineHeight"].indexOf(option) > -1) {
                      type1 = "number"
                    }
                    if(["fontSize","fontWeight","lineHeight"].indexOf(optionsAdded[index+1]) > -1) {
                      type2 = "number"
                    } */}
                    if(index%2 == 0 && index != optionsAdded.length-1) {
                      return (
                        <Form.Row>
                          <Form.Group as={Col} controlId={option}>
                            <Form.Label>{options[option]}
                              <OverlayTrigger placement="top" overlay={<Tooltip>Remove Style</Tooltip>}>
                                <i className="far fa-trash-alt" onClick={()=>this.removeStyle(option)}></i>
                              </OverlayTrigger>
                            </Form.Label>
                            <Form.Control type={type1} placeholder={`Enter ${option}`} size="sm" onChange={(e)=>this.onFormChange(e,option)} autoComplete={'off'}/>
                          </Form.Group>
                          <Form.Group as={Col} controlId={optionsAdded[index+1]}>
                            <Form.Label>{options[optionsAdded[index+1]]}
                              <OverlayTrigger placement="top" overlay={<Tooltip>Remove Style</Tooltip>}>
                                <i className="far fa-trash-alt" onClick={()=>this.removeStyle(optionsAdded[index+1])}></i>
                              </OverlayTrigger>
                            </Form.Label>
                            <Form.Control type={type2} placeholder={`Enter ${optionsAdded[index+1]}`} size="sm" onChange={(e)=>this.onFormChange(e,optionsAdded[index+1])} autoComplete={'off'}/>
                          </Form.Group>
                        </Form.Row>
                      )
                    } else if(index%2 == 0 && index == optionsAdded.length-1){
                      return (
                        <Form.Group controlId={option}>
                          <Form.Label>{options[option]}
                            <OverlayTrigger placement="top" overlay={<Tooltip>Remove Style</Tooltip>}>
                              <i className="far fa-trash-alt" onClick={()=>this.removeStyle(option)}></i>
                            </OverlayTrigger>
                          </Form.Label>
                          <Form.Control type={type1} placeholder={`Enter ${option}`} size="sm" onChange={(e)=>this.onFormChange(e,option)} autoComplete={'off'}/>
                        </Form.Group>
                      )
                    }
                  })
              }
            </Form>
            {moreStyleOptions && Object.keys(moreStyleOptions).length > 0 &&
              <OverlayTrigger trigger="click" placement="right" overlay={this.moreStylePopover()} rootClose={true} show={this.state.showMoreStyles} onHide={()=>this.setState({showMoreStyles:false})}>
                <Button variant="info" size="sm" onClick={()=>this.setState({showMoreStyles:!this.state.showMoreStyles})}>Add More Styles</Button>
              </OverlayTrigger>
            }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>this.toggleModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.createComponent}>
              Create Component
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    )
  }
}