import React from 'react';

const Body = ({}) => {
  return (
    <div className="mt -4 text-center" style={{ color: '#000000' }}>
      <h2> Election Results</h2>
      <hr
        style={{
          width: '70%',
          borderStyle: 'solid',
          borderWidth: '2px',
          borderColor: '#000000',
        }}
      />
      <div className="p3 ml-auto mr-auto" style={{ width: '40%' }}>
        <div className="row ml-auto mr-auto mb-2" style={{ width: '90%' }}>
          <div className="col">
            <p>#</p>
          </div>
          <div className="col">
            <p>Name</p>
          </div>
          <div className="col">
            <p>Votes</p>
          </div>
        </div>
        <hr
          style={{ width: '90%', borderStyle: 'solid', borderColor: '#000000' }}
        />

        <div className="row ml-auto mr-auto mt-2 mb-2" style={{ width: '90%' }}>
          <div className="col">
            <p> Candidate 2 </p>
          </div>
          <div className="col">
            <p></p>
          </div>
          <div className="col">
            <p></p>
          </div>
        </div>
      </div>
      <div className="ny-5 mr-auto ml-auto text-left" style={{ width: '70%' }}>
        <h5>Cast Your Vote</h5>
      </div>
      <p className="my-5">
        Your address: <span className="font-weight-bold"></span>{' '}
      </p>
    </div>
  );
};

export default Body;
