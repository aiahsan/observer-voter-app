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
export default function Index() {
  return (
    <>
      <NavbarCom />
      <div className='d-flex'>
        <Sidebar />
        <div className='right-sec'>
          <div className='headingBar'>
            <h1 className='fw700 fs36 lh36'>Manage Content</h1>
          </div>
          <div className='d-flex m-auto align-items-center justify-content-between flex-wrap hajsdkfh'>
            <ContentCard title='Blogs' total={12} />
            <ContentCard title='News' total={15} />
            <ContentCard title='Events' total={3} />
            <ContentCard title='Surveys' total={2} />
          </div>
          <div className='d-flex justify-content-center mt-5'>
            <PostTable
              columns={[
                'Title',
                'Category',
                'Publisher',
                'Publish Date',
                'Options',
              ]}
              rows={[
                {
                  title: 'Blog Post Title',
                  category: 'Blog',
                  publisher: 'John Smith',
                  publishDate: '1/12/2020',
                },
              ]}
              title='Total Posts'
            />
          </div>
        </div>
      </div>
    </>
  );
}
