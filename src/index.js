import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SignUpForm from './Components/SignUpForm';

ReactDOM.render(<SignUpForm />, document.getElementById('root'));
registerServiceWorker();
