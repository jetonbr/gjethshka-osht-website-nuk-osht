import React from 'react'
import '../App.css';
import { Breadcrumb } from 'semantic-ui-react'
import ModalExampleDimmer from './AgbInfo';



const BreadcrumbExample = () => (
  <Breadcrumb className='breadcrumb'>
    <Breadcrumb.Section link><ModalExampleDimmer />
    </Breadcrumb.Section>
    <Breadcrumb.Divider className='dv'/>
    <Breadcrumb.Section link>Datenschutz & Bestimmungen</Breadcrumb.Section>
    <Breadcrumb.Divider className='dv'/>
    <Breadcrumb.Section link>Kontakt</Breadcrumb.Section>
  </Breadcrumb>
  
)

export default BreadcrumbExample
