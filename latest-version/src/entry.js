import React from 'react';
import ReactDOM from 'react-dom';
import Genesis from './genesis.component.js';

function renderGenesis(props = {}) {
  ReactDOM.render(<Genesis {...props} />, document.getElementById('content'));
}

// Initial render
renderGenesis({date: new Date()});

window.renderGenesis = renderGenesis;
