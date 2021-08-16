import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Web3 from 'web3';
import './App.css';
import Electionabi from './contracts/Election.json';
import Navbar from './Navbar.js';
import Body from './Body.js';

function App() {
  useEffect(() => {
    loadWeb3();
    LoadBlockchaindata();
  }, []);

  const [Currentaccount, setCurrentaccount] = useState('');
  const [loader, setloader] = useState(true);
  const [Electionsm, SetElectionsm] = useState();
  const [Candidate1, setCandidate1] = useState();
  const [Candidate2, setCandidate2] = useState();

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        'Non-Ethereum Browser detected.You should consider trying metamask'
      );
    }
  };

  const LoadBlockchaindata = async () => {
    setloader(true);
    const web3 = window.web3;

    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setCurrentaccount(account);
    const networkId = await web3.eth.net.getId();

    const networkData = Electionabi.networks[networkId];

    if (networkData) {
      const election = new web3.eth.Contract(
        Electionabi.abi,
        networkData.address
      );
      const candidate1 = await election.methods.candidates(1).call();
      const candidate1id = candidate1.id;
      const candidate1name = candidate1.name;
      const candidate1votecount = candidate1.votecount;

      const candidate2 = await election.methods.candidates(2).call();
      const candidate2id = candidate2.id;
      const candidate2name = candidate2.name;
      const candidate2votecount = candidate2.votecount;

      setCandidate1(candidate1);
      setCandidate2(candidate2);

      SetElectionsm(election);
      setloader(false);
    } else {
      window.alert('The smart contract is not deployed on the current network');
    }
  };

  if (loader) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <Navbar account={Currentaccount} />
      <Body candidate1={Candidate1} candidate2={Candidate2} />
    </div>
  );
}

export default App;
