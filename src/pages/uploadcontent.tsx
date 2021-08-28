import React from 'react';
import NavbarCom from '../components/navbar';
import Sidebar from '../components/sideBar';
import Bar from '../components/generic/observerbar';
import TextBox from '../components/generic/input/textbox';
import Select from '../components/generic/input/select';
import UploadButton from '../components/generic/input/uploadButton';
import TextArea from '../components/generic/input/textarea';
export default function Index() {
  return (
    <>
      <NavbarCom />
      <div className='d-flex'>
        <Sidebar />
        <div className='right-sec'>
          <div className='headingBar'>
            <h1 className='fw700 fs36 lh36'>Upload Content</h1>
          </div>
          <div className='d-flex m-auto align-items-center justify-content-between flex-wrap'>
            <TextBox label='Title' type='text' />
            <Select
              title='Select'
              label='Category'
              items={[
                { id: 0, title: 'Blog' },
                { id: 1, title: 'Event' },
                { id: 2, title: 'News etc.' },
              ]}
            />
            <UploadButton title='Image' label='Upload' />

            <Select
              title='Select'
              label='Category'
              items={[
                { id: 0, title: 'Blog' },
                { id: 1, title: 'Event' },
                { id: 2, title: 'News etc.' },
              ]}
            />
          </div>
          <div className='d-flex justify-content-center mt-5'>
            <TextArea label='Description' />
          </div>

          <div className=' mt-5 btn-flx-cst-m23213'>
            <button className='btn d-btn fw500 fs24 lh36'>Upload</button>
            <button className='btn btn-borderd fw500 fs24 lh36'>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}
