import React from 'react'
import '../App.css';
import { Button } from 'semantic-ui-react'

const ButtonExampleConditionals = () => (
  <Button.Group className='btn-con'>
    <Button className='herrbtn'>Herr</Button>
    <Button.Or />
    <Button className='fraubtn'>Frau</Button>
  </Button.Group>
)

export default ButtonExampleConditionals