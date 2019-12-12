import React from 'react';
import AddComponent from './ActionComponents/AddComponent/AddComponentContainer';
import AddBackground from './ActionComponents/AddBackground/AddBackgroundContainer';
import './ActionArea.scss';

export default class ActionArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }
  toggleModal = (flag) => {
    this.setState({
      showModal: flag
    })
  }
  render() {
    return (
      <div className="action-area">
        <div className="title">
          Actions
        </div>
        <div className="action-container">
          <AddComponent />
          <AddBackground />
        </div>
      </div>
    )
  }
}