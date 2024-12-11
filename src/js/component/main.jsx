import React from 'react'
import ReactDOM from 'react-dom/client'

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// Styles
import '../styles/index.css'

// Components
import Counter from './Counter';
import Button from "./Button";

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Counter />
    <Button />
  </React.StrictMode>
);