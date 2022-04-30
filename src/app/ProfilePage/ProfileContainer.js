
/* eslint-disable max-len */
import React from 'react'
import '../App.css';
import { Container, Rail, Sticky, Segment, Checkbox } from 'semantic-ui-react'

const ContainerExampleProfile = () => (
  
  <Container className='shopContainer'>
    <Rail position='left'>
                <Sticky context={this.contextRef}>
                  <Segment>
                    <Checkbox
                      checked={true}
                      label='Sticky pox'
                      onChange={this.handleToggle}
                      toggle
                    />
                  </Segment>
                </Sticky>
              </Rail>
              <article>
              <h1 className='liner'>Meinbilder</h1>
              {/* <hr/>
              <h2 className='textcon'>Profile</h2> */}
            </article>
  </Container>
)

export default ContainerExampleProfile