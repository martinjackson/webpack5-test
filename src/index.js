
import * as React from 'react'
import { useState } from 'react';
import { render } from 'react-dom'


import './style.scss';
import logo from './NCTR.png';

const marginStyle = {
  margin: "20px",
};

const welcomeStyle = {
margin: "21px",
//  textAlign: "right",
};

const topStyle = {
display: "flex",
flexDirection: "row",
justifyContent: "space-between"
}

const centerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
  }

const username = 'MartinJackson'

const App = () => {
  const [show, setShow] = useState(false);

  return (<>
              <div style={topStyle}>
                  <img src={logo} style={marginStyle} />
                  <h2 style={welcomeStyle}>{'Welcome: ' + username}</h2>
              </div>
              <div style={topStyle}>
                  <p>This is some text</p>
              </div>
        </>)
}


const mountNode = document.getElementById('app')
if (mountNode == undefined)
    console.log('index.html is missing a div with the app ID');
else
    render(( <App /> ), mountNode)
