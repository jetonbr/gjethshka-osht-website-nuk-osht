import React from 'react'
import { Button, Icon, Image, Modal, Label, List } from 'semantic-ui-react'

const ModalExampleScrollingUserProfile = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal className='profilemodalbtn'
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button  className='profile-btn-modal'><Icon name='eye' />Profile</Button>}
    >
      <Modal.Header>Profile Picture</Modal.Header>
      <Modal.Content image scrolling>
        <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped />
        <List className='divided-profile-modal' divided selection>
                            <List.Item className='user-profile-mod'>
                            {/* <Icon name='window minimize' />   */}
                            <Label className='user-label' horizontal>@Username</Label>
                            </List.Item>

                            <List.Item className='user-profile-mod'>
                            {/* <Icon name='window minimize' />      */}
                            <Label className='user-label' horizontal>mike@tolltref.com</Label>
                            </List.Item>

                            <List.Item className='user-profile-mod'>
                            {/* <Icon name='window minimize' />      */}
                            <Label className='user-label' horizontal>24y</Label>
                            </List.Item>

                            <List.Item className='user-profile-mod'>
                            {/* <Icon name='window minimize' />      */}
                            <Label className='user-label' horizontal>Berlin</Label>
                            </List.Item>

                            <List.Item className='user-profile-mod'>
                            {/* <Icon name='window minimize' />       */}
                            <Label className='user-label' horizontal>30100</Label>
                            </List.Item>

                            <List.Item className='user-profile-mod'>
                            {/* <Icon name='window minimize' />    */}
                            <Label className='user-label' horizontal>Male</Label>
                                </List.Item>
                            </List>

        <Modal.Description>
          <p>
            This is an example of expanded content that will cause the modal's
            dimmer to scroll.
          </p>

          <Image className='userprofbody'
            src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
            style={{ marginBottom: 10 }}
          />
          <Image className='userprofbody'
            src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
            style={{ marginBottom: 10 }}
          />
          <Image className='userprofbody'
            src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
            style={{ marginBottom: 10 }}
          />
          <Image className='userprofbody'
            src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
            style={{ marginBottom: 10 }}
          />
          <Image className='userprofbody'
            src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
            style={{ marginBottom: 10 }}
          />
          <Image className='userprofbody'
            src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
            style={{ marginBottom: 10 }}
          />
          <Image className='userprofbody'
            src='https://react.semantic-ui.com/images/avatar/large/matthew.png'
            style={{ marginBottom: 10 }}
          />
          <Image className='userprofbody'
          src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Proceed <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleScrollingUserProfile