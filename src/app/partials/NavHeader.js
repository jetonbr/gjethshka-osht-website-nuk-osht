import React, {useContext} from 'react';
import '../App.css';
import { Menu, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {AuthContext} from '../../UserContext';

const NavHeader = () => {
    const value = useContext(AuthContext);

    return (
        <Menu borderless>
            <Menu.Menu position='left'>
                <Menu.Item as={Header} position="left">tolltref</Menu.Item>
            </Menu.Menu>
            {/*checking if the user is logged in, so that buttons are rendered or not*/}
            {value.loggedIn ?
                <Menu.Menu className='navtext' position='right'>
                    <Menu.Item className='menut' as={Link} to="/" active={window.location.hash === '#/feed'}>Timeline</Menu.Item>
                    <Menu.Item className='menut' as={Link} to="/people" active={window.location.hash === '#/people'}>Shop</Menu.Item>
                    <Menu.Item className='menut' as={Link} to="/profile" active={window.location.hash === '#/profile'}>Profile</Menu.Item>
                    {/* <Menu.Item as={Link} onClick={() => value.removeAuth()}>Logout</Menu.Item> */}
                    <button id='loutbtn' onClick={() => value.removeAuth()}>Logout</button>
                </Menu.Menu> :
                <React.Fragment />}
        </Menu>
    )
}

export default NavHeader