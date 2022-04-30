import React from 'react'
import '../App.css';
import { Form, TextArea } from 'semantic-ui-react'

const TextAreaExampleMinHeight = () => (
  <Form>
    <TextArea className='textbio' placeholder='Tell us somthing about you...' style={{ minHeight: 5 }} />
  </Form>
)

export default TextAreaExampleMinHeight