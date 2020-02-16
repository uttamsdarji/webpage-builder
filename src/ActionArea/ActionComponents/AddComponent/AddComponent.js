import React from 'react';
import './AddComponent.scss';
import {Modal, Button, Form, Col, OverlayTrigger, Popover, ListGroup, Tooltip} from 'react-bootstrap';
import options from './cssStyles';
// import validateCss from 'css-validator';
// var validateCss = require('css-validator');

export default class AddComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      optionsAdded: [],
      optionsSelected: [],
      moreStyleOptions: {...options},
      showMoreStyles: false,
      searchValue: "",
      searchedOptions: {},
      form: {
        componentName: "",
        text: "",
        shouldClassChange: false,
      }
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
      form : {
        ...this.state.form,
        [field]: e.target.value ? e.target.value : undefined
      }
    })
  }
  validateForm = (form) => {
    let formErrors = []
    for(let field in form) {
      if(field == 'id') {
        if(!this.checkUniqueId(form[field])) {
          formErrors.push(field)
        }
      } else if(["className", "componentName", "text"].indexOf(field) == -1) {
        // validateCss(`${this.camelToSnake(field)}:${form[field]}`,(error,data)=>console.log(error, data))
      }
    }
    return {
      validForm: formErrors.length > 0,
      errorFields: formErrors
    }
  }
  checkUniqueId = (id) => {
    let idList = this.props.components ? this.props.components.map((component) => component.id) : [];
    if(idList.indexOf(id) > -1) {
      return false
    } else {
      return true
    }
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
  camelToSnake = (string) => {
    return string.replace(/[\w]([A-Z])/g, function(m) {
        return m[0] + "-" + m[1];
    }).toLowerCase();
  }
  createComponent = () => {
    let {form} = this.state
    let styleKeys = (Object.keys(options))
    styleKeys.push("width","height")
    styleKeys = styleKeys.filter((key,index) => (form[key] != undefined) && !!form[key]);
    let style={}
    let pxInclude = ["width","height","fontSize","lineHeight"];
    styleKeys.forEach((key) => {
      style[key] = form[key];
    })
    let styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerHTML = `.${form.className} {`;
    styleKeys.forEach((key,index) => {
      styleSheet.innerHTML += `${this.camelToSnake(key)}: ${form[key]};${index == styleKeys.length-1 ? '}':''}`
    })
    document.getElementsByTagName('head')[0].appendChild(styleSheet);
    // style.position="absolute";
    // style.top = this.props.position.y+'px';
    // style.left = this.props.position.x+'px';
    let container = <div style={style} id={form.id} className={form.className} dangerouslySetInnerHTML={{ __html: form.text }}></div>
    this.props.createComponent(container,form.id,form.componentName);
    // styleKeys.forEach((key) => {
    //   this.setState({
    //     [key]: undefined
    //   })
    // })
    this.setState({
      id: ""
    })
    this.toggleModal(false)
  }
  render() {
    let {optionsAdded, moreStyleOptions, form} = this.state;
    let {validForm, errorFields} = this.validateForm(form)
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
                  <Form.Control type="text" placeholder="Enter id (Must be unique)" size="sm" onChange={(e)=>this.onFormChange(e,'id')} autoComplete={'off'} isInvalid={errorFields.indexOf('id') > -1}/>
                </Form.Group>
                <Form.Group as={Col} controlId="componentName">
                  <Form.Label>Component Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" size="sm" onChange={(e)=>this.onFormChange(e,'componentName')} value={form['componentName']} autoComplete={'off'}/>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="width">
                  <Form.Label>Width</Form.Label>
                  <Form.Control type="text" placeholder="Enter width" size="sm" onChange={(e)=>this.onFormChange(e,'width')} autoComplete={'off'} value={form.width} isInvalid={errorFields.indexOf('width') > -1}/>
                  <Form.Text className="text-muted">
                    in px
                  </Form.Text>
                </Form.Group>
                <Form.Group as={Col} controlId="height">
                  <Form.Label>Height</Form.Label>
                  <Form.Control type="text" placeholder="Enter height" size="sm" onChange={(e)=>this.onFormChange(e,'height')} autoComplete={'off'} value={form.height} isInvalid={errorFields.indexOf('height') > -1}/>
                  <Form.Text className="text-muted">
                    in px
                  </Form.Text>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="text">
                  <Form.Label>Content</Form.Label>
                  <Form.Control type="text" placeholder="Enter text or HTML snippet" size="sm" onChange={(e)=>this.onFormChange(e,'text')} autoComplete={'off'} value={form.text}/>
                </Form.Group>
                <Form.Group as={Col} controlId="className">
                  <Form.Label>Class Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter class name" size="sm" onChange={(e)=>this.onFormChange(e,'className')} autoComplete={'off'} value={form.className} isInvalid={errorFields.indexOf('className') > -1}/>
                  <Form.Text className="text-muted">
                    <Form.Check inline label="Should Class Style Update?" type="checkbox" id={`inline-chechbox-1`} checked={form.shouldClassChange} onChange={()=>this.setState({form: {...form, shouldClassChange: !form.shouldClassChange}})}/>
                  </Form.Text>
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
                            <Form.Control type={type1} placeholder={`Enter ${option}`} size="sm" onChange={(e)=>this.onFormChange(e,option)} autoComplete={'off'} value={form[option]} isInvalid={errorFields.indexOf(option) > -1}/>
                          </Form.Group>
                          <Form.Group as={Col} controlId={optionsAdded[index+1]}>
                            <Form.Label>{options[optionsAdded[index+1]]}
                              <OverlayTrigger placement="top" overlay={<Tooltip>Remove Style</Tooltip>}>
                                <i className="far fa-trash-alt" onClick={()=>this.removeStyle(optionsAdded[index+1])}></i>
                              </OverlayTrigger>
                            </Form.Label>
                            <Form.Control type={type2} placeholder={`Enter ${optionsAdded[index+1]}`} size="sm" onChange={(e)=>this.onFormChange(e,optionsAdded[index+1])} autoComplete={'off'} value={form[optionsAdded[index+1]]} isInvalid={errorFields.indexOf(optionsAdded[index+1]) > -1}/>
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
                          <Form.Control type={type1} placeholder={`Enter ${option}`} size="sm" onChange={(e)=>this.onFormChange(e,option)} autoComplete={'off'} value={form[option]} isInvalid={errorFields.indexOf(option) > -1}/>
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
            <Button variant="primary" onClick={this.createComponent} disabled={validForm}>
              Create Component
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    )
  }
}