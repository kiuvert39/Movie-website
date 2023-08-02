import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './player.css'

function Request() {
  const [movieName,setMovieName] =useState("god of war") 
  return (
  <>
    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        
      />
    
      <div>
              <Button variant="primary" size="w-100"> Block level button</Button>

          </div>
        
      
    </>
  )
}

export default Request
