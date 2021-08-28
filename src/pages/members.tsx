import React from 'react';
import NavbarCom from '../components/navbar';
import Sidebar from '../components/sideBar';
import Bar from '../components/generic/observerbar';
import TextBox from '../components/generic/input/textbox';
import Select from '../components/generic/input/select';
import UploadButton from '../components/generic/input/uploadButton';
import TextArea from '../components/generic/input/textarea';
import ContentCard from '../components/generic/cards/contentcard';
import PostTable from '../components/generic/tables/postTables';
import MemberTable from '../components/generic/tables/memberTable';
export default function Index() {
  return (
    <>
      <NavbarCom />
      <div className='d-flex'>
        <Sidebar />
        <div className='right-sec'>
          <div className='headingBar'>
            <h1 className='fw700 fs36 lh36'>Members</h1>
            <button className='btn d-btn fw500 fs24 lh36'>Add New</button>
          </div>
          <div className='d-flex m-auto align-items-center justify-content-between'>
            <ContentCard title='Total Members' total={100} />
          </div>
          <div className='d-flex justify-content-center mt-5'>
            <MemberTable
              columns={[
                'Usernames',
                'Email Address',
                'Locations',
                'Election Centers',
                'Options',
              ]}
              rows={[
                {
                  name: ' Lina Smith ',
                  email: 'linasmith@gmail.com',
                  location: '132, My Street, Bigtown ',
                  electioncenter: 'ABC Election Center',
                },
              ]}
              title='Current Members'
            />
          </div>
        </div>
      </div>
    </>
  );
}
