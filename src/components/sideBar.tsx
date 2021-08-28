import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Icon from '../styles/Icon';
import SideBarItem from './sidebar/sidebaritem';

export default function Sidebar() {
  return (
    <div className='cst-sidebar'>
      <div className='pos-abs'>
        <SideBarItem
          nav='/'
          icon='img/dashboard.png'
          active={true}
          title='Dashboard'
        />
        <SideBarItem
          nav='/uploadcontent'
          icon='img/1.png'
          active={false}
          title='Upload Content'
        />
        <SideBarItem
          nav='/managecontent'
          icon='img/2.png'
          active={false}
          title='Manage Content'
        />
        <SideBarItem
          nav='/observer'
          icon='img/3.png'
          active={false}
          title='Observers'
        />
        <SideBarItem
          nav='/newsurveys'
          icon='img/4.png'
          active={false}
          title='Surveys'
        />
        <SideBarItem
          nav='/pages'
          icon='img/5.png'
          active={false}
          title='Create Page'
        />
        <SideBarItem
          nav='/observer'
          icon='img/6.png'
          active={false}
          title='Observer Data'
        />
        <SideBarItem
          nav='/uploadbanner'
          icon='img/7.png'
          active={false}
          title='Banner Images'
        />
        <SideBarItem
          nav='members'
          icon='img/8.png'
          active={false}
          title='Members'
        />
      </div>
    </div>
  );
}
