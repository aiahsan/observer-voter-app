import React from 'react';
import NavbarCom from '../components/navbar';
import Sidebar from '../components/sideBar';
import Bar from '../components/generic/observerbar';
export default function Index() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <NavbarCom />
      <div className='d-flex'>
        <Sidebar />
        <div className='right-sec'>
          <div className='headingBar'>
            <h1 className='fw700 fs36 lh36'>Dashboard</h1>
            <div className='calview'>
              <h2 className='fw500 fs18 lh48'>Yearly</h2>
              <h2 className='fw500 fs18 lh48 cgry'>Monthly</h2>
            </div>
          </div>
          <div className='d-flex m-auto'>
            <div className='chart'></div>
          </div>
          <div className='d-flex justify-content-center mt-5 kdsjaife'>
            <div className='cardcst mr-2 px-5 py-3 mr-5'>
              <h2 className='text-left fw600 fs24 lh48'>Total Votes</h2>
              <h2 className='text-center fw600 fs34 lh48 mx-5 my-2'>84%</h2>
              <div className='d-flex justify-content-between'>
                <div>
                  <p className='text-center  fs24 lh32 cb1'>Male</p>
                  <p className='text-center  fs24 lh32 cb1'>52%</p>
                </div>
                <div>
                  <p className='text-center  fs24 lh32 cp1'>Female</p>
                  <p className='text-center  fs24 lh32 cp1'>32%</p>
                </div>
              </div>
            </div>
            <div className='cardcst mr-2 px-5 py-3 barHead'>
              <h2 className='text-left fw600 fs24 lh48'>Observer Requests</h2>
              <div className='d-flex flex-column '>
                <Bar
                  src='/img/logo.png'
                  name='Lina Smith'
                  desc='is waiting for your request to be approved!'
                />
                <Bar
                  src='/img/logo.png'
                  name='Lina Smith'
                  desc='is waiting for your request to be approved!'
                />
                <Bar
                  src='/img/logo.png'
                  name='Lina Smith'
                  desc='is waiting for your request to be approved!'
                />
                <Bar
                  src='/img/logo.png'
                  name='Lina Smith'
                  desc='is waiting for your request to be approved!'
                />
                <a className='text-right fw500 fs18 lh32 cb1'>view all</a>
              </div>
            </div>
          </div>

          <div className='d-flex justify-content-center mt-5'>
            <button className='btn d-btn fw500 fs24 lh36'>Download</button>
          </div>
        </div>
      </div>
    </>
  );
}
