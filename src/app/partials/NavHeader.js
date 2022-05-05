import React, {useContext} from 'react';
import '../App.css';
import { Menu, Header, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../store/AuthProvider';
import DropdownTriggerExample from './nav-dropdown';
const NavHeader = () => {
    const value = useContext(AuthContext);

    return (
        <Menu borderless className='nav-menu'>
            <Menu.Menu position='left'>
                <Menu.Item as={Header} position="left">tolltref</Menu.Item>
            </Menu.Menu>
            {/*checking if the user is logged in, so that buttons are rendered or not*/}
            {value.isLoggedIn && <React.Fragment>
                <Menu.Menu className='navtext' position='right'>
                    <Menu.Item className='menut' as={Link} to="/" active={window.location.hash === '#/feed'}>Timeline</Menu.Item>
                    <Menu.Item className='menut' as={Link} to="/people" active={window.location.hash === '#/people'}>Shop</Menu.Item>
                    <Menu.Item className='menut' as={Link} to="/profile" active={window.location.hash === '#/profile'}>Profile</Menu.Item>
                    {/* <Menu.Item as={Link} onClick={() => value.removeAuth()}>Logout</Menu.Item> */}
                    <button id='loutbtn' onClick={() => value.clearAuth()}>Logout</button>
                </Menu.Menu> 
                <DropdownTriggerExample onLogout={() => value.clearAuth()} />
            </React.Fragment>}
        </Menu>
    )
}

export default NavHeader