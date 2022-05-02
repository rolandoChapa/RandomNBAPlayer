import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBarNBA from './navBarNBA'
import GetNBAData from './GetNBAData'
import './index.css'
import 'flowbite';



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
  	<NavBarNBA />
  	<GetNBAData />
  	
  </React.StrictMode>
)