import React from 'react'
import '../App.css';
import { Button, Modal } from 'semantic-ui-react'

function ModalExampleShorthand() {
  return (
    <Modal className='agbmodal'
      trigger={<Button className='actionbtn'>Save</Button>}
      header='Reminder!'
      content='Call Benjamin regarding the reports.'    
      actions={['Snooze', { key: 'done', content: 'Done', positive: true }]}
    />
    
  )
}
  
export default ModalExampleShorthand