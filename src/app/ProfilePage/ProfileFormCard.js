import { Container } from '@material-ui/core'
import '../App.css';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
// import image from '../../assets/man.jpg'
// import ModalExampleShorthand from './ProfileInp';
import TabExampleSecondaryPointing from './ProfileTab';
import { Label, List } from 'semantic-ui-react'
import ImageExampleCircular from './ProfileCircularImage';
// import { Icon } from "semantic-ui-react";


const ProfileFormCard = () => {
  return (
      <Container>
        <div className='container emp-profile'>
            <from method="">
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='profile-con'>
                            <ImageExampleCircular />
                            {/* <img className='profilimg' src={image} alt="profile" /> */}
                        </div>
                    </div>
                    <div className='UserCon'>
                       <div className='UserPox'>
                         <List className='divided-content' divided selection>
                            <List.Item className='user-info'>
                            {/* <Icon name='window minimize' />   */}
                            <Label className='user-label' horizontal>@Username</Label>
                            </List.Item>

                            <List.Item className='user-info'>
                            {/* <Icon name='window minimize' />      */}
                            <Label className='user-label' horizontal>mike@tolltref.com</Label>
                            </List.Item>

                            <List.Item className='user-info'>
                            {/* <Icon name='window minimize' />      */}
                            <Label className='user-label' horizontal>24y</Label>
                            </List.Item>

                            <List.Item className='user-info'>
                            {/* <Icon name='window minimize' />      */}
                            <Label className='user-label' horizontal>Berlin</Label>
                            </List.Item>

                            <List.Item className='user-info'>
                            {/* <Icon name='window minimize' />       */}
                            <Label className='user-label' horizontal>30100</Label>
                            </List.Item>

                            <List.Item className='user-info'>
                            {/* <Icon name='window minimize' />    */}
                            <Label className='user-label' horizontal>Male</Label>
                                </List.Item>
                            </List>
                        {/* <div className='profile-work'>
                            <p>Work Link</p>
                            <a href='/' target='_blank'>Work Link 1</a>
                            
                            <a href='/' target='_blank'>Work Link 2</a>
                            <br />
                            <a href='/' target='_blank'>Work Link 3</a>
                            <br />
                            <a href='/' target='_blank'>Work Link 4</a>
                            <br />
                            <a href='/' target='_blank'>Work Link 5</a>
                            <br />
                            <a href='/' target='_blank'>Work Link 6</a>
                        </div> */}
                    </div>
                        
                </div>
                    <div className='col-md-6'>
                        <div className='profile-head'>
                            <p className='profile-rating mt-3 mb-5'><strong>Rated: </strong><span>1/10</span></p>
                            <div class="container">
                                <TabExampleSecondaryPointing />
                                {/* <ul className='nav nav-tabs' role='tablist'>
                                    <li className='nav-item'><a className='nav-link active' id='profile-tab' data-toggle='tab' href="#profile" role='tab'>Profile</a></li>
                                    <li className='nav-item'><a className='nav-link' id='photos-tab' data-toggle='tab' href="#photos" role='tab'>Photos</a></li>
                                </ul> */}
                            </div>

                        </div>
                    </div>
                        <div className='edit-btn'>
                            {/* <input type='text' className='profile-edit-btn btn-secondary btn-sm' name='btnAddMore' value='Edit Profile'/> */}
                            {/* <ModalExampleShorthand /> */}
                        </div>
                </div>
               
            </from>
        </div>    
      </Container>
  )
}

export default ProfileFormCard