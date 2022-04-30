
import React from 'react';
import '../App.css';
import {Menu} from 'semantic-ui-react'
import BreadcrumbExample from './BreadCrumb';


const Footer = (props) => {   
    return (
        <Menu id="footer" borderless>
                <Menu.Item className='license'>Copyright &copy; 2004</Menu.Item>
                <BreadcrumbExample />

        </Menu>
    )
}

export default Footer