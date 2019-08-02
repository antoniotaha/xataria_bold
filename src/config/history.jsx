// import { AlertModalLeave } from 'bold-ui'
import { createBrowserHistory } from "history";
// import React from 'react'
// import ReactDOM from 'react-dom'

export const history = createBrowserHistory({
  getUserConfirmation: (message, callback) => {
    // ReactDOM.render(<AlertModalLeave callback={callback} />, document.getElementById('react-modal'))
  }
});
