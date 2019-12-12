import React from 'react';
import WorkingArea from '../WorkingArea/WorkingAreaContainer';
import ActionArea from '../ActionArea/ActionArea';
import './Home.scss';

function App() {
  return (
    <div className="page-container">
      <div className="working-area-container">
        <WorkingArea/>
      </div>
      <div className="action-area-container">
        <ActionArea/>
      </div>
    </div>
  );
}

export default App;
