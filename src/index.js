
import * as React from 'react'
import { useState } from 'react';
import { render } from 'react-dom'


import './style.scss';
import logo from './NCTR.png';

const marginStyle = {
  margin: "20px",
};

const marginStyle2 = {
margin: "20px",
//  textAlign: "right",
};

const divStyle = {
display: "flex",
flexDirection: "row",
justifyContent: "space-between"
}

const username = 'MartinJackson'

const App = () => {
  const [show, setShow] = useState(false);

  return (
              <div style={divStyle}>
                  <img src={logo} style={marginStyle} />
                  <h2 style={marginStyle2}>{'Welcome: ' + username}</h2>
              </div>
        )
}


const mountNode = document.getElementById('app')
if (mountNode == undefined)
    console.log('index.html is missing a div with the app ID');
else
    render(( <App /> ), mountNode)
