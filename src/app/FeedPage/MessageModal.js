import React from 'react'
import '../App.css';
import { Button, Icon, Image, Modal } from 'semantic-ui-react'
import ChatRoom from '../../chat/Chat';

const ModalExampleScrollingUserMessage = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal className='msgbtnmodalcon'
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button  className='profile-btn-modal'> <Icon name='telegram plane' />Message</Button>}>
        
      <ChatRoom />
    
    </Modal>
  )
}

export default ModalExampleScrollingUserMessage