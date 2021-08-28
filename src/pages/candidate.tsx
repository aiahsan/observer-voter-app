import React from 'react';
import NavbarCom from '../components/navbar';
import Sidebar from '../components/sideBar';
import Bar from '../components/generic/observerbar';
import CandidateTable from '../components/generic/tables/candidateTable';
export default function Index() {
  return (
    <>
      <NavbarCom />
      <div className='d-flex'>
        <Sidebar />
        <div className='right-sec'>
          <div className='headingBar'>
            <h1 className='fw700 fs36 lh36'>Candidate Data</h1>
            <div className='calview mb-5'>
              <h2 className='fw500 fs18 lh48'>Yearly</h2>
              <h2 className='fw500 fs18 lh48 cgry'>Monthly</h2>
            </div>
          </div>
          <div className='d-flex m-auto'>
            <div className='chart'></div>
          </div>
          <div className='d-flex justify-content-center mt-5'>
            <CandidateTable
              columns={['No.', 'Observers', 'Candidates', 'Votes']}
              rows={[
                {
                  no: 1,
                  Observers: 'Elina Smith',
                  Candidates: 'Bob Smith',
                  Votes: '152',
                },
              ]}
              title='Observers Data'
            />
          </div>

          <div className='d-flex justify-content-center mt-5'>
            <button className='btn d-btn fw500 fs24 lh36'>Post Result</button>
          </div>
        </div>
      </div>
    </>
  );
}
