import React from 'react';
import './WorkingArea.scss';

export default class WorkingArea extends React.Component {
  componentDidMount() {
    this.workingArea.addEventListener("click", this.getClickPosition, false);
  }
  getClickPosition = (e) => {
    let xPosition = e.clientX;
    let yPosition = e.clientY;
    this.props.setPosition(xPosition,yPosition);
  }
  render() {
    let {components, background} = this.props;
    return (
      <div className="working-area" ref={(section) => this.workingArea = section}>
        {components && components.length > 0 &&
          components.map((component) => {
            return component.component
          })
        }
        {
          (!components || components.length == 0) && (!background || Object.keys(background).length == 0) &&
          <div className="no-component-div">
            Add Components from the Right Panel
          </div>
        }
      </div>
    )
  }
}